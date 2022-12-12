import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchAuthMe } from '../../reduxStore/authSlice';
import { fetchAllProducts, fetchProductsByCategory } from '../../reduxStore/productsSlice';
import CategoriesPanel from '../CategoriesPanel/CategoriesPanel';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import styles from './Store.module.css';
const Store = () => {

    const [catFlag, setCatFlag] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const {items, loading, message} = useSelector((state) => state.products);
    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch(fetchAuthMe(localStorage.getItem('token')))
        }
    }, [])

    // let products = items.map(product => {
    //    return <ProductCard 
    //    key={product._id}
    //    id={product._id}
    //    title={product.title}
    //    description={product.description}
    //    url={product.image}
    //    price={product.price}
    //    rating={product.rating}
    //    />
    // });
    // if(searchValue.length > 0) {
    //    products = items.filter(product => product.title.toLowerCase().includes(searchValue)).map(product => {
    //        return <ProductCard 
    //        key={product._id}
    //        id={product._id}
    //        title={product.title}
    //        description={product.description}
    //        url={product.image}
    //        price={product.price}
    //        rating={product.rating}
    //        />
    //     });
    // }


    return(
        <div className={styles.body}>
            <Header onShowCategoriesHandler={() => setCatFlag(prev => !prev)} onSearchHandler={setSearchValue}/>
            <div className={styles.main}>
                {catFlag && <CategoriesPanel />}
                <Outlet context={{searchValue}}/>
            </div>
        </div>
    )
}

export default Store;

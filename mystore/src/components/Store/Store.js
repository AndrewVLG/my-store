import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../reduxStore/productsSlice';
import CategoriesPanel from '../CategoriesPanel/CategoriesPanel';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Store.module.css';
const Store = () => {
    const [catFlag, setCatFlag] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])
    
    const showCategories = () => {
        setCatFlag(prev => !prev);
    }
    const {items, loading, message} = useSelector((state) => state.products)
     const products = items.map(product => {
        return <ProductCard 
        key={product._id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.image}
        price={product.price}
        rating={product.rating}
        />
     })
    return(
        <div className={styles.body}>
            <Header onShowCategoriesHandler={showCategories}/>
            <div className={styles.main}>
                {catFlag && <CategoriesPanel />}
                
                <div className={styles['products-container']}>
                    {products}
                </div>
                
            </div>
        </div>
    )
}

export default Store;
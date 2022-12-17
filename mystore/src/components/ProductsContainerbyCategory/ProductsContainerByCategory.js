import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useOutletContext, useParams } from 'react-router-dom';
import { fetchAllProducts, fetchProductsByCategory } from '../../reduxStore/productsSlice';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsContainerByCategory.module.css';

const ProductsContainerByCategory = () => {
    const {category} = useParams();

    const {searchValue} = useOutletContext();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsByCategory(category.toLocaleLowerCase()))
    }, [])
    const products = useSelector(state => state.products);


    let elements = products.items.map(product => {
        return <ProductCard 
        key={product._id}
        id={product._id}
        title={product.title}
        description={product.description}
        url={product.image}
        price={product.price}
        rating={product.rating}
        />
     });
     if(searchValue.length > 0) {
        elements = products.items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(product => {
            return <ProductCard 
            key={product._id}
            id={product._id}
            title={product.title}
            description={product.description}
            url={product.image}
            price={product.price}
            rating={product.rating}
            />
         });
     }
    return (
        <div className={styles['products-container']}>
            {elements}
        </div>
    )
}
export default ProductsContainerByCategory;
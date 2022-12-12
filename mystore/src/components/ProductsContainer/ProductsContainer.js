import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import { fetchAllProducts, fetchProductsByCategory } from '../../reduxStore/productsSlice';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsContainer.module.css';

const ProductsContainer = () => {
    const {category} = useParams();
    const {searchValue} = useOutletContext();
    const dispatch = useDispatch();
    useEffect(() => {
        if(category.length > 0) {
           return dispatch(fetchProductsByCategory(category))
        }
        dispatch(fetchAllProducts());
    }, [])
    const products = useSelector(state => state.products);
    console.log(products);
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
export default ProductsContainer;
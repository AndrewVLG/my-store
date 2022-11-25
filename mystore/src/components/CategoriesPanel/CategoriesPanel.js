import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, fetchProductsByCategory } from '../../reduxStore/productsSlice';
import CartModal from '../CartModal/CartModal';
import styles from './CategoriesPanel.module.css';

const CategoriesPanel = () => {
    const [cartFlag, setCartFlag] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);


    const showCart = () => {
        setCartFlag(prev => !prev);
    }
    const buttons = ['All', 'Electronics', "Men's clothing", "Women's clothing", 'Jewellery']
        .map(item => <button 
            key={`${Math.random()}`}
            onClick={item === 'All' ? () => dispatch(fetchAllProducts()) : () => dispatch(fetchProductsByCategory(item.toLowerCase()))}
            >{item}</button>)

    return (
        <div className={styles['categories-container']}>
            {cartFlag && auth.status && <CartModal onShowCartHandler={showCart}/>}
            {buttons}
            <button  onClick={showCart}>Cart</button>
        </div>
    )
}

export default CategoriesPanel;
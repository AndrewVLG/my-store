import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from '../../reduxStore/authSlice';
import { fetchAllProducts, fetchProductsByCategory } from '../../reduxStore/productsSlice';
import CartModal from '../CartModal/CartModal';
import styles from './CategoriesPanel.module.css';

const CategoriesPanel = () => {
    const [cartModal, setCartModal] = useState({msg: '', flag: false});
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);


    const showCart = () => {
        if(!auth.status) {
            setCartModal(prev => ({
                ...prev,
                msg: 'The user is not logged in',
            }));
            setTimeout(() => setCartModal(prev => ({
                ...prev,
                msg: '',
            })), 2000);
            return;
        }
        setCartModal(prev => ({
            ...prev,
            flag: !prev.flag,
        }));
    }
    const buttons = ['All', 'Electronics', "Men's clothing", "Women's clothing", 'Jewellery']
        .map(item => <button 
            key={`${Math.random()}`}
            onClick={item === 'All' ? () => dispatch(fetchAllProducts()) : () => dispatch(fetchProductsByCategory(item.toLowerCase()))}
            >{item}</button>)

    return (
        <div className={styles['categories-container']}>
            {cartModal.flag && ReactDom.createPortal(<CartModal onShowCartHandler={showCart}/>, document.getElementById('cart-modal'))}
            {buttons}
            <button onClick={showCart}>Cart</button>
            <p className={styles['cart-msg']}>{!auth.status && cartModal.msg}</p>
        </div>
    )
}

export default CategoriesPanel;
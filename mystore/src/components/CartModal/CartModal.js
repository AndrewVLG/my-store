import React from 'react';
import styles from './CartModal.module.css';
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
const CartModal = (props) => {
    const auth = useSelector(state => state.auth);

    const totalPrice = auth.cart.reduce((sum, current) => sum + current.price, 0).toFixed(2);
    const cartItems = auth.cart.map(product => {
        return <CartItem 
        key={product._id}
        id={product._id}
        title={product.title}
        description={product.description}
        url={product.image}
        price={product.price}
        rating={product.rating}
        />
    })
    return (
        <React.Fragment>
            <div onClick={props.onShowCartHandler} className={styles.bg}/>
            <div className={styles.modal}>
                <div className={styles['products-container']}>
                    {cartItems}
                    
                </div>
                <div className={styles.container}>
                    <p className={styles.price}>{`Total price: ${totalPrice}$`}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartModal;
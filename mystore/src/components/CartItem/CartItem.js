import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleareMessage, fetchAddToCart } from '../../reduxStore/cartSlice';
import RatingBar from '../RatingBar/RatingBar';
import styles from './CartItem.module.css';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const [posMessage, setPosMessage] = useState(0);
    const cart = useSelector(state => state.cart);

    const addToCart = (e) => {
        dispatch(fetchAddToCart(props.id));
        setPosMessage(e.target.offsetTop);
    }

    const cleareMsg = () => {
        setTimeout(() => {
            dispatch(cleareMessage());
            setPosMessage(0);
        }, 1000);
    };

    return (
        <div className={styles.wrap}>

            <h3>{props.title}</h3>
            <div className={styles.card}>
                <div className={styles.container}>
                    <div className={styles['img-container']}>
                        <img src={props.url}/>
                    </div>
                    <div className={styles['price-container']}>

                        {posMessage !== 0 && cart.message !== null && <p style={{top: posMessage}} className={styles.msg}>{cart.message}</p>}
                        <span className={styles.price}>{`price: ${props.price}$`}</span>
                    </div>
                </div>

                <div className={styles.description}>
                    <p>{props.description}</p>
                    <RatingBar rating={props.rating}/>
                </div>
            </div>
        </div>

    )
}

export default CartItem;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleareMessage, fetchAddToCart } from '../../reduxStore/cartSlice';
import RatingBar from '../RatingBar/RatingBar';
import styles from './ProductCard.module.css';

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const [posMessage, setPosMessage] = useState(0);
    const cart = useSelector(state => state.cart);
    const getPos = (e) => {
        setPosMessage(e.target.offsetTop)
    }

    const addToCart = () => {
        dispatch(fetchAddToCart(props.id));
        setTimeout(() => dispatch(cleareMessage()), 2000);
        setTimeout(() => setPosMessage(0), 2000);

    }

    return (
        <div className={styles.wrap}>
            <h3>{props.title}</h3>
            <div className={styles.card}>
                <div className={styles.container}>
                    <div className={styles['img-container']}>
                        <img src={props.url}/>
                    </div>
                    <div className={styles['price-container']}>
                        <button 
                        onMouseEnter={getPos}
                        onClick={addToCart}>add to cart</button>
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

export default ProductCard;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddToCart, clearError } from '../../reduxStore/authSlice';
import RatingBar from '../RatingBar/RatingBar';
import styles from './ProductCard.module.css';

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const [posMessage, setPosMessage] = useState(0);
    const auth = useSelector(state => state.auth);

    const addToCart = (e) => {
        dispatch(fetchAddToCart(props.id));
        setPosMessage(e.target.offsetTop);
    }

    const cleareMsg = () => {
        setTimeout(() => {
            dispatch(clearError());
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
                        <button
                        className={styles['add-btn']}
                        onMouseLeave={cleareMsg} 
                        onClick={addToCart}>add to cart</button>
                        {posMessage !== 0 && auth.message !== null && <p style={{top: posMessage}} className={styles.msg}>{auth.message}</p>}
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


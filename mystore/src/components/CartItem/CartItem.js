import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RatingBar from '../RatingBar/RatingBar';
import styles from './CartItem.module.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchRemoveFromCart } from '../../reduxStore/authSlice';
import { Button } from '@mui/material';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const [posMessage, setPosMessage] = useState(0);
    const cart = useSelector(state => state.cart);
    const removeProduct = (id) => {
        dispatch(fetchRemoveFromCart(id))
    }


    return (
        <React.Fragment>
            <div className={styles.card}>
                <div className={styles['header-wrap']}>
                    <h3>{props.title}</h3>
                </div>
                <div className={styles['img-wrap']}>
                    <img className={styles.img} src={props.url} />
                </div>
                <div className={styles['price-wrap']}>
                    <p>{`${props.price}$`}</p>
                </div>
                <div className={styles['description-wrap']}>
                    <p>{props.description}</p>
                </div>
                <div className={styles.actions}>
                    <RatingBar rating={props.rating}/>

                </div>
            </div>
        </React.Fragment>

    )
}

export default CartItem;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RatingBar from '../RatingBar/RatingBar';
import styles from './CartItem.module.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const [posMessage, setPosMessage] = useState(0);
    const cart = useSelector(state => state.cart);



    return (
        <div className={styles.wrap}>
            <div className={styles.title}>
                <h3>{props.title}</h3>
                <FontAwesomeIcon icon={faXmark} pull='right' size='2x' cursor='pointer'/>
            </div>

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
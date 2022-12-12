import { Alert, Button, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddToCart, clearError } from '../../reduxStore/authSlice';
import RatingBar from '../RatingBar/RatingBar';
import styles from './ProductCard.module.css';

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const [snackFlag, setSnackFlag] = useState(false);
    const auth = useSelector(state => state.auth);

    const addToCart = () => {
        dispatch(fetchAddToCart(props.id));
        setSnackFlag(true);
        setTimeout(() => dispatch(clearError()), 2300)
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
                    <Button 
                        onClick={addToCart}
                        color='green' 
                        variant='contained'
                    >Add to cart  
                    </Button>
                </div>
            </div>
        <Snackbar
            open={snackFlag}
            autoHideDuration={2000}
            onClose={() => setSnackFlag(false)}
        >
            {auth.status ? <Alert severity='success' variant='filled'>{auth.message}</Alert> : <Alert severity='error' variant='filled'>{auth.message}</Alert>}
        </Snackbar>
        </React.Fragment>
    )
}

export default ProductCard;

//<div className={styles.wrap}>
//
//<h3>{props.title}</h3>
//<div className={styles.card}>
//    <div className={styles.container}>
//        <div className={styles['img-container']}>
//            <img src={props.url}/>
//        </div>
//        <div className={styles['price-container']}>
//            <button
//            className={styles['add-btn']}
//            onMouseLeave={cleareMsg} 
//            onClick={addToCart}>add to cart</button>
//            {posMessage !== 0 && auth.message !== null && <p style={{top: posMessage}} className={styles.msg}>{auth.message}</p>}
//            <span className={styles.price}>{`price: ${props.price}$`}</span>
//        </div>
//    </div>
//
//    <div className={styles.description}>
//        <p>{props.description}</p>
//        <RatingBar rating={props.rating}/>
//    </div>
//</div>
//</div>
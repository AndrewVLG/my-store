import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = (props) => {

    return (
        <div className={styles.wrap}>
            <h3>{props.title}</h3>
            <div className={styles.card}>
                <div className={styles.container}>
                    <div className={styles['img-container']}>
                        <img src={props.url}/>
                    </div>
                    <div className={styles['price-container']}>
                        <span className={styles.rating}>{`rating: ${props.rating}`}</span>
                        <span className={styles.price}>{`price: ${props.price}$`}</span>
                    </div>
                </div>

                <div className={styles.description}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

    )
}

export default ProductCard;


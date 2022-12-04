import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './RatingBar.module.css';
import React from 'react';
const RatingBar = (props) => {
    const rating = props.rating / 5 * 100;
    return (
        <React.Fragment>
            <div  style={{width: `${rating}px`}} className={styles.mask}>
                <div className={styles['rating-bar']}>
                    <FontAwesomeIcon  icon={faStar} color='orange' />
                    <FontAwesomeIcon  icon={faStar} color='orange' />
                    <FontAwesomeIcon  icon={faStar} color='orange' />
                    <FontAwesomeIcon  icon={faStar} color='orange' />
                    <FontAwesomeIcon  icon={faStar} color='orange' />
                </div>

            </div>
        </React.Fragment>

    )
}

export default RatingBar;
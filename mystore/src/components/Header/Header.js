import { useState } from 'react';
import Authorization from '../Authorization/Authorization';
import styles from './Header.module.css';

const Header = (props) => {
    const [authFlag, setAuthFlag] = useState(false);

    return (
        <div className={styles.header}>
            {authFlag ? <Authorization onShowAuthHandler ={() => setAuthFlag(prev => !prev)}/> : <div className={styles['btn-container']}>
                <button
                onClick={() => setAuthFlag(prev => !prev)}
                className={styles['btn-cat']}
                >Log in</button>

                
                <button
                className={styles['btn-cat']}
                onClick={props.onShowCategoriesHandler}
                >Categories</button>
            </div>}

            <div className={styles['search-container']}>
                <label>Search: </label>
                <input />
            </div>
            <div className={styles['logo-container']}>
                <h1>My Store</h1>
            </div>
        </div>
    )
}

export default Header;
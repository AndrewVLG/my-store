import styles from './Header.module.css';

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles['btn-container']}>
                <button>Log in</button>
                <button>Categories</button>
            </div>

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
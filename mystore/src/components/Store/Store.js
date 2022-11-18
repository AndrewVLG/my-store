import React from 'react';
import CategoriesPanel from '../CategoriesPanel/CategoriesPanel';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Store.module.css';
const Store = () => {
   const products = Array(20).map(item => <div style={{width: 'auto', height: '300px', backgroundColor: 'white'}}></div>)
    return(
        <div className={styles.body}>
            <Header />
            <div className={styles.main}>
                <CategoriesPanel />
                <div className={styles['products-container']}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default Store;
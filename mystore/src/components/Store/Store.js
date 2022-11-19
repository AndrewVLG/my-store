import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoriesPanel from '../CategoriesPanel/CategoriesPanel';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Store.module.css';
const Store = () => {
    const [catFlag, setCatFlag] = useState(false);
    
    const showCategories = () => {
        setCatFlag(prev => !prev);
    }


    const products = [
        {
            id:  "6360fe17fb4e6ade99bc6071",
            category: "men's clothing",
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            price: 22.3,
            rating: 4.1,
            title: "Mens Casual Premium Slim Fit T-Shirts "
          },
          {
            id: "6361079dfb4e6ade99bc607d",
            category: "jewelery",
            description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            price: 695,
            rating: 4.6,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
          },
          {
            id: "63611e17fb4e6ade99bc6084",
            category: "electronics",
            description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
            image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            price: 64,
            rating: 3.3,
            title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 "
          }
     ];
     
     const items = products.map(product => {
        return <ProductCard 
        key={product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.image}
        price={product.price}
        rating={product.rating}
        />
     })
    return(
        <div className={styles.body}>
            <Header onShowCategoriesHandler={showCategories}/>
            <div className={styles.main}>
                {catFlag && <CategoriesPanel />}
                
                <div className={styles['products-container']}>
                    {items}
                </div>
                
            </div>
        </div>
    )
}

export default Store;
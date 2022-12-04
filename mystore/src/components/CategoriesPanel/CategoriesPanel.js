
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonFromPanel from '../ButtonFromPanel/ButtonFromPanel.js';
import styles from './CategoriesPanel.module.css';

const CategoriesPanel = () => {
    
    const [focus, setFocus] = useState(false);
    const auth = useSelector(state => state.auth);
    const buttons = ['All', 'Electronics', "Men's clothing", "Women's clothing", 'Jewellery']
        .map(item => {
            return (
                <React.Fragment>
                    <ButtonFromPanel title={item}/>
                </React.Fragment>
            )
        })

    return (
        <div className={styles['categories-container']}>
            {buttons}
        </div>
    )
}

export default CategoriesPanel;

//<button 
//            key={`${Math.random()}`}
//            onClick={item === 'All' ? () => dispatch(fetchAllProducts()) : () => dispatch(fetchProductsByCategory(item.toLowerCase()))}
//            >{item}</button>
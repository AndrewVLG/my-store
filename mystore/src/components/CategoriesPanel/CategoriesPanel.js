
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonFromPanel from '../ButtonFromPanel/ButtonFromPanel.js';
import styles from './CategoriesPanel.module.css';

const CategoriesPanel = () => {
 
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


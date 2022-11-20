import { useDispatch } from 'react-redux';
import { fetchAllProducts, fetchProductsByCategory } from '../../reduxStore/productsSlice';
import styles from './CategoriesPanel.module.css';

const CategoriesPanel = () => {
    const dispatch = useDispatch();
    const buttons = ['All', 'Electronics', "Men's clothing", "Women's clothing", 'Jewellery']
        .map(item => <button 
            key={`${Math.random()}`}
            onClick={item === 'All' ? () => dispatch(fetchAllProducts()) : () => dispatch(fetchProductsByCategory(item.toLowerCase()))}
            >{item}</button>)

    return (
        <div className={styles['categories-container']}>
            {buttons}
            <button>Cart</button>
        </div>
    )
}

export default CategoriesPanel;
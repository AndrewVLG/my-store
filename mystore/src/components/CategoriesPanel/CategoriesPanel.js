import styles from './CategoriesPanel.module.css'
const CategoriesPanel = () => {

    return (
        <div className={styles['categories-container']}>
            <button>All</button>
            <button>Electronics</button>
            <button>Men's clothing</button>
            <button>Women's clothing</button>
            <button>Jewelry</button>
        </div>
    )
}

export default CategoriesPanel;
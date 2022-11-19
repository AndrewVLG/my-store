import { Link } from 'react-router-dom';
import styles from './Authorization.module.css';

const Authorization = (props) => {

    return (
        <div className={styles.wrap}>
            <form>
            
                <label>e-mail</label>
                <input />
                <label>password</label>
                <input />
                <a href='/registration'>registration</a>
                <button
                onClick={props.onShowAuthHandler}
                >Log in</button>
                
            </form>
        </div>
    )
}

export default Authorization;
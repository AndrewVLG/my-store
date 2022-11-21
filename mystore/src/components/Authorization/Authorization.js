import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMakeAuth } from '../../reduxStore/authSlice';
import styles from './Authorization.module.css';

const Authorization = (props) => {
    const emailInput = useRef();
    const passwordInput = useRef();
    const dispatch = useDispatch();
    const makeAuth = (e) => {
        e.preventDefault();
        const userData = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
        }
        dispatch(fetchMakeAuth(userData));
        props.onShowAuthHandler();
    }
    return (
        <div className={styles.wrap}>
            <form onSubmit={makeAuth}>
            
                <label>email</label>
                <input ref={emailInput}/>
                <label>password</label>
                <input ref={passwordInput}/>
                <Link to='/registration'>registration</Link>
                <button>Log in</button>
                
            </form>
        </div>
    )
}

export default Authorization;
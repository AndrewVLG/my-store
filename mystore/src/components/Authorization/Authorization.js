import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearError, fetchMakeAuth } from '../../reduxStore/authSlice';
import styles from './Authorization.module.css';

const Authorization = (props) => {
    const emailInput = useRef();
    const passwordInput = useRef();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    console.log(auth.status)
    useEffect(() => {
        props.onShowAuthHandler();
    }, [auth.status]);
    const makeAuth = (e) => {
        e.preventDefault();
        const userData = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
        }
        dispatch(fetchMakeAuth(userData));
        setTimeout(() => dispatch(clearError()), 2000);

    }
    return (
        <div className={styles.wrap}>
            {auth.message !== null && <div>
                <p className={styles['error-msg']}>{auth.message}</p>
            </div>}
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
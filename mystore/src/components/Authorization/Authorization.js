import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearError, fetchAuthMe, fetchMakeAuth } from '../../reduxStore/authSlice';
import styles from './Authorization.module.css';

const Authorization = (props) => {
    const emailInput = useRef();
    const passwordInput = useRef();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
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

    const makeLogOut = (action) => {
        if(action === 'yes') {
            localStorage.removeItem('token');
            props.onShowAuthHandler();
            dispatch(fetchAuthMe(localStorage.getItem('token')))

        } else {
            props.onShowAuthHandler();
        }
    }

    if(auth.status) {
        return (
        <div className={styles.wrap}>
                <h3>Do you want to log out?</h3>
                <button className={styles.btn} onClick={makeLogOut}>No</button>
                <button className={styles.btn} onClick={() => makeLogOut('yes')}>Yes</button>
        </div>
        )
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
                <input type='password' ref={passwordInput}/>
                <Link to='/registration'>registration</Link>
                <div>
                    <button className={styles.btn} onClick={makeLogOut}>Cancel</button>
                    <button className={styles.btn}>Log in</button> 
                </div>

            </form>
        </div>
    )
}

export default Authorization;
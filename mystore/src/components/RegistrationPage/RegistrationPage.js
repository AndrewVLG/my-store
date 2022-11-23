import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import styles from './RegistrationPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMakeRegistration } from '../../reduxStore/authSlice';


const RegistrationPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const [errMessage, setErrMessage] = useState([]);
    const emailInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();
    const nickNameInput = useRef();
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const reg = /@/;
    useEffect(() => {
        if(auth.status === true) {
            navigate('/');
        }
        
    },[auth.status])

    const postUserData = async (e) => {
        e.preventDefault();
        if(!reg.test(emailInput.current.value)) {
            setErrMessage('Incorrect email format');
            return;
        }
        if(passwordInput.current.value.length < 6) {
            setErrMessage(['The password must be at least 6 characters long']);
            return;
        }
        if(confirmPasswordInput.current.value !== passwordInput.current.value) {
            setErrMessage(["Passwords don't match"]);
            return;
        }
        if(nickNameInput.current.value.length < 1) {
            setErrMessage('Nickname field cannot be empty');
            return;
        };
        const userData = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
            nickName: nickNameInput.current.value,
            firstName: firstNameInput.current.value,
            lastName: lastNameInput.current.value,
        }
        dispatch(fetchMakeRegistration(userData));
        setErrMessage(auth.message);
    }
    return (
        <div className={styles.wrapper}>
            <h1>My-Store</h1>
            <h2>Registration Page</h2>
            <form onSubmit={postUserData}>
                <label>E-mail: </label>
                <input 
                placeholder='Enter your E-mail'
                ref={emailInput}
                />
                <label>Password </label>
                <input 
                placeholder='Enter Password' 
                type='password'
                ref={passwordInput}
                />
                <label>Confirm password </label>
                <input 
                placeholder='Confirm Password' 
                type='password'
                ref={confirmPasswordInput}
                />
                <label>Nickname: </label>
                <input 
                placeholder='Enter Nickname'
                ref={nickNameInput}
                />
                <label>First name: </label>
                <input 
                placeholder='Enter your First name'
                ref={firstNameInput}
                />
                <label>Last name: </label>
                <input 
                placeholder='Enter your Last name'
                ref={lastNameInput}
                />
                <button>Register</button>
                <p className={styles.error}>{errMessage}</p>
            </form>
        </div>
    )
}

export default RegistrationPage;
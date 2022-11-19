import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './RegistrationPage.module.css';


const RegistrationPage = () => {
    const navigate = useNavigate();
    const emailInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();
    const nickNameInput = useRef();
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const reg = /@/;
    const postUserData = (e) => {
        e.preventDefault();
        if(!reg.test(emailInput.current.value)) {
            console.log('Incorrect e-mail')
            return;
        }
        if(passwordInput.current.value.length < 6) {
            console.log('The password must be at least 6 characters long')
            return;
        }
        if(confirmPasswordInput.current.value !== passwordInput.current.value) {
            console.log("Passwords don't match")
            return;
        }

        console.log('User created');
        navigate('/')


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
            </form>
        </div>
    )
}

export default RegistrationPage;
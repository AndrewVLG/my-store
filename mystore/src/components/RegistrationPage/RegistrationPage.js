import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import styles from './RegistrationPage.module.css';


const RegistrationPage = () => {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState([]);
    const emailInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();
    const nickNameInput = useRef();
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const reg = /@/;
    console.log(errMessage)
    const postUserData = async (e) => {
        e.preventDefault();
        if(!reg.test(emailInput.current.value)) {
            setErrMessage(['Incorrect e-mail']);
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
            setErrMessage(['Nickname field cannot be empty']);
            return;
        };
        try {
            const res = await fetch('http://localhost:3030/registration',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailInput.current.value,
                    password: passwordInput.current.value,
                    nickName: nickNameInput.current.value,
                    firstName: firstNameInput.current.value,
                    lastNameInput: lastNameInput.current.value,
                })
            });

            const data = await res.json();

            if(!res.ok) {
                let errors = [];
                data.forEach(error => {
                    errors = [...errors, error.msg];
                    setErrMessage(errors);
                })
                throw new Error('Error');
            }
            localStorage.setItem('token', data);
            navigate('/');
        } catch(e) {
            console.log(e);
        }

    }
    const errors = errMessage.map(error => <p className={styles.error}>{error}</p>)
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
                {errors}
            </form>
        </div>
    )
}

export default RegistrationPage;
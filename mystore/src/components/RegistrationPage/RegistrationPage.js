import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './RegistrationPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, fetchMakeRegistration } from '../../reduxStore/authSlice';
import RegInput from '../RegInput/RegInput';
import { Alert, Button } from '@mui/material';



const RegistrationPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const data = useSelector(state => state.data);
    useEffect(() => {
        if(auth.status === true) {
            navigate('/');
        }
        
    },[auth.status])

    const postUserData = async (e) => {
        e.preventDefault();
        dispatch(fetchMakeRegistration(data));
        setTimeout(() => dispatch(clearError()), 4000)
    };

    return (
        <div className={styles.wrapper}>
            <h1>My-Store</h1>
            <h2>Registration Page</h2>
            <form onSubmit={postUserData}>
                <RegInput title='E-mail' error='Incorrect e-mail format'/>
                <RegInput title='Password' error='The password must be at least 5 characters long'/>
                <RegInput title='Confirm password' error="Passwords don't match"/>
                <RegInput title='Nickname' error=''/>
                <RegInput title='First name' error=''/>
                <RegInput title='Last name' error=''/>
                <Button 
                    sx={{marginTop: '1%'}}
                    color='white' 
                    disabled={data.passwordError 
                        || data.emailError 
                        || data.confirmPasswordError} 
                    type='submit' 
                    variant='outlined'>Registration</Button>
                <Button
                    sx={{marginTop: '2%'}}
                    onClick={() => navigate('/')}
                    color='white'
                    variant='outlined'>Cancel</Button>
            </form>
            {auth.message !== null 
            ? <Alert 
                sx={{marginTop: '3%'}}
                severity='error' 
                variant='outlined'
                >{auth.message}
            </Alert> 
            : false}
        </div>
    )
}

export default RegistrationPage;
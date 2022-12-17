import {  Button, TextField } from '@mui/material';

import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Link, useNavigate } from 'react-router-dom';
import { fetchMakeAuth } from '../../reduxStore/authSlice';
import styles from './Authorization.module.css';

const Authorization = (props) => {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const nav = useNavigate();
    const makeAuth = (email, password) => {
        const userData = {
            email,
            password,
        }
        dispatch(fetchMakeAuth(userData));

    }


 
    return (
        <div className={styles.authorization}>
            <div className={styles.wrap}>
                <h1 className={styles.title}>Log in</h1>
                <TextField 
                    onBlur={(e) => setEmailInput(e.target.value)}
                    label='E-Mail'
                    focused
                    color='white' 
                    sx={{backgroundColor: '#ffbd2c'}}
                    margin='dense'
                />
                <TextField 
                    onBlur={(e) => setPasswordInput(e.target.value)}
                    label='Password'
                    focused
                    color='white' 
                    sx={{backgroundColor: '#ffbd2c'}}
                    margin='dense'
                />
                {!auth.status && <Link to='/registration'>Registration</Link>}
                <div className={styles['btn-container']}>
                    <Button 
                        onClick={() => nav('/')}
                        variant='outlined'
                        color='white'
                        sx={{margin: '0.3rem'}}>Cancel
                    </Button>
                    <Button 
                        onClick={() => makeAuth(emailInput, passwordInput)}
                        variant='outlined'
                        color='white'
                        sx={{margin: '0.3rem'}}>Log in</Button>
                </div>
            </div>

        </div>
    )
}

export default Authorization;

//<Modal
//            onClose={() => {
//                dispatch(clearError())
//                props.setAuthFlag()}
//            } 
//            open={props.authFlag}
//        >
//            <Box 
//                style={{
//                    backgroundColor: 'orange',
//                    display: 'flex',
//                    justifyContent: 'center', 
//                    flexDirection: 'column',
//                    alignItems: 'center',
//                    marginLeft: '33vw',
//                    marginTop:'20vh',
//                    width: '30%',
//                    height: '50%'}}
//            >
//                <TextField 
//                    onClick={() => dispatch(clearError())}
//                    onChange={(e) => {setEmailInput(e.target.value)}} 
//                    color='white' 
//                    label='E-mail' 
//                    sx={{backgroundColor: '#ffbd2c'}}
//                    focused/>
//                <TextField 
//                    onClick={() => dispatch(clearError())}
//                    onChange={(e) => setPasswordInput(e.target.value)} 
//                    color='white' 
//                    margin='dense' 
//                    label='Password' 
//                    sx={{backgroundColor: '#ffbd2c'}}
//                    focused/>
//                {auth.status !== true && <Link to='/registration'>registration</Link>}
//                <Button onClick={() => makeAuth(emailInput, passwordInput)} variant='outlined' color='white'>Log in</Button>
//                {auth.message !== null && <Alert sx={{marginTop: '3%'}} severity='error'>{auth.message}</Alert>}
//            </Box>
//
//        </Modal>
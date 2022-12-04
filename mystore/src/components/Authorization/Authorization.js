import { Alert, Box, Button, Drawer, Modal, TextField } from '@mui/material';
import { height } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearError, fetchAuthMe, fetchMakeAuth } from '../../reduxStore/authSlice';
import styles from './Authorization.module.css';

const Authorization = (props) => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        props.setAuthFlag();
    },[auth.status])
    const makeAuth = (email, password) => {

        const userData = {
            email,
            password,
        }
        dispatch(fetchMakeAuth(userData));

    }


    return (
        <Modal
            onClose={() => {
                dispatch(clearError())
                props.setAuthFlag()}
            } 
            open={props.authFlag}
        >
            <Box 
                style={{
                    backgroundColor: 'orange',
                    display: 'flex',
                    justifyContent: 'center', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginLeft: '33vw',
                    marginTop:'20vh',
                    width: '30%',
                    height: '50%'}}
            >
                <TextField 
                    onClick={() => dispatch(clearError())}
                    onChange={(e) => {setEmailInput(e.target.value)}} 
                    color='white' 
                    label='E-mail' 
                    sx={{backgroundColor: '#ffbd2c'}}
                    focused/>
                <TextField 
                    onClick={() => dispatch(clearError())}
                    onChange={(e) => setPasswordInput(e.target.value)} 
                    color='white' 
                    margin='dense' 
                    label='Password' 
                    sx={{backgroundColor: '#ffbd2c'}}
                    focused/>
                {auth.status !== true && <Link to='/registration'>registration</Link>}
                <Button onClick={() => makeAuth(emailInput, passwordInput)} variant='outlined' color='white'>Log in</Button>
                {auth.message !== null && <Alert sx={{marginTop: '3%'}} severity='error'>{auth.message}</Alert>}
            </Box>

        </Modal>
    )
}

export default Authorization;
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Authorization from '../Authorization/Authorization';
import styles from './Header.module.css';
import {Dehaze, Login, Search, ShoppingBag, PersonOutline} from '@mui/icons-material'
import { Button, InputAdornment, TextField, Alert, Snackbar } from '@mui/material';
import Cart from '../Cart/Cart';
import { clearError, fetchAuthMe } from '../../reduxStore/authSlice';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const [authFlag, setAuthFlag] = useState(false);
    const [cartFlag, setCartFlag] = useState(false);
    const searchRef = useRef();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const nav = useNavigate();
    const openCart = () => {
        if(auth.status) {
            setCartFlag(true);
        } else {
            dispatch(fetchAuthMe());
        }
    }
    return (
        <div className={styles.header}>
            <div className={styles['nav-container']}>
                <span className={styles.label}>My store</span>
                <Button 
                    onClick={props.onShowCategoriesHandler} 
                    variant='outlined' 
                    color='white'>
                    <Dehaze 
                        color='white' 
                        sx={{ fontSize: 40 }} 
                    />
                </Button>
            </div>
            <div className={styles['search-container']}>
                <TextField 
                    onChange={() => props.onSearchHandler(searchRef.current.value)}
                    inputRef={searchRef}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search/>
                          </InputAdornment>
                        ),
                    }}
                    color='green' 
                    label='Search:' 
                    focused 
                    fullWidth 
                    sx={{backgroundColor: '#ffbd2c'}}
                    icons={<Search />}
                />
            </div>
            <div className={styles['btn-container']}>
                <Button 
                    onClick={openCart} 
                    variant='outlined' 
                    color='green'>
                    <ShoppingBag color='green' sx={{ fontSize: 40 }} />
                </Button>

                    <Button 
                        onClick={() => nav('/authorization')}
                        size='large' 
                        variant='outlined' 
                        color='white' 
                        startIcon={auth.status ? <PersonOutline color='white'/> : <Login color='white' />}>
                            {auth.status ? auth.nickName : 'Log in'}
                    </Button>               


            </div>

            <Cart 
                cartFlag={cartFlag} 
                onCartFlagHandler={() => setCartFlag(false)} 
            />

        <Snackbar
            open={auth.message !== null}
            autoHideDuration={2000}
            onClose={() => dispatch(clearError())}
        >
            {auth.status ? <Alert severity='success' variant='filled'>{auth.message}</Alert> : <Alert severity='error' variant='filled'>{auth.message}</Alert>}
        </Snackbar>
        </div>
    )
}

export default Header;


//<Authorization 
//authFlag={authFlag}
//setAuthFlag={() => setAuthFlag(false)}
///>
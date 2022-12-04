import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Authorization from '../Authorization/Authorization';
import styles from './Header.module.css';
import {Dehaze, Login, ShoppingBag} from '@mui/icons-material'
import { Button, IconButton, TextField, Toolbar } from '@mui/material';
import Cart from '../Cart/Cart';

const Header = (props) => {
    const [authFlag, setAuthFlag] = useState(false);
    const [cartFlag, setCartFlag] = useState(false);
    const searchRef = useRef();
    const auth = useSelector(state => state.auth);
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
                    color='green' 
                    label='Search:' 
                    focused 
                    fullWidth 
                    sx={{backgroundColor: '#ffbd2c'}}
                />
            </div>
            <div className={styles['btn-container']}>
                <Button 
                    onClick={() => setCartFlag(true)} 
                    variant='outlined' 
                    color='green'>
                    <ShoppingBag color='green' sx={{ fontSize: 40 }} />
                </Button>
                <Button 
                    onClick={() => setAuthFlag(true)}
                    size='large' 
                    variant='outlined' 
                    color='white' 
                    startIcon={<Login color='white' />}>
                        Log in
                </Button>
            </div>
            <Authorization 
                authFlag={authFlag}
                setAuthFlag={() => setAuthFlag(false)}
            />
            <Cart 
                cartFlag={cartFlag} 
                onCartFlagHandler={() => setCartFlag(false)} 
            />
        </div>
    )
}

export default Header;
import React from 'react';
import styles from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { Button, Drawer, Box } from '@mui/material';
const Cart = (props) => {
    const auth = useSelector(state => state.auth);
    const totalPrice = auth.cart.reduce((sum, current) => sum + current.price, 0).toFixed(2);
    const cartItems = auth.cart.map(product => {
            return <CartItem 
            key={product._id}
            id={product._id}
            title={product.title}
            description={product.description}
            url={product.image}
            price={product.price}
            rating={product.rating}
            />
    })
    return (
        <Drawer 
            onClose={props.onCartFlagHandler}
            anchor='right' 
            open={props.cartFlag}
        >
            <Box sx={{
                height: 'auto', 
                width: '30vw', 
                backgroundColor: '#5DCFC2',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {cartItems}
            </Box> 
        </Drawer>
    )
}

export default Cart;


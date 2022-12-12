import React from 'react';
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { Drawer, Box } from '@mui/material';
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
    console.log(totalPrice)
    return (
        <Drawer 
            onClose={props.onCartFlagHandler}
            anchor='right' 
            open={props.cartFlag}
        >
            <Box sx={{
                height: '80%', 
                width: '30vw', 
                backgroundColor: '#5DCFC2',
                display: 'flex',
                flexWrap: 'wrap',
                overflow: 'scroll'
            }}> 
                {cartItems}
            </Box> 
            <Box sx={{
                height: '20%', 
                width: '30vw', 
                backgroundColor: '#5DCFC2',
                display: 'flex',
            }}> 

                <h2>{`Total price: ${totalPrice}$`}</h2>
            </Box>
           
        </Drawer>
    )
}

export default Cart;


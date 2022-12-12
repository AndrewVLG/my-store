import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts, fetchProductsByCategory } from "../../reduxStore/productsSlice";
import { Button } from "@mui/material";
import { CheckroomOutlined, ComputerOutlined, DiamondOutlined, SummarizeOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ButtonFromPanel = (props) => {
    const [focus, setFocus] = useState(false);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const icon = (props.title === 'All' && <SummarizeOutlined />)
        || (props.title === 'Electronics' && <ComputerOutlined />)
        || (props.title === "Men's clothing" && <CheckroomOutlined />)
        || (props.title === "Women's clothing" && <CheckroomOutlined />)
        || (props.title === "Jewellery" && <DiamondOutlined />);
        

    return (
        <React.Fragment>
            {focus 
            ? <Button 
                size="large"
                startIcon={icon}
                onBlur={() => setFocus(false)} 
                variant='outlined' 
                color="orange"
                >{props.title}</Button> 
            : <Button 
                size="large"
                startIcon={icon}
                onClick={props.title === 'All' 
                ? () => {
                    dispatch(fetchAllProducts());
                    setFocus(true)} 
                : () => {
                    nav(props.title.toLowerCase())
                    dispatch(fetchProductsByCategory(props.title.toLowerCase()));
                    setFocus(true);
                }} 
                color="green"
                >{props.title}</Button>
            }
        </React.Fragment>
        
    )
}

export default ButtonFromPanel;
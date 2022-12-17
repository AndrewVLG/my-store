import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../reduxStore/productsSlice";
import { Button } from "@mui/material";
import { CheckroomOutlined, ComputerOutlined, DiamondOutlined, SummarizeOutlined } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

const ButtonFromPanel = (props) => {
    const {category} = useParams();
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
                    nav('/');
                    setFocus(true)} 
                : () => {
                    nav(`categories/${props.title.toLowerCase()}`);
                    dispatch(fetchProductsByCategory(category.toLowerCase()));
                    setFocus(true);
                }} 
                color="green"
                >{props.title}</Button>
            }
        </React.Fragment>
        
    )
}

export default ButtonFromPanel;
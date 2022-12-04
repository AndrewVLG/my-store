
import TextField from '@mui/material/TextField'
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writeEmail, writePassword, writeNickName, writeFirstName, writeLastName, checkPassword } from '../../reduxStore/dataSlice';

const RegInput = (props) => {
    const reg = /@/;
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    useEffect(() => {
        switch(props.title) {
            case 'E-mail':
                dispatch(writeEmail(input))
                break;
            case 'Password':
                dispatch(writePassword(input))
                break;
            case 'Confirm password':
                dispatch(checkPassword(input))
                break;
            case 'Nickname':
                dispatch(writeNickName(input))
                break;
            case 'First name':
                dispatch(writeFirstName(input))
                break;
            case 'Last name':
                dispatch(writeLastName(input))
                break;
        }

    }, [input]);


    
    return (
        <TextField 
            onBlur={(e) => {
                setInput(e.target.value);
            }}
            label={
                props.title === 'E-mail' && data.emailError 
                ? props.error : props.title === 'Password' && data.passwordError 
                ? props.error : props.title === 'Confirm password' && data.confirmPasswordError
                ? props.error : props.title
            } 
            variant='outlined'
            color='green' 
            style={{backgroundColor: '#ffbd2c'}}
            margin='dense'
            focused 
            error={(props.title === 'E-mail' && data.emailError) 
                || (props.title === 'Password' && data.passwordError) 
                || (props.title === 'Confirm password' && data.confirmPasswordError)}
        />
    )
}

export default RegInput;
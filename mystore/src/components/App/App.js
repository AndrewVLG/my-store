import React from 'react';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import RegistrationPage from '../RegistrationPage/RegistrationPage';
import Store from '../Store/Store';
import { Provider } from 'react-redux';
import reduxStore from '../../reduxStore/reduxStore';

const theme = createTheme({
    palette: {
        orange: {
            main: '#ffa500'
        },
        black: {
            main: '#000000'
        },
        white: {
            main: '#ffffff'
        },
        green: {
            main: '#009E8E'
        },
        greenLight: {
            main: '#5DCFC2'
        },
        blue: {
            main: '#846FD7'
        },
    }
})

const rout = createBrowserRouter(createRoutesFromElements(
    <React.Fragment>
        <Route path='/' element={<Store />}/>
        <Route path='/registration' element={<RegistrationPage />}/>
    </React.Fragment>
))
const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Provider store={reduxStore}>
                <RouterProvider router={rout}/>
            </Provider>
        </ThemeProvider>
    )
}

export default App;
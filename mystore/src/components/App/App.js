import React from 'react';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import Store from '../Store/Store';
import { Provider } from 'react-redux';
import reduxStore from '../../reduxStore/reduxStore';
const App = () => {

    const rout = createBrowserRouter(createRoutesFromElements(
        <React.Fragment>
            <Route path='/' element={<Store />}/>
            <Route path='/registration' element={<RegistrationPage />}/>
        </React.Fragment>
    ))
    
    return (
        <Provider store={reduxStore}>
            <RouterProvider router={rout}/>
        </Provider>

    )
}

export default App;
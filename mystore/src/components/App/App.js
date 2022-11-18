import React from 'react';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import Store from '../Store/Store';
const App = () => {

    const rout = createBrowserRouter(createRoutesFromElements(
        <React.Fragment>
            <Route path='/' element={<Store />}/>
            <Route path='/registration' element={<RegistrationPage />}/>
        </React.Fragment>
    ))
    
    return (
        <RouterProvider router={rout}/>
    )
}

export default App;
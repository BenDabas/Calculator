import React from 'react';
import { Route, Routes ,BrowserRouter } from 'react-router-dom';
import CalculatorPage from '../pages/calculatorPage/CalculatorPage';
import LoginPage from '../pages/loginPage/LoginPage';


const ApplicationRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<LoginPage/>}/>
                <Route path="/calculator" element={<CalculatorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes;
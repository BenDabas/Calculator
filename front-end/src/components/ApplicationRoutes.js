import React from 'react';
import { Route, Routes ,BrowserRouter } from 'react-router-dom';
import CalculatorPage from '../pages/calculatorPage/CalculatorPage';
import HistoryPage from '../pages/historyPage/HistoryPage';
import LoginPage from '../pages/loginPage/LoginPage';


const ApplicationRoutes = () => {
    return(
            <Routes>
                <Route path="/" exact element={<LoginPage/>}/>
                <Route path="/calculator" element={<CalculatorPage/>}/>
                <Route path="/history" element={<HistoryPage/>}/>
            </Routes>
    )
}

export default ApplicationRoutes;
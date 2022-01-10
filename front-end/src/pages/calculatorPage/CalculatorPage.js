import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AddPressedCharAction } from '../../actions/CalculatorAction';

import './CalculatorPage.css';

const CalculatorPage = () => {
    const dispatch = useDispatch();  

    // const [userDetails, setUserDetails] = useState({});
    const [calculatorText, setCalculatorText] = useState(0);
    const [lastChar, setLastChar] = useState(0);
    
    // useEffect(()=> {
    //     setUserDetails(location?.state);
    // }, [])

    const handleCalculatorButtons = ({target}) => {
        if(calculatorText === 0)
            setCalculatorText(target.value);
        else
            setCalculatorText(calculatorText + target.value);
            
        dispatch(AddPressedCharAction(target.value));
        setLastChar(target.value);
    }

    const handleEqualButton = () => {
        dispatch(AddPressedCharAction("="));
        // Forbids calculate when last char is operator.
        if(!/[\*\-\+\/]/.test(lastChar)){
            const answer = eval(calculatorText);
            setCalculatorText(answer);
        }
    }

    const handleClearButton = () => {
        setCalculatorText(0);
    }

    const handleCalculatorOperators = ({target}) => {
        // allows operators if not first char && if last char was integer.
        const isValid = /[\*\-\+\/]/.test(target.value) && /\d/.test(lastChar);
        if(isValid)
        {
            dispatch(AddPressedCharAction(target.value));
            setCalculatorText(calculatorText+ target.value);
            setLastChar(target.value);
        }
    }


    return(
        <div>
            <div className="calculator">
                <input type="text" className="calculator-screen" value={calculatorText} disabled/>
                <div className="calculator-keys">
            
                    <button className="operator calculator-button" onClick={handleCalculatorOperators} value="+">+</button>
                    <button className="operator calculator-button" onClick={handleCalculatorOperators} value="-">-</button>
                    <button className="operator calculator-button" onClick={handleCalculatorOperators} value="*">&times;</button>
                    <button className="operator calculator-button" onClick={handleCalculatorOperators} value="/">&divide;</button>

                    <button className="calculator-button" onClick={handleCalculatorButtons} value="7">7</button>
                    <button className="calculator-button" onClick={handleCalculatorButtons} value="8">8</button>
                    <button className="calculator-button" onClick={handleCalculatorButtons} value="9">9</button>


                    <button className="calculator-button" onClick={handleCalculatorButtons} value="4">4</button>
                    <button className="calculator-button" onClick={handleCalculatorButtons} value="5">5</button>
                    <button className="calculator-button" onClick={handleCalculatorButtons} value="6">6</button>


                    <button className="calculator-button" onClick={handleCalculatorButtons} value="1">1</button>
                    <button className="calculator-button" onClick={handleCalculatorButtons} value="2">2</button>
                    <button className="calculator-button" onClick={handleCalculatorButtons} value="3">3</button>


                    <button className="calculator-button" onClick={handleCalculatorButtons} value="0">0</button>
                    <button className="all-clear calculator-button" onClick={handleClearButton} value="all-clear">AC</button>

                    <button className="equal-sign calculator-button" onClick={handleEqualButton} value="=">=</button>
                </div>
            </div>
        </div>
    )
}

export default CalculatorPage;
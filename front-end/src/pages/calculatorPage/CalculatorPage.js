import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { Menu, Segment } from 'semantic-ui-react';

import './CalculatorPage.css';

const CalculatorPage = () => {
    const location = useLocation(); 

    const [activeItem, setActiveItem] = useState("Calculator");
    const [userDetails, setUserDetails] = useState({});
    const [calculatorText, setCalculatorText] = useState(0);

    const handleItemClick = (e, { name }) => setActiveItem(name);
    
    useEffect(()=> {
        console.log(location?.state);
        setUserDetails(location?.state);
    }, [])

    const handleCalculatorButtons = ({target}) => {
        console.log(target.value);
        setCalculatorText(target.value);
    }


    return(
        <div>
            <Segment inverted>
                <Menu inverted pointing secondary>
                <Menu.Item
                    name='Calculator'
                    active={activeItem === 'Calculator'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='History'
                    active={activeItem === 'History'}
                    onClick={handleItemClick}
                />
                </Menu>
            </Segment>
            
            <div className="calculator">
                <input type="text" className="calculator-screen" value={calculatorText} disabled/>
                <div className="calculator-keys">
            
                    <button className="operator calculator-button" onClick={handleCalculatorButtons} value="+">+</button>
                    <button className="operator calculator-button" onClick={handleCalculatorButtons} value="-">-</button>
                    <button className="operator calculator-button" onClick={handleCalculatorButtons} value="*">&times;</button>
                    <button className="operator calculator-button" onClick={handleCalculatorButtons} value="/">&divide;</button>

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
                    <button className="all-clear calculator-button" onClick={handleCalculatorButtons} value="all-clear">AC</button>

                    <button className="equal-sign calculator-button" onClick={handleCalculatorButtons} value="=">=</button>
                </div>
            </div>
        </div>
    )
}

export default CalculatorPage;
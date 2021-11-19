import React, { useState } from 'react'

import { Menu, Segment } from 'semantic-ui-react';

import './CalculatorPage.css';

const CalculatorPage = () => {

    const [activeItem, setActiveItem] = useState("bio");

    const handleItemClick = (e, { name }) => setActiveItem(name);

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
                <input type="text" className="calculator-screen" value="0" disabled />
                <div className="calculator-keys">
            
                    <button className="operator calculator-button" value="+">+</button>
                    <button className="operator calculator-button" value="-">-</button>
                    <button className="operator calculator-button" value="*">&times;</button>
                    <button className="operator calculator-button" value="/">&divide;</button>

                    <button className="calculator-button" value="7">7</button>
                    <button className="calculator-button" value="8">8</button>
                    <button className="calculator-button" value="9">9</button>


                    <button className="calculator-button" value="4">4</button>
                    <button className="calculator-button" value="5">5</button>
                    <button className="calculator-button" value="6">6</button>


                    <button className="calculator-button" value="1">1</button>
                    <button className="calculator-button" value="2">2</button>
                    <button className="calculator-button" value="3">3</button>


                    <button className="calculator-button" value="0">0</button>
                    <button className="all-clear calculator-button" value="all-clear">AC</button>

                    <button className="equal-sign calculator-button" value="=">=</button>
                </div>
            </div>
        </div>
    )
}

export default CalculatorPage;
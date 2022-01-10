import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, Menu, Segment } from 'semantic-ui-react';

import { ClearCalculateArrayAction } from '../../actions/CalculatorAction';


const MenuPage = () => {
    const location = useLocation(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();  

    const userName = localStorage.getItem("userName");
    const email = localStorage.getItem("email");

    const [activeItem, setActiveItem] = useState("Calculator");


    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
        name === "History" ? navigate('/history') : navigate('/calculator');  
    };
    
    const handleLogoutButton = () => {
        dispatch(ClearCalculateArrayAction());
        navigate('/');
    }

    return (
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
        <Menu.Menu position='right'>

        <Menu.Item><Button onClick={handleLogoutButton} color="grey">Logout</Button></Menu.Item>
        <Menu.Item position='right'
            name={`Hello ${userName}`}
            />
        </Menu.Menu>
        </Menu>
    </Segment>)
}

export default MenuPage;
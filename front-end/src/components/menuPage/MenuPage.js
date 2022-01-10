import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { Menu, Segment } from 'semantic-ui-react';


const MenuPage = () => {
    const location = useLocation(); 
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState("Calculator");


    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
        name === "History" ? navigate('/history') : navigate('/calculator');  
    };

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
        </Menu>
    </Segment>)
}

export default MenuPage;
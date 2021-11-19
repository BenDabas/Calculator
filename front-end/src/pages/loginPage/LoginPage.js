import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Header, Icon, Segment, Input } from 'semantic-ui-react';

import './LoginPage.css';

const LoginPage = () => {

    const navigate = useNavigate();
    const defaultUserDetails = {userName: '', email: ""};

    const [userDetails, setUserDetails] = useState(defaultUserDetails);

    const handleUserDetailsChange = ({target}) => {
        setUserDetails({...userDetails, [target?.name]: target?.value});
    }  

    const onClickLoginButton = () => {
        navigate('/calculator',{state: userDetails});
    }


    return (
    <div className="ui raised very padded text container segment">
        <Segment placeholder>
            <Header as='h2'floated="right" size="huge" style={{height:'70px'}}>
                {/* <Icon name='calculator'/> */}
                <Header.Content>Calculator</Header.Content>
            </Header>

            <Segment.Inline floated="left">
            <Input iconPosition='left' placeholder='User Name' name="userName" onChange={handleUserDetailsChange}>
                <Icon name='user' />
                <input/>
            </Input>
            <br/>
            <br/>
            <Input iconPosition='left' placeholder='Email' name="email" onChange={handleUserDetailsChange}>
                <Icon name='at' />
                <input/>
            </Input>
            </Segment.Inline>
            <br />
            <Button onClick={onClickLoginButton} primary><Icon name='sign-in' /> Login</Button>
        </Segment>
    </div>

  )
}

export default LoginPage;
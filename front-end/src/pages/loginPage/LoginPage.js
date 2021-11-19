import React, { useState } from 'react';

import { Button, Header, Icon, Segment, Input } from 'semantic-ui-react';

import './LoginPage.css';

const LoginPage = () => {

    const defaultUserDetails = {userName: '', email: ""};

    const [userDetails, setUserDetails] = useState(defaultUserDetails);

    const handleUserDetailsChange = (target, name) => {

        console.log('target?.nativeEvent?.data', target.target?.value);
        console.log({target});
        console.log(name);
        setUserDetails({...userDetails, [name]: target.target?.value});
    }  


    return (
    <div className="ui raised very padded text container segment">
        <Segment placeholder>
            <Header as='h2'floated="right" size="huge" style={{height:'70px'}}>
                {/* <Icon name='calculator'/> */}
                <Header.Content>Calculator</Header.Content>
            </Header>

            <Segment.Inline floated="left">
            <Input iconPosition='left' placeholder='User Name' onChange={(target) => handleUserDetailsChange(target, "UserName")}>
                <Icon name='user' />
                <input/>
            </Input>
            <br/>
            <br/>
            <Input iconPosition='left' placeholder='Email' onChange={(target) => handleUserDetailsChange(target, "email")}>
                <Icon name='at' />
                <input/>
            </Input>
            </Segment.Inline>
            <br />
            <Button primary><Icon name='sign-in' /> Login</Button>
        </Segment>
    </div>

  )
}

export default LoginPage;
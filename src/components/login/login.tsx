import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import TabContainer from 'react-bootstrap/TabContainer'

export default function ControlledTabs() {
    const [key, setKey] = useState('register');
  
    return (
        <div className="login mt-3 mb-5">
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Login">
                    <LoginForm />
                </Tab>
                <Tab eventKey="register" title="Register">
                    <RegisterForm />
                </Tab>

            </Tabs>
        </div>
    );
  }
import React, { useState } from 'react';
import {onLogin} from './auth.api';

export const LoginForm = () => {
    const [{ email, password }, setCredentials] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState('');

    const loginInput = async(event:React.FormEvent) => {
        event.preventDefault();
        const response = await onLogin({
            email,
            password,
        })
        if(response && response.error){
            setError(response.error);
        }
    }


    return (
        <div className="container loginForm h-100 mt-4">
            <div className="d-flex justify-content-center h-100">
                <div className="user_card">
                    <div className="d-flex justify-content-center form_container">
                        <form onSubmit={loginInput}>
                            <div className="loginForm-socmedia mb-4">
                                <a href='#'><div><img src='./images/Login/google.svg' alt='google icon' />Log in with Google</div></a>
                            </div>
                            <div className="loginForm-socmedia mb-5">
                                <a href='#'><div><img src='./images/Login/facebook.svg' alt='facebook icon' />Log in with Facebook</div></a>
                            </div>
                            <div className="input-group  mb-4">
                                <div className="input-group-append">
                                    <span className="input-group-text"><img src='./images/Login/Login.svg' alt='Login icon' /></span>
                                </div>
                                <input type="Email" name="login" placeholder='Email' value={email} onChange={(event) =>
                                    setCredentials({
                                        email:event.target.value,
                                        password,
                                    })
                                } />
                            </div>
                            <div className="input-group mb-4">
                                <div className="input-group-append">
                                    <span className="input-group-text"><img src='./images/Login/Password.svg' alt="passwordicon"/></span>
                                </div>
                                <input type="password" placeholder='Password' value={password} onChange={(event) =>
                                    setCredentials({
                                        email,
                                        password:event.target.value,
                                    })
                                }/>
                            </div>
                            <div className="form-group mt-4 loginForm-stayLogged">
                                <div className='loginForm-stayLogged-checkbox'>
                                    <label className="checkbox-container">Keep me logged in
                                                    <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="loginForm-forgotPass">
                                    <a href='#'>Forgot your password?</a>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <input type="submit" name="button" className="button" value='Login'/>
                                { error.length > 0 && <p>{error}</p> }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
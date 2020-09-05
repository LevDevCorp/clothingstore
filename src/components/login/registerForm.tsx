import React, {useState} from 'react';
import { onRegister } from './auth.api';


export const RegisterForm = () => {
    const [{fullName, email, password,repeatPassword,phoneNumber,city,address }, setRegisterData] = useState({
        fullName: "",
        email: "",
        password: "",
        repeatPassword:"",
        phoneNumber:"",
        city:"",
        address:"",
    });

const [error, setError] = useState('');

const registerInput = async(event:React.FormEvent) => {
    event.preventDefault();
    if(password === repeatPassword){
        onRegister({
            email,
            password,
            phoneNumber,
            city,
            address,
        })
    } else {
        setError("Passwords doesn't match each other");
    }
}

    return (
        <div className="container loginForm h-100 mt-4">
            <div className="d-flex justify-content-center h-100">
                <div className="user_card">
                    <div className="d-flex justify-content-center form_container">
                        <form  onSubmit={registerInput}>
                            <div className="input-group mb-4">
                                <input type="text" value={fullName} placeholder='Full Name' onChange={(event) =>
                                    setRegisterData({
                                        fullName: event.target.value,
                                        email,
                                        password,
                                        repeatPassword,
                                        phoneNumber,
                                        city,
                                        address,
                                    })
                                }/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="email" value={email} placeholder='Email' onChange={(event) =>
                                    setRegisterData({
                                        fullName,
                                        email: event.target.value,
                                        password,
                                        repeatPassword,
                                        phoneNumber,
                                        city,
                                        address,
                                    })
                                }/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="password" value={password} placeholder='Password' onChange={(event) =>
                                    setRegisterData({
                                        fullName,
                                        email,
                                        password: event.target.value,
                                        repeatPassword,
                                        phoneNumber,
                                        city,
                                        address,
                                    })
                                }/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="password" value={repeatPassword} placeholder='Repeat Password' onChange={(event) =>
                                    setRegisterData({
                                        fullName,
                                        email,
                                        password,
                                        repeatPassword: event.target.value,
                                        phoneNumber,
                                        city,
                                        address,
                                    })
                                }/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text" value={phoneNumber} placeholder='Phone Number' onChange={(event) =>
                                    setRegisterData({
                                        fullName,
                                        email,
                                        password,
                                        repeatPassword,
                                        phoneNumber: event.target.value,
                                        city,
                                        address,
                                    })
                                }/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text" value={city} placeholder='City' onChange={(event) =>
                                    setRegisterData({
                                        fullName,
                                        email,
                                        password,
                                        repeatPassword,
                                        phoneNumber,
                                        city: event.target.value,
                                        address,
                                    })
                                }/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text" value={address} placeholder='Adress' onChange={(event) =>
                                    setRegisterData({
                                        fullName,
                                        email,
                                        password,
                                        repeatPassword,
                                        phoneNumber,
                                        city,
                                        address: event.target.value,
                                    })
                                }/>
                            </div>
                            <div className="d-flex justify-content-center mt-5 login_container">
                                <button type="submit" className="button">Register</button>
                                { error.length > 0 && <p>{error}</p> }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
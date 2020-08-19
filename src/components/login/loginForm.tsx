import React from 'react';

export default class LoginForm extends React.Component {

	render() {
		return (
				<div className="container loginForm h-100 mt-4">
					<div className="d-flex justify-content-center h-100">
						<div className="user_card">
							<div className="d-flex justify-content-center form_container">
								<form>
									<div className="loginForm-socmedia mb-4">
                                        <a href='#'>
                                            <div><img src='./images/Login/google.svg' alt='google icon'/>Log in with Google</div>
                                        </a>
									</div>
									<div className="loginForm-socmedia mb-5">
                                        <a href='#'>
                                            <div><img src='./images/Login/facebook.svg' alt='facebook icon'/>Log in with Facebook</div>
                                        </a>
									</div>
									<div className="input-group  mb-4">
										<div className="input-group-append">
											<span className="input-group-text"><img src='./images/Login/Login.svg'alt='Login icon' /></span>
										</div>
										<input type="Email" name="login" placeholder='Email' />
									</div>
									<div className="input-group mb-4">
										<div className="input-group-append">
											<span className="input-group-text"><img src='./images/Login/Password.svg' /></span>
										</div>
										<input type="password" placeholder='Password' />
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
										<button type="button" name="button" className="loginForm-button">Login</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
		)
	}
}
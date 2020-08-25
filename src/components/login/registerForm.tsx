import React from 'react';


export default class RegisterForm extends React.Component {

	render() {
		return (
				<div className="container loginForm h-100 mt-4">
					<div className="d-flex justify-content-center h-100">
						<div className="user_card">
							<div className="d-flex justify-content-center form_container">
								<form  >
									<div className="input-group mb-4">
										<input type="text" placeholder='Full Name' />
									</div>
									<div className="input-group mb-4">
										<input type="email" placeholder='Email' />
									</div>
									<div className="input-group mb-4">
										<input type="password" placeholder='Password' />
									</div>
									<div className="input-group mb-4">
										<input type="password" placeholder='Repeat Password' />
									</div>
									<div className="input-group mb-4">
										<input type="text" placeholder='Phone Number' />
									</div>
									<div className="input-group mb-4">
										<input type="text" placeholder='City' />
									</div>
									<div className="input-group mb-4">
										<input type="text" placeholder='Adress' />
									</div>
									<div className="d-flex justify-content-center mt-5 login_container">
										<button type="button" name="button" className="button">Register</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
		)
	}
}
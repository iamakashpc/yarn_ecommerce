import React from 'react'
import "./LoginSignup.css"
const LoginSignup = () => {
  return (
		<div className="login-signUp">
			<div className="login-signup-container">
				<h1>Register</h1>
				<div className="login-signup-input">
					<input type="text" placeholder="Your name " />
					<input type="email" placeholder="enter your email" />
					<input type="password" placeholder="enter the password" />
				</div>
				<button>SignUp</button>
				<p className="login-signup">
					Already have a Account ? <span>Login</span>
				</p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
			</div>
		</div>
	);
}

export default LoginSignup
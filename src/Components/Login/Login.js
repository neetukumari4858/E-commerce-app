import React from 'react';
import "./Login.css"
const Login = () => {
  return (
    <div className="outer-product-side-bar">
        <div className="login-container">
            <div className="login-content">
                <h2>Login</h2>
                <label>Email address</label><br></br>
                <input className="user-input" placeholder="annu@neog.com"/><br></br>

                <label>Password</label><br></br>
                <input className="user-input" placeholder="..................."/><br></br><br></br>

                <input type="checkbox"/> Remember me <span>Forgot your Password ?</span><br></br>
                <button className="login-btn">Login</button>
                <h4>Create New Account <i className='fas fa-angle-right'></i></h4>
            </div>
        </div>
    </div>
  )
}
export {Login}
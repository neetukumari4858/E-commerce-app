import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";
const SignUp = () => {
    return (
         <div className="outer-product-side-bar">
            <div className="signup-container">
                <div className="login-content">
                    <h2>Sign up</h2>
                    <label>First Name</label><br/>
                    <input type= "text" className="user-input" placeholder="Enter your Name"/><br/>

                    <label>Last Name</label><br></br>
                    <input type= "text" className="user-input" placeholder="Enter your Last Name"/><br/>

                    <label>Email address</label><br></br>
                    <input type= "text" className="user-input" placeholder="annu@neog.com"/><br/>

                    <label>Password</label><br></br>
                    <input type= "text" className="user-input" placeholder="..................."/><br/>

                    <label>Confirm Password</label><br></br>
                    <input type= "text" className="user-input" placeholder="..................."/><br></br>

                    <input type="checkbox"/>I accept all Terms & Conditions
                    <button className="login-btn">Sign up</button>
                    <h4>Already have an account ? <Link to="/LoginPage">Login Here</Link></h4>
                </div>
            </div>
        </div>
    )
}
export {SignUp}
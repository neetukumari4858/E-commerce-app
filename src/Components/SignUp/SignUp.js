import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const SignUp = () => {
  const [inputType, setinputType] = useState('password')

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    checkPolicy: false,
  })

  return (
    <div className="outer-Login-container">
      <div className="signup-container">
        <div className="login-content">
          <h2 className="signUp-heading">Sign up</h2>
          <label className="signUp-lebel">First Name</label>
          <input
            type="text"
            className="sign-input"
            placeholder="Enter your Name"
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, firstName: event.target.value }))
            }
          />

          <label className="signUp-lebel">Last Name</label>
          <input
            type="text"
            className="sign-input"
            placeholder="Enter your Last Name"
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, lastName: event.target.value }))
            }
            required
          />

          <label className="signUp-lebel">Email address</label>
          <input
            type="text"
            className="sign-input"
            placeholder="annu@neog.com"
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, email: event.target.value }))
            }
            required
          />

          <label className="signUp-lebel">Password</label>
          <input
            type={inputType}
            className="sign-input"
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, password: event.target.value }))
            }
            required
          />
          <div
            className="signup_passwordIcon"
            onClick={() =>
              inputType === 'text'
                ? setinputType('password')
                : setinputType('text')
            }
          >
            {inputType === 'text' ? (
              <p>
                <AiFillEye />
              </p>
            ) : (
              <p>
                <AiFillEyeInvisible />
              </p>
            )}
          </div>

          <label className="signUp-lebel confirm-Password">
            Confirm Password
          </label>
          <input
            type="text"
            className="sign-input"
            onChange={(event) =>
              setNewUser((prev) => ({
                ...prev,
                confirmPassword: event.target.value,
              }))
            }
            required
          />
          <br />
          <div className="termsandConditions-div">
            <input
              type="checkbox"
              id="termsAndCondition"
              checked={newUser.checkPolicy}
              onChange={() =>
                setNewUser({ ...newUser, checkPolicy: !newUser.checkPolicy })
              }
            />
            <label htmlFor="termsAndCondition" className="terms-and-condition">
              I accept all Terms & Conditions
            </label>
          </div>

          <div>
            <button className="sign-btn bg-red">Sign up</button>
          </div>
          <h4 className="alreadyHaveAccount">
            Already have an account?
            <Link to="/LoginPage" className="login-here">
              Login Here
            </Link>
          </h4>
        </div>
      </div>
    </div>
  )
}
export { SignUp }

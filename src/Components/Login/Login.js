import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import './Login.css'
const Login = () => {
  const [inputType, setinputType] = useState('password')
  const [loginUserData, setloginUserData] = useState({
    email: '',
    password: '',
    checkPolicy: false,
  })

  return (
    <div className="outer-Login-container">
      <div className="login-outer-container">
        <form className="login-content-container">
          <div className="login-content-container">
            <h2 className="Login-heading-two">Login</h2>
            <label className="lebel-text">Email address</label>
            <input
              className="user-input"
              type="email"
              placeholder="  demo@gmail.com "
              value={loginUserData.email}
              onChange={(event) =>
                setloginUserData((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              required
            />
            <label className="lebel-text">Password</label>
            <input
              type={inputType}
              className="user-input password"
              placeholder="  Enter Password..."
              value={loginUserData.password}
              onChange={(event) =>
                setloginUserData((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              required
            />
            <div
              className="passwordIcon"
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
            <div className="footerDiv">
              <div className="login-grid">
                <button type="button" className="videologin-btn bg-red">
                  Login
                </button>
                <button
                  type="button"
                  className="videologin-btn  bg-white"
                  onClick={() => {
                    setloginUserData({
                      ...loginUserData,
                      email: 'demo@gmail.com',
                      password: 'demo123',
                      checkPolicy: true,
                    })
                  }}
                >
                  Guest Login
                </button>
              </div>

              <h4 className="create-account">
                <Link to="/SignUpPage" className="createAccount">
                  Create New Account
                </Link>
              </h4>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export { Login }

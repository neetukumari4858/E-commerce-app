import { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../Context/AuthContext'
import { toast } from 'react-toastify'

import './Login.css'
const Login = () => {
  const [inputType, setinputType] = useState('password')
  const navigate = useNavigate()
  const { userDispatch } = useAuth()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user
  const loginBtnHandler = async (email, password) => {
    if (!user.email || !user.password) {
      toast.warning('Please fill all the feild')
      return;
    }
    const response = await axios.post('/api/auth/login', {
      email,
      password,
    })
    console.log(response, 'res')
    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify(response.data.foundUser))
      const token = response.data.encodedToken
      localStorage.setItem('token', token)
      userDispatch({
        type: 'LOGIN',
        payload: {
          user: response.data.foundUser,
          token: response.data.encodedToken,
        },
      })
      navigate('/')

      toast.success('Login Successfull !')
    } else {
      toast.error('Login Failed!')
    }
  }

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
              value={email}
              onChange={(event) =>
                setUser((prev) => ({
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
              value={password}
              onChange={(event) =>
                setUser((prev) => ({
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
                <button
                  type="button"
                  className="videologin-btn bg-red"
                  onClick={() => loginBtnHandler()}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="videologin-btn  bg-white"
                  onClick={() => {
                    setUser({
                      ...user,
                      email: 'demo@gmail.com',
                      password: 'demo123',
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

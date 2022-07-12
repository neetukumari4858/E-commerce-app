import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useAuth } from '../../Context/AuthContext'

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
  
  const {userDispatch}=useAuth()
  const navigate = useNavigate()
  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    checkPolicy,
  } = newUser
  const signupHandler = async () => {
    if (
      firstName !== '' &&
      lastName !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      email !== ''
    ) {
      if (checkPolicy) {
        if (password === confirmPassword) {
          try{
            const response = await axios.post('/api/auth/signup', {
              email,
              password,
              firstName,
              confirmPassword,
              lastName
            })
            navigate('/')
            toast.success(
              'Congratulations, your account has been successfully created!',
            )
            if (response.status === 201) {
              localStorage.setItem(
                'user',
                JSON.stringify(response.data.createdUser),
              )
              localStorage.setItem('token', response.data.encodedToken)
              userDispatch({
                type: 'SIGNUP',
                payload: {
                  user: response.data.createdUser,
                  token: response.data.encodedToken,
                },
              })
            } else {
              toast.error('Something went wrong')
            }

          }catch(error){
            console.log(error)

          }
        } else {
          toast.error('The passwords entered do not match')
        }
      } else {
        toast.warning(
          'tick the check box and agree to the terms and conditions',
        )
      }
    } else {
      toast.warning('Please fill the fields')
    }
  }

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
            value={firstName}
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, firstName: event.target.value }))
            }
          />

          <label className="signUp-lebel">Last Name</label>
          <input
            type="text"
            className="sign-input"
            placeholder="Enter your Last Name"
            value={lastName}
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
            value={email}
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, email: event.target.value }))
            }
            required
          />

          <label className="signUp-lebel">Password</label>
          <input
            type={inputType}
            value={password}
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
            value={confirmPassword}
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
              checked={checkPolicy}
              onChange={() =>
                setNewUser({ ...newUser, checkPolicy: !checkPolicy })
              }
            />
            <label htmlFor="termsAndCondition" className="terms-and-condition">
              I accept all Terms & Conditions
            </label>
          </div>

          <div>
            <button className="sign-btn bg-red" onClick={signupHandler}>
              Sign up
            </button>
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

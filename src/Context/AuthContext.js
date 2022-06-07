import { useContext, createContext, useReducer } from 'react'
import { authReducer } from './AuthReducer'
const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [userDetail, userDispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || ' ',
  })

  return (
    <AuthContext.Provider value={{ userDetail, userDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
const useAuth = () => useContext(AuthContext)
export { useAuth, AuthProvider }

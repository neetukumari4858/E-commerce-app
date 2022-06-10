import { Navigate, useLocation } from 'react-router-dom'
const RequireAuth = ({ children }) => {
  const location = useLocation()
  const token = localStorage.getItem('token')

  return token ? (
    children
  ) : (
    <Navigate to="/LoginPage" state={{ from: location }} replace />
  )
}

export { RequireAuth }

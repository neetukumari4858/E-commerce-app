import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useProducts } from '../../Context/productContext'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const { productState } = useProducts()
  const { cart, wishlist } = productState
  const navigate = useNavigate()
  const { userDispatch } = useAuth()
  const token = localStorage.getItem('token')

  const logoutHandler = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    userDispatch({ type: 'LOGOUT' })
    toast.success('LoggedOut successfully')
    navigate('/')
  }

  return (
    <nav className="sum">
      <div className="nav-section">
        <label className="logo">Royal</label>
        <ul className="nav-home-shop-link">
          <li>
            <Link className="nav-link icon-content" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link icon-content" to="/ProductPage">
              Shop
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-section">
        <ul className="nav-icons">
          {token ? (
            <button className="login_btn nav_link" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <button className="login_btn">
              <Link className="nav_link" to="/LoginPage">
                Login
              </Link>
            </button>
          )}

          <i className=" fa-solid fa-cart-shopping login-icon">
            <li>
              <p className="cart_badge">{cart.length}</p>
              <Link className="nav-link iconText" to="/CartPage">
                Cart
              </Link>
            </li>
          </i>
          <i className="fa-solid fa-heart login-icon">
            <li>
              <p className="cart_badge">{wishlist.length}</p>
              <Link className="nav-link iconText" to="/WishlistPage">
                Whishlist
              </Link>
            </li>
          </i>
        </ul>
      </div>
    </nav>
  )
}
export { Navbar }

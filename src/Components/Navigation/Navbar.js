import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css";
import { useCart } from '../../Context/CartContext';

const Navbar = () => {
    const {cartState}= useCart();
    const {cart,wishlist}=cartState;
    return (  
    <nav className='sum'>
        <div className="nav-section">
            <label className="logo">Royal</label> 
            <ul className="nav-home-shop-link">
                <li><Link className='nav-link icon-content' to ="/">  Home</Link></li>      
                <li><Link className='nav-link icon-content' to ="/ProductPage">  Shop</Link></li>
            </ul>
        </div>
        <div className="nav-section">
            <div className="outer-search-bar-div">

                <input type="text" className="search-bar" placeholder="   Search.."/>
            </div>
            <ul className="nav-icons">
                <i className='fas fa-user-alt login-icon'>
                    <li><Link className="nav-link iconText " to ="/LoginPage">Login</Link></li>
                </i>
                <i className=" fa-solid fa-cart-shopping login-icon">
                    <li>
                        <p className='cart_badge'>{cart.length}</p>
                        <Link className="nav-link iconText" to ="/CartPage"> Cart</Link>
                    </li>
                </i>
                <i className="fa-solid fa-heart login-icon">
                    <li>
                         <p className='cart_badge'>{wishlist.length}</p>
                        <Link className="nav-link iconText" to ="/WishlistPage"> Whishlist</Link>
                    </li>
                </i>
            </ul>
        </div>
    </nav> 
    );
}
export {Navbar};
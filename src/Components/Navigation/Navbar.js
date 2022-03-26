import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
    return (  
    <nav className='sum'>
        <div className="nav-section">
            <label className="logo">Royal</label> 
            <ul className="nav-home-shop-link">
                <li><Link className='nav-link icon-content' to ="/">  Home</Link></li>      
                <li><Link className='nav-link icon-content' to ="/">  Shop</Link></li>
                <li><Link className='nav-link icon-content' to ="/">  Men</Link></li>
                <li><Link className='nav-link icon-content' to ="/">  Woman</Link></li>
            </ul>
        </div>
        <div className="nav-section">
            <div className="outer-search-bar-div">

                <input type="text" className="search-bar" placeholder="   Search.."></input>
            </div>
            <ul className="nav-icons">
                <i className='fas fa-user-alt login-icon'><li>
                    <Link className="nav-link icon-content" to ="/">Login</Link></li>
                </i>
                <i className=" fa-solid fa-cart-shopping cart-wishlist-icon"><li><Link className="nav-link icon-content" to ="/"> Cart</Link></li></i>
                <i className="fa-solid fa-heart cart-wishlist-icon"><li><Link className="nav-link icon-content" to ="/"> Whishlist</Link></li></i>
            </ul>
        </div>
    </nav> 
    );
}
export {Navbar};

// <!-- <nav className='sum'>
//     <div className="nav-section">
//         <label className="logo">Royal</label> 
//         <ul className="nav-home-shop-link">
//             <li><Link className='nav-link icon-content' to ="/">  Home</Link></li>      
//             <li><Link className='nav-link icon-content' to ="/ProductPage">  Shop</Link></li>
//             <li><Link className='nav-link icon-content' to ="/ProductPage">  Men</Link></li>
//             <li><Link className='nav-link icon-content' to ="/Product">  Woman</Link></li>
//         </ul>
//     </div>
//     <div className="nav-section">
//         <div className="outer-search-bar-div">

//             <input type="text" className="search-bar" placeholder="   Search.."></input>
//         </div>
//         <ul className="nav-icons">
//             <i className='fas fa-user-alt login-icon'><li>
//                 <Link className="nav-link icon-content" to ="/LoginPage">Login</Link></li>
//             </i>
//             <i className="fa fa-heart cart-wishlist-icon"><li><Link className="nav-link icon-content" to ="/CartPage"> Cart</Link></li></i>
//             <i className="fa fa-shopping-cart cart-wishlist-icon"><li><Link className="nav-link icon-content" to ="/WishlistPage"> Whishlist</Link></li></i>
//         </ul>
//     </div>
// </nav>  -->
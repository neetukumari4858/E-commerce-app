import React from 'react';
import "./Cart.css";

const Cart = () => {
  return (
        <>
        <div className="cart-product-container">
            <h1 className="cart-heading">My<span>Cart</span> </h1>
            <div className="cart-section">
                <div className="cart-container">
                    <div className="card-image">
                        <img className="img-size" src="/image/new16.jpeg"/>
                    </div>
                    <div className="cart-content">
                        <div className="cart-text">
                            <h3>Reebok</h3>
                            <h4 className="cart-heading-four">₹ 350/- <s>₹ 500</s></h4>
                            <h5 >Quantity: <button className='increment-decrement'>-</button>  <button className="quantity-btn">1</button> <button className='increment-decrement'>+</button></h5>
                            <span className="cart-rating-div">
                                <p>4 <i className="fa-solid fa-star"></i></p>
                            </span>
                        </div>
                        <div className="cart-btn-div">
                            <button className="cart-btn">REMOVE</button>
                            <button className="cart-btn">BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <div className="inner-detail-div">
                        <h1>PRICE DETAILS</h1> <hr/>
                        <h3>items </h3>
                        <h3>Total MRP</h3>
                        <h3>Discount</h3>
                        <h3>Delivery charges</h3>
                        <h3>Total</h3>
                        <button className="cart-btn">Place order</button>
                        <div className="price">
                            <h3>1</h3>
                            <h3>₹500</h3>
                            <h3>₹150</h3>
                            <h3>₹100</h3>
                            <h3>₹450</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export {Cart}
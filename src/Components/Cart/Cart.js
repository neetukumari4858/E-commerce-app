import React from 'react';
import "./Cart.css";

const Cart = () => {
  return (
        <>
        <div className="outer-product-side-bar">
            <div className="product-container">
                <h1 className="cart-heading">My<span>Cart</span> </h1>
                <div className="section-first">
                    <div className="card-container">
                        <div className="card-image">
                            <img className="img-size" src="/image/new16.jpeg"/>
                        </div>
                        <div className="card-content">
                            <div className="card-text">
                                <h3>Reebok</h3>
                                <h4 className="heading-four">₹ 350/- <s>₹ 500</s></h4>
                                <h5>Quantity: <button className='increment-decrement'>-</button>  <button className="quantity-btn">1</button> <button className='increment-decrement'>+</button></h5>
                            </div>
                            <div className="btn-div">
                                <button className="card-btn">REMOVE</button>
                                <button className="card-btn">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <div className="inner-detail-div">
                        <h1>PRICE DETAILS</h1> <hr></hr>
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
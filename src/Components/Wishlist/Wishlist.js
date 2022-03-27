import React from 'react';
import "./Wishlist.css";
const Wishlist = () => {
  return (
    <div className="product-container">
        <h2>My <span>Wishlist</span> </h2>

        <div className="section-first">
            <div className="card-container">
                <div className="card-image">
                    <img  className="img-size" src="/image/new3.jpeg"/>
                    <i className="fa-solid fa-heart wishlist-icon"></i>
                </div>
                <div className="card-content">
                    <div className="card-text">
                        <h3>Reebok</h3>
                        <h4 className="heading-four">₹ 1150/- <s>₹ 1200</s></h4>
                    </div>
                    <span className="rating-div">
                        <p>4 <i className="fa-solid fa-star"></i></p>
                    </span>

                    <div className="btn-div">
                        <button className="card-btn">REMOVE</button>
                        <button className="card-btn">BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card-image">
                    <img  className="img-size" src="/image/new18.jpg"/>
                    <i className="fa-solid fa-heart wishlist-icon"></i>
                </div>
                <div className="card-content">
                    <div className="card-text">
                        <h3>Reebok</h3>
                        <h4 className="heading-four">₹ 1150/- <s>₹ 1200</s></h4>
                    </div>
                    <span className="rating-div">
                        <p>4 <i className="fa-solid fa-star"></i></p>
                    </span>

                    <div className="btn-div">
                        <button className="card-btn">REMOVE</button>
                        <button className="card-btn">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export {Wishlist}
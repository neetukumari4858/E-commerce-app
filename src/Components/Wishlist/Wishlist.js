import React from 'react';
import "./Wishlist.css";
import { useCart } from '../../Context/CartContext';
const Wishlist = () => {
    const { cartState, cartDispatch } = useCart();
    const { wishlist } = cartState;
    return (
        <>
            <h2>My <span>Wishlist</span>({wishlist.length}) </h2>
            {wishlist.length >= 1 ?
                <>
                    <div className="whishlist-section-first">
                        {wishlist.map(({ image, title, Rating,Quentity, price, Discounted_value, _id}) => {
                            return (
                                <div className="card-container" key={_id}>
                                    <div className="card-image">
                                        <img className="img-size" src={image} />
                                        <button className="wishlist-icon" onClick={() => cartDispatch({
                                            type: "REMOVE_FROM_WISHLIST",
                                            payload: { _id: _id }
                                        })}>
                                            <i className='fa-solid fa-heart'></i>
                                        </button>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-text">
                                            <h3>{title}</h3>
                                            <h4 className="whishlist-heading-four">₹ {Discounted_value}/- <s>₹ {price}</s></h4>
                                        </div>
                                        <span className="rating-div">
                                            <p>{Rating}<i className="fa-solid fa-star"></i></p>
                                        </span>
                                        <div className="wishlist-btn-div">
                                            <button className="wishlist-card-btn" onClick={() => cartDispatch({
                                                type: "MOVE_TO_CART", payload: {
                                                    _id: _id,
                                                    image: image,
                                                    title: title,
                                                    Rating: Rating,
                                                    price: price,
                                                    Discounted_value,
                                                    Quentity:Quentity
                                                }
                                            })}>MOVE TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
                : <>
                    < div className='emptyWishlistImage'>
                        <img src='./image/emptyCartImg.webp' alt='emptyCartImg' />
                    </div>
                </>
            }
        </>
    )
}
export { Wishlist }
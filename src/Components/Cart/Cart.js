import React from 'react';
import "./Cart.css";
import { useCart } from '../../Context/CartContext';

const Cart = () => {
    const {cartState,cartDispatch}= useCart();
    const {cart} = cartState
    const totalPrice = cart.reduce((acc, item) => acc =  (acc +Number(item.Discounted_value))*item.Quentity,0)
    const deliveryCharges = totalPrice*10/100
    const totalAmount=totalPrice+deliveryCharges
    return (
        <>
        <div className="cart-product-container">
            <h1 className="cart-heading">My<span>Cart</span>({cart.length})</h1>
            {cart.length>=1 ?
                <>
                    <div className="cart-section">
                {cart.map(({_id,image,title,Rating,price,Discounted_value,Quentity})=>{  
                return (
                <div key={_id}>
                    <div className="cart-container">
                        <div className="card-image">
                            <img className="img-size" src={image}/>
                        </div>
                        <div className="cart-content">
                            <div className="cart-text"> 
                                
                                <h3>{title}</h3>
                                <h4 className="cart-heading-four">₹ {Discounted_value} <s>₹ {price}</s></h4>
                                <h5>Quantity: 
                                    <button className='increment-decrement' onClick={()=>cartDispatch({type: 'DECREASE_QUANTITY', payload: { _id: _id, Quentity: Quentity }})}>-</button>
                                    <button className="quantity-btn">{Quentity}</button> 
                                    <button className='increment-decrement' onClick={()=>cartDispatch({type: 'INCREASE_QUANTITY', payload: { _id: _id, Quentity: Quentity }})}>+</button>
                                </h5>
                                <span className="cart-rating-div">
                                    <p>{Rating} <i className="fa-solid fa-star"></i></p>
                                </span>
                            </div>
                            <div className="cart-btn-div">
                                <button   onClick={() =>  cartDispatch({ type: "REMOVE_From_Cart", payload: { _id: _id } })} className="cart-btn">REMOVE</button>
                                <button className="cart-btn" onClick={()=>cartDispatch({type:"MOVE_TO_WISHLIST",payload:{
                                    _id:_id,
                                    image:image,
                                    title:title,
                                    Rating:Rating,
                                    price:price,
                                    Discounted_value:Discounted_value,
                                    Quentity:Quentity
                                }})}>WISHLIST</button>
                            </div>
                        </div>
                    </div>
                </div>
                )})}
            </div> 
            <div className="detail">
                <div className="inner-detail-div">
                    <h1>PRICE DETAILS</h1> <hr></hr>
                    <h3>items </h3>
                    <h3>Price</h3>
                    <h3>Delivery charges</h3>
                    <h3>Total</h3>
                    <button className="cart-btn">Place order</button>
                    <div className="price">
                        <h3>{cart.length}</h3>
                        <h3>{totalPrice}</h3>
                        <h3>{deliveryCharges}</h3>
                        <h3>{totalAmount}</h3> 
                    </div>
                </div>
            </div>
            </>:
            < div className='emptyCartImage'>
                <img src='./image/emptyCartImg.webp' alt='emptyCartImg'/>
            </div>
            }
        </div>
     </>
    )
}
export {Cart}
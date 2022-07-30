import React from 'react'
import './Cart.css'
import { useProducts } from '../../Context/productContext'
import { removeFromCart } from '../../service/cartService/removeFromCart'
import { useAuth } from '../../Context/AuthContext'

const Cart = () => {
  const { productState, productDispatch } = useProducts()
  const { userDetail } = useAuth()
  const { token } = userDetail
  const users = localStorage.getItem('user')
  const user = JSON.parse(users)

  const { cart } = productState
  const totalPrice = cart.reduce(
    (acc, item) =>
      (acc = (acc + Number(item.Discounted_value)) * item.Quentity),
    0,
  )
  const deliveryCharges = (totalPrice * 10) / 100
  const totalAmount = totalPrice + deliveryCharges

  const removeFromCartHandler = (_id) => {
    removeFromCart(_id, token, productDispatch)
  }

  const paymentintegration = () => {
    var options = {
      key: 'rzp_test_Nz7sNsDcGD5Zle',
      amount: totalAmount * 100,
      currency: 'INR',
      name: 'Royal',
      description: 'Thank you',
      image: 'https://example.com/your_logo',
      handler: function (response) {
        cart.map((item) => removeFromCart(item._id, token, productDispatch))
      },
      prefill: {
        name: user.firstName,
        email: user.email,
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    }
    var rzp1 = new Razorpay(options)
    rzp1.open()
    rzp1.on('payment.failed', function (response) {})
  }
  return (
    <>
      <div className="cart-product-container">
        <h1 className="cart-heading">
          My<span>Cart</span>({cart.length})
        </h1>
        {cart.length >= 1 ? (
          <>
            <div className="cart-section">
              {cart.map(
                ({
                  _id,
                  image,
                  title,
                  Rating,
                  price,
                  Discounted_value,
                  Quentity,
                }) => {
                  return (
                    <div key={_id}>
                      <div className="cart-container">
                        <div className="card-image">
                          <img className="img-size" src={image} />
                        </div>
                        <div className="cart-content">
                          <div className="cart-text">
                            <h3>{title}</h3>
                            <h4 className="cart-heading-four">
                              ₹ {Discounted_value} <s>₹ {price}</s>
                            </h4>
                            <h5>
                              Quantity:
                              <button
                                className="increment-decrement"
                                onClick={() =>
                                  productDispatch({
                                    type: 'DECREASE_QUANTITY',
                                    payload: { _id: _id, Quentity: Quentity },
                                  })
                                }
                              >
                                -
                              </button>
                              <button className="quantity-btn">
                                {Quentity}
                              </button>
                              <button
                                className="increment-decrement"
                                onClick={() =>
                                  productDispatch({
                                    type: 'INCREASE_QUANTITY',
                                    payload: { _id: _id, Quentity: Quentity },
                                  })
                                }
                              >
                                +
                              </button>
                            </h5>
                            <span className="cart-rating-div">
                              <p>
                                {Rating} <i className="fa-solid fa-star"></i>
                              </p>
                            </span>
                          </div>
                          <div className="cart-btn-div">
                            <button
                              onClick={() => removeFromCartHandler(_id)}
                              className="cart-btn"
                            >
                              REMOVE
                            </button>
                            <button
                              className="cart-btn"
                              onClick={() =>
                                productDispatch({
                                  type: 'MOVE_TO_WISHLIST',
                                  payload: {
                                    _id: _id,
                                    image: image,
                                    title: title,
                                    Rating: Rating,
                                    price: price,
                                    Discounted_value: Discounted_value,
                                    Quentity: Quentity,
                                  },
                                })
                              }
                            >
                              WISHLIST
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
              )}
            </div>
            <div className="detail">
              <div className="inner-detail-div">
                <h1>PRICE DETAILS</h1> <hr></hr>
                <h3>items </h3>
                <h3>Price</h3>
                <h3>Delivery charges</h3>
                <h3>Total</h3>
                <button className="cart-btn" onClick={paymentintegration}>Place order</button>
                <div className="price">
                  <h3>{cart.length}</h3>
                  <h3>{totalPrice}</h3>
                  <h3>{deliveryCharges}</h3>
                  <h3>{totalAmount}</h3>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="emptyCartImage">
            <img
              className="empty-cart-img"
              src="./image/cartImg.jpg"
              alt="emptyCartImg"
            />
          </div>
        )}
      </div>
    </>
  )
}
export { Cart }

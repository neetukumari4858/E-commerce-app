import { useState } from 'react';
import './Cart.css'
import { useProducts } from '../../Context/productContext'
import { removeFromCart } from '../../service/cartService/removeFromCart'
import { useAuth } from '../../Context/AuthContext'
import { AddressSelect } from '../AddressSelect/AddressSelector'
import { CartBill } from './cartBill'
import { Cheackoutbill } from './Checkoutbill'

const Cart = () => {
  const { productState, productDispatch } = useProducts()
  const { userDetail } = useAuth()
  const { token } = userDetail
  // const users = localStorage.getItem('user')
  // const user = JSON.parse(users)

  const { cart, addresses } = productState
  const [checkout, setCheckout] = useState(false)
  const [showAddressModal, setAddressModal] = useState(false)

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

  return (
    <>
      <div className="cart-product-container">
        {!checkout ? (
          cart.length >= 1 ? (
            <>
              <h1 className="cart-heading">
                My<span>Cart</span>({cart.length})
              </h1>
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
              <CartBill
                cart={cart}
                totalPrice={totalPrice}
                deliveryCharges={deliveryCharges}
                totalAmount={totalAmount}
                setCheckout={setCheckout}
                setAddressModal={setAddressModal}
              />
            </>
          ) : (
            <div className="emptyCartImage">
              <img
                className="empty-cart-img"
                src="./image/cartImg.jpg"
                alt="emptyCartImg"
              />
            </div>
          )
        ) : (
          <main>
            <h1>checkout</h1>
            <section>
              <AddressSelect addresses={addresses} />
              <Cheackoutbill
                cart={cart}
                totalPrice={totalPrice}
                deliveryCharges={deliveryCharges}
                totalAmount={totalAmount}
                setCheckout={setCheckout}
                setAddressModal={setAddressModal}
              />
            </section>
          </main>
        )}
      </div>
    </>
  )
}
export { Cart }

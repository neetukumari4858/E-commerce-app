import React from 'react'
import './Wishlist.css'
import { useProducts } from '../../Context/productContext'
import { removeFromWishlist } from '../../service/wishlistService/removeFromWishlist'
import { useAuth } from '../../Context/AuthContext'

const Wishlist = () => {
  const { productState, productDispatch } = useProducts()
  const { wishlist } = productState
  const { userDetail } = useAuth()
  const { token } = userDetail

  const removeWishlistHandler = (_id) => {
      console.log(token,productDispatch);
    removeFromWishlist(_id, token, productDispatch)
  }
  return (
    <>
      <h2>
        My <span>Wishlist</span>({wishlist.length}){' '}
      </h2>
      {wishlist.length >= 1 ? (
        <>
          <div className="whishlist-section-first">
            {wishlist.map(
              ({
                image,
                title,
                Rating,
                Quentity,
                price,
                Discounted_value,
                _id,
              }) => {
                return (
                  <div className="card-container" key={_id}>
                    <div className="card-image">
                      <img className="img-size" src={image} />
                      <button
                        className="wishlist-icon"
                        onChange={() => removeWishlistHandler(_id)}
                      >
                        <i className="fa-solid fa-heart"  onClick={() => removeWishlistHandler(_id)}></i>
                      </button>
                    </div>
                    <div className="card-content">
                      <div className="card-text">
                        <h3>{title}</h3>
                        <h4 className="whishlist-heading-four">
                          ₹ {Discounted_value}/- <s>₹ {price}</s>
                        </h4>
                      </div>
                      <span className="rating-div">
                        <p>
                          {Rating}
                          <i className="fa-solid fa-star"></i>
                        </p>
                      </span>
                      <div className="wishlist-btn-div">
                        <button
                          className="wishlist-card-btn"
                          onClick={() =>
                            productDispatch({
                              type: 'MOVE_TO_CART',
                              payload: {
                                _id: _id,
                                image: image,
                                title: title,
                                Rating: Rating,
                                price: price,
                                Discounted_value,
                                Quentity: Quentity,
                              },
                            })
                          }
                        >
                          MOVE TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                )
              },
            )}
          </div>
        </>
      ) : (
        <>
          <div className="emptyWishlistImage">
            <img src="./image/emptyCartImg.webp" alt="emptyCartImg" />
          </div>
        </>
      )}
    </>
  )
}
export { Wishlist }

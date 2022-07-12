import './ProductList.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  HighFun,
  CategoryFilterFunc,
  RatingFunc,
  SliderFunc,
} from '../../Utilities.js/index'
import { ProductFilter } from './../../Components/Filter/ProductFilter'
import { useProduct } from '../../Context/FilterContext'
import { Link } from 'react-router-dom'
import { useProducts } from '../../Context/productContext'
import { addToCart } from './../../service/cartService/addToCart'
import { addToWishlist } from './../../service/wishlistService/addToWishlist'
import { toast } from 'react-toastify'

const ProductList = () => {
  const { state } = useProduct()
  const { sortBy, category, rating, sliderPrice } = state
  const { productState, productDispatch } = useProducts()
  const { cart, wishlist } = productState
  const {
    userDetail: { token },
  } = useAuth()
  const navigate = useNavigate()

  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(' ')
  useEffect(() => {
    async function getData() {
      setLoading('Loading....')
      const productResponse = await axios.get('/api/products')
      setLoading('')
      setProductsData(productResponse.data.products)
    }
    getData()
  }, [])
  const sortedData = HighFun(productsData, sortBy)
  const filterData = CategoryFilterFunc(sortedData, category)
  const ratingData = RatingFunc(filterData, rating)
  const sliderData = SliderFunc(ratingData, sliderPrice)

  const addToCartHandler = (product) => {
    if (token) {
      addToCart(product, token, productDispatch)
      toast.success('successfully added to the cart')
    } else {
      navigate('/LoginPage')
      toast.error('Login First Your are not Loggedin ')
    }
  }

  const addToWishlistHandler = (product) => {
    const checkProduct = wishlist.some((item) => item._id === product._id)
    if (token) {
      if (!checkProduct) {
        addToWishlist(product, token, productDispatch)
        toast.success('successfully added to the Wishlist')
      }
    } else {
      navigate('/LoginPage')
      toast.error('Login First Your are not Loggedin ')
    }
  }

  return (
    <div className="inner_body">
      <ProductFilter />
      <div className="product-container">
        <div className="product_title">
          <h1>All Product ({sliderData.length})</h1>
          <h3 className="loading">{loading}</h3>
        </div>
        <div className="section-first">
          {sliderData.map(
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
                  <div className="card-container">
                    <div className="card-image">
                      <button
                        className=" wishlist-icon"
                        onClick={() =>
                          addToWishlistHandler({
                            _id,
                            image,
                            title,
                            Rating,
                            price,
                            Discounted_value,
                            Quentity,
                          })
                        }
                      >
                        {wishlist.find(
                          (wishlistItems) => wishlistItems._id === _id,
                        ) ? (
                          <i className="fa-solid fa-heart"></i>
                        ) : (
                          <i className="far fa-heart"></i>
                        )}
                      </button>
                      <img className="img-size" src={image} />
                    </div>
                    <div className="card-content">
                      <div className="card-text">
                        <h3>{title}</h3>
                        <h4 className="heading-four">
                          {' '}
                          ₹{Discounted_value}
                          &nbsp;&nbsp;&nbsp;<s>{price}</s>
                        </h4>

                        <span className="rating-div">
                          <p>
                            {Rating} <i className="fa-solid fa-star"></i>
                          </p>
                        </span>
                      </div>
                      <br />
                      <br />
                      <div className="btn-div">
                        {cart.find((item) => item._id === _id) ? (
                          <Link to="/CartPage">
                            <button className="card-btn">Go to Cart </button>
                          </Link>
                        ) : (
                          <button
                            className="card-btn"
                            onClick={() =>
                              addToCartHandler({
                                _id,
                                image,
                                title,
                                Rating,
                                price,
                                Discounted_value,
                                Quentity,
                              })
                            }
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}
export { ProductList }

import "./ProductList.css"; 
import axios from "axios";
import { useState,useEffect } from "react";
import {HighFun ,CategoryFilterFunc,RatingFunc,SliderFunc} from '../../Utilities.js/index'
import { useProduct } from "../../Context/FilterContext";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";


const ProductList=()=>{
    const {state}=useProduct();
    const {sortBy,category,rating,sliderPrice}=state;
    const {cartState,cartDispatch}=useCart();
    const {cart, wishlist}=cartState;

    const [productsData, setProductsData] = useState([]);
    const [loading,setLoading]=useState(" ")
    useEffect(()=>{ 
        async function getData(){
            setLoading("Loading....")
            const productResponse=await axios.get('/api/products');
            setLoading("")
            setProductsData(productResponse.data.products);
        }
        getData();
    },[]);
    const sortedData = HighFun(productsData, sortBy);
    const filterData = CategoryFilterFunc(sortedData, category);
    const ratingData = RatingFunc(filterData,rating);
    const sliderData = SliderFunc(ratingData,sliderPrice);
    
    return(
        <div className="product-container">
            <h1>All Product ({sliderData.length})</h1>
            <h3 className="loading">{loading}</h3>
            <div className="section-first">       
                { sliderData .map(({_id,image,title,Rating,price,Discounted_value,Quentity})=>{
                return  <div key={_id}>
                    <div className="card-container">
                        <div className="card-image">
                            <button className=" wishlist-icon" onClick={()=>cartDispatch({type:'ADD_TO_WISHLIST',payload:{
                                _id:_id,
                                image:image,
                                title:title,
                                Rating:Rating,
                                price:price,
                                Discounted_value:Discounted_value,
                                Quentity:Quentity

                            }})}>
                            { wishlist.find((wishlistItems) => wishlistItems._id === _id) ? (
                              <i className="fa-solid fa-heart"></i>
                            ) : (
                              <i className="far fa-heart"></i>
                            )}
                            </button>
                            <img className="img-size" src={image}/>
                        </div>
                        <div className="card-content">
                            <div className="card-text">
                                <h3 >{title}</h3>
                                <h4 className="heading-four"> ₹{Discounted_value }
                                &nbsp;&nbsp;&nbsp;<s>{price}</s></h4>

                                <span className="rating-div">
                                    <p>{Rating} <i className="fa-solid fa-star"></i></p>
                                </span>
                            </div><br/><br/>
                            <div className="btn-div">
                                {cart.find((item)=>item._id===_id)?(
                                    <Link to="/CartPage">
                                        <button className="card-btn">GO TO Cart </button>
                                    </Link>
                                ):(
                                    <button className="card-btn" onClick={() =>  cartDispatch({ type: "ADD_TO_CART", payload:{
                                        _id:_id,
                                        image:image,
                                        title:title,
                                        Rating:Rating,
                                        price:price,
                                        Discounted_value:Discounted_value,
                                        Quentity:Quentity
                                    }
                                     })}>Add to Cart</button>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
                })} 
            </div>
        </div> 
    )
};
export {ProductList};





import "./ProductList.css";
import axios from "axios";
import { useState,useEffect } from "react";
import {HighFun ,CategoryFilterFunc,RatingFunc,SliderFunc} from '../../Utilities.js/index'
import { useProduct } from "../../Context/Context";

const ProductList=()=>{
    const {state}=useProduct();
    const {sortBy,category,rating,sliderPrice}=state;

    const [productsData, setProductsData] = useState([]);
    useEffect(()=>{
        async function getData(){
            const productResponse=await axios.get('/api/products');
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
            <h1>All Product</h1>
            <div className="section-first">       
                { sliderData .map(({_id,image,title,Rating,price,Discounted_value,AddtoCart_btn},index_no)=>{
                return  <div key={index_no}>
                    <div className="card-container">
                        <div className="card-image">
                        <i className="fa-solid fa-heart wishlist-icon"></i>
                            <img className="img-size" src={image}/>
                        </div>
                        <div className="card-content">
                            <div className="card-text">
                                <h3 >{title}</h3>
                                <h4 className="heading-four">₹{Discounted_value }
                                &nbsp;&nbsp;&nbsp;<s>{price}</s></h4>

                                <span className="rating-div">
                                    <p>{Rating} <i className="fa-solid fa-star"></i></p>
                                </span>
                            </div><br/><br/>
                            <div className="btn-div">
                                <button className="card-btn">{AddtoCart_btn}</button>
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






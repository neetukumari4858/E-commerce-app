import "./ProductList.css";
import { products } from "../../backend/db/products";
const ProductList=()=>{
    return(
        <div className="product-container">
            <h1>All Product</h1>
            <div className="section-first">       
                { products.map((value,index_no)=>{
                    const {_id,image,title,price,Discounted_value,AddtoCart_btn}=value;
                    return  <div key={index_no}>
                        <div className="card-container">
                            <div className="card-image">
                            <i className="fa-solid fa-heart wishlist-icon"></i>
                                <img className="img-size" src={image}/>
                            </div>
                            <div className="card-content">
                                <div className="card-text">
                                    <h3 >{title}</h3>
                                    <h4 className="heading-four">{Discounted_value }
                                    &nbsp;&nbsp;&nbsp;<s>{price}</s></h4>

                                    <span className="rating-div">
                                        <p>4 <i className="fa-solid fa-star"></i></p>
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
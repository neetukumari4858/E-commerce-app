import "./HomePageCard.css";
const Card=({image,subtitle})=>{
    return(
            <div class="outer-img-div">
                <img className="image-size" src={image} alt="error"/>
                <p className="title">{subtitle}</p>
            </div>   
    );
}
export {Card};
import "./HomePageCard.css";
const Card=({image,subtitle})=>{
    return(
            <div className="outer-img-div">
                <img className="image-size" src={image} alt="error"/>
                <p className="title">{subtitle}</p>
            </div>   
    );
}
export {Card};
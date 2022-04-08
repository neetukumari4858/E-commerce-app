import "./HomePageCard.css";
const SportsCard=({Sports_image,Sports_subtitle})=>{
    return(
        <div className="outer-img-div">
            <img className="image-size" src={Sports_image} alt="error"/>
            <p className="title">{Sports_subtitle}</p>
        </div>   
    );
}
export {SportsCard};
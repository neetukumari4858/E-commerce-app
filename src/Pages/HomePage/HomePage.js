import { Footer } from "../../Components/Footer/Footer";
import { Cards } from "../../Components/Home-page-Card/CardSection";
import { Navbar} from "../../Components/Navigation/Navbar";
import "./HomePage.css";
const HomePage=()=>{
    return(
        <div className="Home-data">
            <Navbar/>
            <img className="home-img" src={"/image/home.jpeg"} alt="error"/> 
            <Cards/>
            <Footer/>
        </div>
    )
}
export { HomePage };
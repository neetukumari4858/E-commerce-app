import {Routes,Route} from "react-router-dom";
import { Navbar } from "./Components/Navigation/Navbar";
import {HomePage,ProductPage,SignUpPage,WishlistPage,CartPage,LoginPage} from "./Pages/index";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/ProductPage" element={<ProductPage/>}/>
          <Route path="/CartPage" element={<CartPage/>}/>
          <Route path="/WishlistPage" element={<WishlistPage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/SignUpPage" element={<SignUpPage/>}/>
      </Routes>
    </>
    
  );
}
export { App };







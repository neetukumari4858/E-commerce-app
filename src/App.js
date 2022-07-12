import {Routes,Route} from "react-router-dom";
import { Navbar } from "./Components/Navigation/Navbar";
import {RequireAuth} from "./RequireAuth"
import {HomePage,ProductPage,SignUpPage,WishlistPage,CartPage,LoginPage} from "./Pages/index";
import MockmanEs from 'mockman-js'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useState } from "react";

function App() {
  const [showAddressModal, setAddressModal] = useState(false);
  return (
    <div className="App">
     {showAddressModal ? (
        <AddressModal
          showAddressModal={showAddressModal}
          setAddressModal={setAddressModal}
        />

      ) : null}
    <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />  
      <Navbar/>
      <Routes>
      <Route path="/mock" element={<MockmanEs />} />
          <Route path="/" element={<HomePage/>}/>
          <Route path="/ProductPage" element={<ProductPage/>}/>
          <Route path="/CartPage" element={<RequireAuth><CartPage/></RequireAuth>}/>
          <Route path="/WishlistPage" element={<RequireAuth><WishlistPage/></RequireAuth>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/SignUpPage" element={<SignUpPage/>}/>
      </Routes>
    </div>
    
  );
}
export { App };







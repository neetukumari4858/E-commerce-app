import "./AddressModel.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addnewAddress } from "./../../service/AddressManegement/AddressManegement";
import { useAuth } from "../../Context/AuthContext";
import { useProducts } from "../../Context/productContext";
export const AddressModel = (setAddressModal) => {
  const [address, setaddress] = useState({
    name: "",
    street: "",
    state: "",
    city: "",
    mobile: "",
    zipCode: "",
    country: "",
  });

  const { userDetail } = useAuth()
  const { token } = userDetail
  const navigate=useNavigate();
  const {productDispatch}=useProducts()

  const { name, street, state, city, mobile, zipCode, country } = address;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setaddress({ ...address, [name]: value });
  };

  const checkInputs = () => {
    return (
      !name == " " &&
      !city == " " &&
      !country == " " &&
      !mobile == " " &&
      !zipCode == " "
    );
  };

  const callAddressApi = () => {
    if (checkInputs()) {
      if (token) {
        addnewAddress(address, token, productDispatch);
        setAddressModal(false);
      } else {
        navigate("/LoginPage");
        Toast("you have to login first", "info");
      }
    } else {
      Toast("All filed must be filled", "error");
    }
  };
  return (
    <div className="order-datail-body">
      <div className="modal-container">
        <h2 className="new-address-heading">Add New Address</h2>
        <form className="input-form">
          <input
            placeholder="Enter your first name"
            className="input-box"
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
            required
          />
          <input
            placeholder="Enter your street name"
            className="input-box"
            type="text"
            name="street"
            onChange={changeHandler}
            required
            value={street}
          />
          <input
            placeholder="Enter your state name"
            className="input-box"
            type="text"
            name="state"
            onChange={changeHandler}
            required
            value={state}
          />
          <input
            placeholder="Enter your city name"
            className="input-box"
            type="text"
            name="city"
            onChange={changeHandler}
            required
            value={city}
          />
          <input
            placeholder="Enter your country name"
            className="input-box"
            type="text"
            name="country"
            onChange={changeHandler}
            required
            value={country}
          />
          <input
            placeholder="Enter your phone name"
            className="input-box"
            type="text"
            name="mobile"
            onChange={changeHandler}
            required
            value={mobile}
          />
          <input
            placeholder="Enter your zip code Number"
            className="input-box"
            type="text"
            name="zipCode"
            onChange={changeHandler}
            required
            value={zipCode}
          />
        </form>
        <div className="footer_btn_div">
          <button className="footer_btn" onClick={callAddressApi}>
            save
          </button>
          <button className="footer_btn"  onClick={() => setAddressModal(false)}>cancel</button>
        </div>
      </div>
    </div>
  );
};

import "./AddressSelect.css";
import { BsPlusLg } from "react-icons/bs";
export const AddressSelect = ({
  setAddressModal,
  addresses,
  setSelectAddress,
}) => {
  return (
    <>
      <section>
        <div className="Addaddress-btn">
          <button
            className="plus-icon-btn"
            onClick={() => setAddressModal(true)}
          >
            Add Address
            <BsPlusLg className="plus-icon" />
          </button>
        </div>
        <div className="selected-address">
          {addresses?.map((item) => {
            return (
              <div className="selected_address_div">
                <label htmlFor={item._id} className="address_input-text">
                  <input
                    type="radio"
                    id={item._id}
                    name="address"
                    onClick={() => setSelectAddress(item)}
                    className="address_input-text"
                  />
                  {item.name}
                </label>

                <p className="address_paragraph">
                  {item.street} {item.city} {item.state} {item.country}
                </p>
                <p className="address_paragraph">Phone No:{item.mobile}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

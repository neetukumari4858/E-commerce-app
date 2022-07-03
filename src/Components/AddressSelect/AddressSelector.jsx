import {BsPlusLg} from "react-icons/bs";
export const AddressSelect = ({ addresses, setSelectAddress, setAddressModal}) => {
  return (
    <div className="Addaddress-btn">
      <button className="plus-icon-btn" onClick={()=>setAddressModal(true)}>
        Add Address
        <BsPlusLg className="plus-icon" />
      </button>
    </div>
  );
};

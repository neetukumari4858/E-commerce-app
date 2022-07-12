import axios from "axios";
import { toast } from "react-toastify";
export const addnewAddress = async (address, token, productDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/address",
      { address },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      productDispatch({ type: "ADD-ADDRESS", payload: response.data.address });
      toast.success("sucessfully added new address", "success");
    }
  } catch (error){
      console.log(error);
  }
};

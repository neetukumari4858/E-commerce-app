import axios from "axios";

export const addnewAddress = async (address, token, productDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/address",
      { address },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      productDispatch({ type: "ADD-ADDRESS", payload: response.data.address });
      Toast("sucessfully added new address", "success");
    }
  } catch (error){
      console.log(error);
  }
};

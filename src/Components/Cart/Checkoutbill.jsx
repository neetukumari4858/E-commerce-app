import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./checkoutbill.css";
export const Cheackoutbill = ({
  cart,
  totalPrice,
  deliveryCharges,
  totalAmount,
  selectAddress,
}) => {
  const paymentintegration = () => {
    selectAddress
      ? proceedToPay()
      : toast.error("Please select address", "error");
  };

  const users = localStorage.getItem("user");
  const user = JSON.parse(users);
  const navigate=useNavigate();

  const proceedToPay = () => {
    var options = {
      key: "rzp_test_Nz7sNsDcGD5Zle",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Royal",
      description: "Thank you",
      image:
        "https://images.all-free-download.com/images/graphiclarge/shopping_cart_icon_vector_red_background_280670.jpg",

      prefill: {
        name: user.firstName,
        email: user.email,
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      handler: function () {
        toast.success("Your order has been placed succuessfully.");
        navigate("/ProductPage")
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();

    rzp1.on("payment.failed", function (response) {
      toast.error("something went wrong", "error", response);
    });
  };
  return (
    <div className="inner-detail-div">
      <h1 className="order-detal-hearding">Order Details</h1>
      <h3>items </h3>
      <h3>Price</h3>
      <h3>Delivery charges</h3>
      <h3>Total</h3>
      <button className="cart-bill-btn" onClick={paymentintegration}>
        checkout
      </button>
      <div className="price">
        <h3>{cart.length} ₹</h3>
        <h3>{totalPrice} ₹</h3>
        <h3>{deliveryCharges} ₹</h3>
        <h3>{totalAmount} ₹</h3>
      </div>
    </div>
  );
};

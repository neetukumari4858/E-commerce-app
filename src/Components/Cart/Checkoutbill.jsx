import "./checkoutbill.css";
export const Cheackoutbill = ({
  cart,
  totalPrice,
  deliveryCharges,
  totalAmount,
}) => {

  const users = localStorage.getItem("user");
  const user = JSON.parse(users);

  const paymentintegration = () => {
    var options = {
      key: "rzp_test_Nz7sNsDcGD5Zle",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Royal",
      description: "Thank you",
      image: "https://example.com/your_logo",
   
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
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {});
  };
  return (
  //  <div className="order-datail-body">
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
          <h3>{cart.length}</h3>
          <h3>{totalPrice}</h3>
          <h3>{deliveryCharges}</h3>
          <h3>{totalAmount}</h3>
        </div>
      </div>
    //  </div>
  );
};

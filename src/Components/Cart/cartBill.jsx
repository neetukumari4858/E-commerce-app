export const CartBill = ({
  cart,
  totalPrice,
  deliveryCharges,
  totalAmount,
  setCheckout,
}) => {
  return (
    <div className="detail">
      <div className="inner-detail-div">
        <h2 className="price_detail_border">Price Details</h2> 
        <h3>items </h3>
        <h3>Price</h3>
        <h3>Delivery charges</h3>
        <h3>Total</h3>
        <button className="cart-btn" onClick={() => setCheckout(true)}>
          Place order
        </button>
        <div className="price">
          <h3>{cart.length} ₹</h3>
          <h3>{totalPrice} ₹</h3>
          <h3>{deliveryCharges} ₹</h3>
          <h3>{totalAmount} ₹</h3>
        </div>
      </div>
    </div>
  );
};

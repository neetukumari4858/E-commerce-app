
const cartReducer = (cartState, action) => {
    const { cart, wishlist } = cartState;
    const cartItem = cart.find((cartPageItems) => cartPageItems._id === action.payload._id,)
    const wishlistItem = wishlist.find((wishlistPageItems) => wishlistPageItems._id === action.payload._id,)
    switch (action.type) {
      case "ADD_TO_CART":
        if (cartItem) {
          return { ...cartState }
        } else {
          return { ...cartState, cart: [...cart, { ...action.payload }] };
        }
      case "REMOVE_From_Cart":
        return {
          ...cartState,
          cart: [...cart.filter((removeItem) => removeItem._id !== action.payload._id)]
        };
      case "INCREASE_QUANTITY":
        return {
          ...cartState,
          cart: cart.map((Increment_Item) =>
            Increment_Item._id === action.payload._id
              ? {
                ...Increment_Item,
                Quentity: Increment_Item.Quentity+1,
              }
              : Increment_Item,
          ),
        }
      case "DECREASE_QUANTITY":
        return {
          ...cartState,
          cart: cart.map((decrement_Item) =>
            decrement_Item._id === action.payload._id
              ? {
                ...decrement_Item,
                Quentity: decrement_Item.Quentity-1,
              }
              : decrement_Item,
          ),
        }
      case 'ADD_TO_WISHLIST':
        if (wishlistItem) {
          return { ...cartState }
        } else {
          return { ...cartState, wishlist: [...wishlist, action.payload] };
        }
      case "REMOVE_FROM_WISHLIST":
        return {
          ...cartState,
          wishlist: [...wishlist.filter((removeWishlistItem) => removeWishlistItem._id !== action.payload._id)]
        };
      case "MOVE_TO_CART":
        if (cartItem) {
          return {
            ...cartState,
            wishlist: wishlist.filter((removeWishlistItem) => removeWishlistItem._id !== action.payload._id)
          }
        }
      
          return {
            ...cartState, cart: [...cart, { ...action.payload }],
            wishlist: wishlist.filter((removeWishlistItem) => removeWishlistItem._id !== action.payload._id)
  
          };
        
      case "MOVE_TO_WISHLIST":
        if (wishlistItem) {
          return {
            ...cartState,
            cart: [...cart.filter((removeWishlistItem) => removeWishlistItem._id !== action.payload._id)]
          }
        }  else {
          return {
            ...cartState, wishlist: [...wishlist, action.payload],
            cart: [...cart.filter((removeItem) => removeItem._id !== action.payload._id)]
          };
        }
  
      default:
        return { ...cartState }
    }
  };
  export { cartReducer };
  
  
  
  
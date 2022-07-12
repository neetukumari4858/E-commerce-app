
const productReducer = (productState, action) => {
    const { cart, wishlist } = productState;
    const cartItem = cart.find((cartPageItems) => cartPageItems._id === action.payload._id,)
    const wishlistItem = wishlist.find((wishlistPageItems) => wishlistPageItems._id === action.payload._id,)
    switch (action.type) {
      case "ADD_TO_CART":
        return{
          ...productState,cart:action.payload
        }
      case "REMOVE_FROM_CART":
        return {
          ...productState,
          cart:  action.payload
        };
      case "INCREASE_QUANTITY":
        return {
          ...productState,
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
          ...productState,
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
        return { ...productState,wishlist:action.payload}
      case "REMOVE_FROM_WISHLIST":
        return {
          ...productState,
          wishlist: action.payload
        };
      case "MOVE_TO_CART":
        if (cartItem) {
          return {
            ...productState,
            wishlist: wishlist.filter((removeWishlistItem) => removeWishlistItem._id !== action.payload._id)
          }
        }
      
          return {
            ...productState, cart: [...cart, { ...action.payload }],
            wishlist: wishlist.filter((removeWishlistItem) => removeWishlistItem._id !== action.payload._id)
  
          };
        
      case "MOVE_TO_WISHLIST":
        if (wishlistItem) {
          return {
            ...productState,
            cart: [...cart.filter((removeWishlistItem) => removeWishlistItem._id !== action.payload._id)]
          }
        }  else {
          return {
            ...productState, wishlist: [...wishlist, action.payload],
            cart: [...cart.filter((removeItem) => removeItem._id !== action.payload._id)]
          };
        }

        case "ADD-ADDRESS":
          return {
            ...productState,
            addresses:  action.payload,
          };
  
      default:
        return { ...productState }
    }
  };
  export { productReducer };
  
  
  
  
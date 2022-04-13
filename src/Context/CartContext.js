import { createContext,useContext,useReducer}  from "react"
import { cartReducer } from "./CartReducer"

const cartContext=createContext()
const useCart=()=>useContext(cartContext)

const CartProvider=({children})=>{
    const [cartState,cartDispatch]=useReducer(cartReducer,{
        cart:[],
        wishlist:[]
    })
    return (
        <cartContext.Provider value={{cartState,cartDispatch}}>
            {children}

        </cartContext.Provider>
    )
}
export{useCart,CartProvider}
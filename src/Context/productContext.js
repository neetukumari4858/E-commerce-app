import { createContext, useContext, useReducer } from 'react'
import { productReducer } from './productReducer'

const productContext = createContext()
const useProducts = () => useContext(productContext)

const ProductsProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    cart: [],
    wishlist: [],
    addresses:[],
    orders:[]
  })
  return (
    <productContext.Provider value={{ productState, productDispatch }}>
      {children}
    </productContext.Provider>
  )
}
export { useProducts, ProductsProvider }

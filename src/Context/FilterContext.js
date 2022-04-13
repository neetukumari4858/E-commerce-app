import { createContext, useContext, useReducer } from "react";
import { ReducerFunc } from "./FilterReducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerFunc, {
    sortBy: "",
    category: { Men: false, Woman: false },
    rating: "",
    sliderPrice: 2000
  });
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };

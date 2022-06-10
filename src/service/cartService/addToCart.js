import axios from 'axios'

const addToCart = async (product, token, productDispatch) => {
  try {
    const response = await axios.post(
      '/api/user/cart',
      { product },
      {
        headers: { authorization: token },
      },
    )

    productDispatch({ type: 'ADD_TO_CART', payload: response.data.cart })
  } catch (error) {
    console.error(error, 'err')
  }
}
export { addToCart }

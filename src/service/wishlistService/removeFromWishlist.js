// import axios from 'axios'

// const removeFromWishlist = async (_id, token, productDispatch) => {
//   try {
//     const response = await axios.delete(`/api/user/wishlist/:${_id}`, {
//       headers: { authorization: token },
//     })
//     console.log(response,"res");
//     productDispatch({
//       type: 'REMOVE_FROM_WISHLIST',
//       payload: response.data.wishlist,
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
// export {removeFromWishlist}

import axios from 'axios'

const removeFromWishlist = async (_id, token, productDispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: token },
    })

    productDispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: response.data.wishlist,
    })
  } catch (error) {
    console.error(error)
  }
}

export { removeFromWishlist }

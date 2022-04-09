
const RatingFunc = (state, rating) => {
 
    if (rating === "") {
      return state;
    } else {
      return state.filter((item) => Number(item.Rating) >= Number(rating));
    }
  };
export {RatingFunc}

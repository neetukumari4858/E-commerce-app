const ReducerFunc = (state, action) => {
    switch (action.type) {
      case "high_to_low":
        return { ...state, sortBy: action.type };
      case "low_to_high":
        return { ...state, sortBy: action.type };
      case "CATEGORY":
        return {
          ...state,
          category: {
            ...state.category,
            [action.payload]: !state.category[action.payload]
          }
        };
      case "RATING":
        return { ...state, rating: action.payload };
      case "FILTER_BY_PRICE_RANGE":
        return {...state, sliderPrice: action.payload };
      case "CLEAR_FILTER":
        return {
          sortBy: "",
          category: { Men: false, Woman: false },
          rating: "",
          sliderPrice: 2000      
        }
      default:
        return state;
    }
  };
export {ReducerFunc}


const CategoryFilterFunc = (state,categoryName) => {
    if (Object.values(categoryName).every((value) => value === false)) {
      return state;
    }
    return state.filter((Product) =>categoryName[Product.categoryName]);
  };
export {CategoryFilterFunc}
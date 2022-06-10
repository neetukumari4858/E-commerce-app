const SliderFunc = (state, initialPrice) => {
    // console.log(state,initialPrice)
    if (initialPrice) {
        return state.filter((sliderItems) => sliderItems.price <= initialPrice);
    }
};
export{SliderFunc}
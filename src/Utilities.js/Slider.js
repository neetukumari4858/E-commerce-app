const SliderFunc = (state, initialPrice) => {
    if (initialPrice) {
        return state.filter((sliderItems) => sliderItems.price <= initialPrice);
    }
};
export{SliderFunc}
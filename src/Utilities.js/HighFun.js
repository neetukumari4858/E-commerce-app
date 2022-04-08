const HighFun = (Products, sortby) => {
  console.log(Products,"sorted Product");
    if (sortby === "high_to_low") {
     return [...Products].sort((a, b) => Number(b.Discounted_value) - Number(a.Discounted_value));
    } else if (sortby === "low_to_high") {
      return [...Products].sort((a, b) => Number(a.Discounted_value)- Number(b.Discounted_value));
    } else {
      return Products;
    }
  };

export {HighFun}
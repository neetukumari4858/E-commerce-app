import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: "/image/shoe7.jpeg",
    title: "Reebok",
    price:"700",
    Discounted_value:"650",
    AddtoCart_btn:"Add to cart",
    categoryName:"Men",
  },
  {
    _id: uuid(),
    image:"/image/new2.jpeg",
    title: "Lotto",
    price:"800",
    Discounted_value:"750",
    AddtoCart_btn:"Add to cart",
    categoryName: "Woman",
  },
  {
    _id: uuid(),
    image:"/image/new4.jpeg",
    title: "Fila",
    price:"600",
    Discounted_value:"550",
    AddtoCart_btn:"Add to cart",
    categoryName: "Men",
  },
  {
    _id: uuid(),
    image:"/image/new3.jpeg",
    title: "Hummel",
    price:"900",
    Discounted_value:"850",
    AddtoCart_btn:"Add to cart",
    categoryName: "Woman",
  },
  {
    _id: uuid(),
    image:"/image/new16.jpeg",
    title: "Reebok",
    price:"500",
    Discounted_value:"450",
    AddtoCart_btn:"Add to cart",
    categoryName: "Men",
  },
  {
    _id: uuid(),
    image:"/image/new8.jpeg",
    title: "Lotto",
    price:"1100",
    Discounted_value:"1000",
    AddtoCart_btn:"Add to cart",
    categoryName: "Woman",
  },
  {
    _id: uuid(),
    image:"/image/new6.jpeg",
    title: "Fila",
    price:"1200",
    Discounted_value:"1150",
    AddtoCart_btn:"Add to cart",
    categoryName: "Men",
  },
  {
    _id: uuid(),
    image:"/image/new18.jpg",
    title: "Hummel",
    price:"1500",
    Discounted_value:"1300",
    AddtoCart_btn:"Add to cart",
    categoryName: "Woman",
  },
  {
    _id: uuid(),
    image:"/image/19.jpeg",
    title: "Asics",
    price:"1800",
    Discounted_value:"1750",
    AddtoCart_btn:"Add to cart",
    categoryName: "Men",
  }
];

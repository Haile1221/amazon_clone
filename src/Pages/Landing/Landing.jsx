import React from "react";
import Category from "../../amazonComponents/Category/Category";
import Product from "../../amazonComponents/Product/Product";
import LayOut from "../../amazonComponents/LayOut/LayOut";
import MyCarousel from "../../amazonComponents/Carousel/MyCarousel";

const Landing = () => {
  return (
    <LayOut>
      {/* <Carousel/> */}
      <MyCarousel />
      <Category />
      <Product />
    </LayOut>
  );
};

export default Landing;

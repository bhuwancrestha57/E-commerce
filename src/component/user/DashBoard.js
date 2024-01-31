import React from "react";
import HotProducts from "./HotProducts";
import TrendingVendors from "./TrendingVendors";
import Carousel from "./Carousel";

const DashBoard = () => {
  return (
    <div>
      <Carousel />
      <HotProducts />
      <TrendingVendors />
    </div>
  );
};

export default DashBoard;

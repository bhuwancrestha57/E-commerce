import React from "react";
import UserItems from "./UserItems";
import { TrendingVendorsData } from "../../utlis/items";

const TrendingVendors = () => {
  return (
    <div>
      <UserItems data={TrendingVendorsData} title="Trending Vendors" />
    </div>
  );
};

export default TrendingVendors;

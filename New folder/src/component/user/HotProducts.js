import React from "react";
import UserItems from "./UserItems";
import { HotproductData } from "../../utlis/items";

const HotProducts = () => {
  return (
    <div>
      <UserItems data={HotproductData} title="Hot Products" />
    </div>
  );
};

export default HotProducts;

import React from "react";
import UserItems from "./UserItems";
import { HotproductData } from "../../utlis/items";

const HotProducts = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", paddingBottom: "20px" }}>
      <UserItems data={HotproductData} title="Hot Products" />
    </div>
  );
};

export default HotProducts;

import React from "react";

import { useNavigate } from "react-router-dom";
import { Auth, HeaderItem } from "../../utlis/items";

const Index = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log("data", e);
    navigate(e);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <div>Logo</div>
      <div style={{ display: "flex", gap: "4px" }}>
        {HeaderItem?.map((item) => (
          <div
            key={item.link}
            style={{ color: "white" }}
            onClick={() => handleClick(item.link)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        {Auth?.map((item) => (
          <div
            key={item.link}
            style={{ color: "white" }}
            onClick={() => handleClick(item.link)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { Auth, HeaderItem } from "../../utlis/items";
import image1 from "../../image/Logo.png";

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
      <div>
        <Link to="/">
          <img
            style={{
              width: "50px",
              height: "60px",
              paddingTop: "15px",
            }}
            src={image1}
            alt=""
          />
        </Link>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        {HeaderItem?.map((item) => (
          <div
            key={item.link}
            style={{ color: "white", fontWeight: "bold" }}
            onClick={() => handleClick(item.link)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {Auth?.map((item) => (
          <div
            key={item.link}
            style={{ color: "white", fontWeight: "bold" }}
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

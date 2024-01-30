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
    <div className="flex justify-between">
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

      <div className="flex gap-20">
        {HeaderItem?.map((item) => (
          <div
            key={item.link}
            className="text-white font-bold"
            onClick={() => handleClick(item.link)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        {Auth?.map((item) => (
          <div
            key={item.link}
            className="text-white font-bold"
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

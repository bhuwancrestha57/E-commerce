import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserItems = ({ data, title }) => {
  console.log("data", data, title);
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/userdetail/${item.id}`);
    localStorage.setItem("userdetail", JSON.stringify(item));
  };
  return (
    <div style={{ paddingLeft: "25px" }}>
      <div>
        <h2>{title}</h2>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-start", gap: "25px" }}
      >
        {data?.map((item) => (
          <div key={item.id} onClick={() => handleClick(item)}>
            <Card
              hoverable
              style={{
                width: 280,
              }}
              cover={
                <img style={{ height: 300 }} alt="example" src={item.image} />
              }
            >
              <div>Name:{item.name}</div>
              <div>Price:{item.price}</div>
              <div>Brand:{item.brand}</div>
              <div>
                <Button type="primary">Add to Cart</Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserItems;

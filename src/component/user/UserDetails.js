import { EyeOutlined } from "@ant-design/icons";
import { Button, Card, Rate } from "antd";
import React from "react";

const UserDetails = () => {
  const myValue = localStorage.getItem("userdetail");
  const data = JSON.parse(myValue);
  console.log("userdetail", JSON.parse(myValue));
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <div>
        <Card
          hoverable
          style={{
            width: 440,
          }}
          cover={<img alt="example" src={data.image} />}
        >
          <div>
            <Button type="primary">Add to Cart</Button>
          </div>
        </Card>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          borderRadius: "1px",
          borderWidth: "1px",
          borderBlockColor: "black",
        }}
      >
        <div>
          <h1>{data.name}</h1>
        </div>
        <div>Price:{data.price}</div>
        <div>Brand:{data.brand}</div>

        <div>
          <Rate value={data.rating} />
        </div>

        <div>
          <EyeOutlined />
          View:{data.view}
        </div>
        <div>Stock Available:{data.stockItem}</div>
        <div>Description:{data.description}</div>
      </div>
    </div>
  );
};

export default UserDetails;

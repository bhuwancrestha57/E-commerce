import { Card } from "antd";
import React from "react";

const UserItems = ({ data, title }) => {
  console.log("data", data, title);
  return (
    <div>
      <div>{title}</div>
      <div
        style={{ display: "flex", justifyContent: "flex-start", gap: "50px" }}
      >
        {data?.map((item) => (
          <div key={item.id}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={item.image} />}
            >
              <div>Name:{item.name}</div>
              <div>Price:{item.price}</div>
              <div>Brand:{item.brand}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserItems;

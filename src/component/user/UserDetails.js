import { EyeOutlined } from "@ant-design/icons";
import { Button, Card, Rate } from "antd";
import React from "react";
import { useAppContext } from "../../ContextApi";

const UserDetails = () => {
  const { appState } = useAppContext();
  console.log("userdetail", appState);
  // const myValue = localStorage.getItem("userdetail");
  // const data = JSON.parse(myValue);
  // console.log("userdetail", JSON.parse(myValue));
  return (
    <div className="flex justify-center gap-2.5">
      <div>
        <Card
          hoverable
          style={{
            width: 440,
          }}
          cover={<img alt="example" src={appState.image} />}
        >
          <div>
            <Button type="primary">Add to Cart</Button>
          </div>
        </Card>
      </div>
      <div
        className="border-2 border-gray w-1/4 p-3"
        // style={{
        //   boxSizing: "border-box",
        //   borderRadius: "1px",
        //   borderWidth: "1px",
        //   borderBlockColor: "black",
        // }}
      >
        <div className="text-xl font-bold">{appState.name}</div>
        <div>Price:{appState.price}</div>
        <div>Brand:{appState.brand}</div>

        <div>
          <Rate value={appState.rating} />
        </div>

        <div>
          <EyeOutlined />
          View:{appState.view}
        </div>
        <div>Stock Available:{appState.stockItem}</div>
        <div>Description:{appState.description}</div>
      </div>
    </div>
  );
};

export default UserDetails;

import React, { useState } from "react";
import { Avatar, Badge, Card, Drawer, Rate } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useAppContext } from "../../ContextApi";

const Cart = () => {
  const { appState } = useAppContext();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Badge onClick={showDrawer} count={1}>
        <Avatar icon={<ShoppingCartOutlined />} />
      </Badge>

      <Drawer title="Your Cart items" onClose={onClose} open={open}>
        <div>
          <Card
            hoverable
            style={{
              width: 50,
              height: 50,
            }}
            cover={<img alt="example" src={appState.detail.image} />}
          ></Card>
        </div>
        <div>
          <div className="text-xl font-bold">{appState.detail.name}</div>
          <div>Price:{appState.detail.price}</div>
          <div>Brand:{appState.detail.brand}</div>

          <div>
            <Rate value={appState.detail.rating} />
          </div>

          <div>
            <EyeOutlined />
            View:{appState.detail.view}
          </div>
          <div>Stock Available:{appState.detail.stockItem}</div>
          <div>Description:{appState.detail.description}</div>
        </div>
      </Drawer>
    </>
  );
};

export default Cart;

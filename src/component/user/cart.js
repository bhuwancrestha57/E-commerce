import React, { useState } from "react";
import { Avatar, Badge, Drawer } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const Cart = () => {
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Cart;

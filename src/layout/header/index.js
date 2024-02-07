import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Drawer, Image, Button } from "antd";
import {
  MinusCircleFilled,
  PlusCircleFilled,
  ShoppingCartOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Auth, HeaderItem } from "../../utlis/items";
import image1 from "../../image/Logo.png";
import UserHeader from "./UserHeader";
import { useAppContext } from "../../ContextApi";

const Index = () => {
  const { appState, updateState } = useAppContext();
  const [myOrder, setMyOrder] = React.useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    navigate(e);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setMyOrder([...new Set(appState.addtocard)]);
  }, [appState.addtocard]);

  const incQty = (itemIndex) => {
    setMyOrder((prevOrder) => {
      const updatedOrder = [...prevOrder];
      updatedOrder[itemIndex].qty++;
      return updatedOrder;
    });
  };

  const decQty = (itemIndex) => {
    setMyOrder((prevOrder) => {
      const updatedOrder = [...prevOrder];
      updatedOrder[itemIndex].qty = Math.max(
        updatedOrder[itemIndex].qty - 1,
        1
      );
      return updatedOrder;
    });
  };

  const removeItem = (itemId) => {
    const updatedOrder = myOrder.filter((item) => item.id !== itemId);
    setMyOrder(updatedOrder);
    updateState({ addtocard: updatedOrder });
  };

  return (
    <div className="flex justify-between">
      <div>
        <Link to="/">
          <img
            style={{ width: "50px", height: "60px", paddingTop: "15px" }}
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
      <div className="flex gap-5 items-center">
        <div className="mt-[5px]">
          <Badge count={myOrder.length}>
            <ShoppingCartOutlined
              className=" text-white text-2xl  "
              onClick={showDrawer}
            />
          </Badge>
        </div>
        {open && (
          <div>
            <Drawer title="Your Cart items" onClose={onClose} open={open}>
              <div className="gap-4 grid">
                {myOrder?.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-20 h-20">
                      <Image src={item.image} alt="noimage" />
                    </div>
                    <div>
                      <div>Name: {item.name}</div>
                      <div>Price: {item.price}</div>
                      <div>Brand: {item.brand}</div>
                      <div>Qty: {item.qty}</div>
                      <div>Total Price: {item.price * item.qty}</div>
                      <div>
                        <div className="flex gap-3">
                          <button onClick={() => incQty(index)}>
                            <PlusCircleFilled />
                          </button>
                          <button onClick={() => decQty(index)}>
                            <MinusCircleFilled />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button
                        type="primary"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => removeItem(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Drawer>
          </div>
        )}
        <div>
          <UserHeader />
        </div>
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

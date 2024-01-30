import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../ContextApi";

const UserItems = ({ data, title }) => {
  const { updateState } = useAppContext();
  const navigate = useNavigate();
  const handleClick = (item) => {
    updateState(item);
    navigate(`/userdetail/${item.id}`);

    // localStorage.setItem("userdetail", JSON.stringify(item));
  };
  return (
    <div style={{ paddingLeft: "25px" }}>
      <div className="text-xl font-bold p-2">{title}</div>

      <div className="flex justify-start gap-7">
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
                <Button>Add to Cart</Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserItems;

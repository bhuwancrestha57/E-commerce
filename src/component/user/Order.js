import { Avatar, Descriptions, Modal, Table } from "antd";
import React from "react";

const Order = ({
  isModalOpen,
  setIsModalOpen,
  sumNetTotal,
  sumQtyTotal,
  myOrder,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log("myOrder", myOrder);
  const columns = [
    {
      title: "Name",
      dataIndex: "",
    },
    {
      title: "Qty",
      dataIndex: "",
    },
    {
      title: "Price",
      dataIndex: "",
    },
  ];
  return (
    <div>
      <Modal
        title="Payment Methods"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div>
            <div>
              <Table columns={columns} />
            </div>
            <div className="flex justify-start items-start gap-2">
              <div>
                <Descriptions title="Total Details">
                  <Descriptions.Item label="Price">
                    {sumNetTotal}
                  </Descriptions.Item>
                  <Descriptions.Item label="Quentity">
                    {sumQtyTotal}
                  </Descriptions.Item>
                </Descriptions>
              </div>
              <div className="grid gap-3">
                <div>
                  <Avatar
                    icon={
                      <img
                        src="https://esewa.com.np/common/images/esewa-icon-large.png"
                        alt="/"
                      />
                    }
                  />
                </div>
                <div>
                  <Avatar
                    icon={
                      <img
                        src="https://esewa.com.np/common/images/esewa-icon-large.png"
                        alt="/"
                      />
                    }
                  />
                </div>
                <div>
                  <Avatar
                    icon={
                      <img
                        src="https://esewa.com.np/common/images/esewa-icon-large.png"
                        alt="/"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Order;

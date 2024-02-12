import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Profile",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Histry",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Record",
    children: "Content of Tab Pane 3",
  },
];

const Profile = () => {
  return (
    <div>
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default Profile;

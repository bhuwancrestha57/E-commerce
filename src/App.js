import { Button, Checkbox, ColorPicker, DatePicker, Form, Input } from "antd";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const MyApp = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <div>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label={"First Name"}
          name={"first_name"}
          rules={[
            {
              required: "true",
              message: "Please input your First Name!",
            },
          ]}
        >
          <Input
            placeholder="Input your first Name"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          label={"Last Name"}
          name={"last_name"}
          rules={[
            {
              required: "true",
              message: "Please input your Last Name!",
            },
          ]}
        >
          <Input
            placeholder="Input your Last Name "
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          name={"contact"}
          label={"Contact"}
          rules={[
            {
              pattern: "/^d{10}$/",
              message: "Please input value not Valid!",
            },
            {
              required: true,
              message: "Please input Phone Number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={"active"} valuePropName="checked">
          <Checkbox defaultChecked={true}>Active</Checkbox>
        </Form.Item>
        <Form.Item label={"Description"} name={"description"}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label={"Email"}
          name={"email"}
          rules={[
            {
              required: "true",
              type: "email",
              message: "The input is not Valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Password"}
          name={"password"}
          rules={[
            {
              required: "true",
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item label={"Color Picker"} name={"colorpicker"}>
          <ColorPicker defaultValue="#420356" />
        </Form.Item>
        <Form.Item label={"Date Picker"} name={"date_picker"}>
          <DatePicker />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          From Submit
        </Button>
      </Form>
    </div>
  );
};

export default MyApp;

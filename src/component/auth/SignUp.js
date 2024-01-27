import { Button, Card, DatePicker, Form, Input } from "antd";
import React from "react";

import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const SignUp = () => {
  return (
    <div
      style={{
        width: "500px",
        height: "auto",
        margin: "auto",
        paddingTop: "30px",
      }}
    >
      <Card style={{ opacity: "0.8", backgroundColor: "eae5e4" }}>
        <div>
          <div style={{ textAlign: "center" }}>
            <h3>Sign up</h3>
          </div>
          <div>
            <Form layout="vertical">
              <Form.Item
                name={"full_name"}
                rules={[
                  {
                    required: "true",
                    message: "Please input your Full Name!",
                  },
                ]}
              >
                <Input
                  placeholder="Input your Full Name"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item
                name={"email"}
                rules={[
                  {
                    required: "true",
                    type: "email",
                    message: "The input is not Valid email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name={"contact"}
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
                <Input placeholder="Contact" />
              </Form.Item>
              <Form.Item label={"Date Of Birth"} name={"dob"}>
                <DatePicker />
              </Form.Item>

              <Form.Item
                name={"password"}
                rules={[
                  {
                    required: "true",
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name={"re-password"}
                rules={[
                  {
                    required: "true",
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter Password Again"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Create Account
              </Button>
            </Form>
            <div>
              Already have an account? <Link to="/auth/login">Login</Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;

import { Button, Card, Form, Input } from "antd";
import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
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
            <h3>Sign In</h3>
          </div>
          <Form layout="vertical">
            <Form.Item
              name={"user_name"}
              label={"User Name"}
              rules={[
                {
                  required: "true",
                  type: "email",
                  message: "The input  Valid email!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name={"password"}
              label={"Password"}
              rules={[
                {
                  required: "true",
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
          <div>
            Don't have an account? <Link to="/auth/signup">Sign Up</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;

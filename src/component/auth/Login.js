import { Button, Card, Form, Input } from "antd";
import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-96 h-auto m-auto pt-20">
      <Card className="opacity-80 bg-white">
        <div>
          <div className="text-center font-bold text-xl pb-2.5">
            <h3>Login</h3>
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

            <Button htmlType="submit">Login</Button>
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

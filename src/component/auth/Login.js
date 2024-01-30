import { Button, Card, Form, Input } from "antd";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utlis/items";

const Login = () => {
  const data = auth?.[0];

  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values?.user_name === data.type) {
      navigate("/");
      localStorage.setItem("token", JSON.stringify(data));
    } else {
      const admindata = auth?.map((item) => {
        return { ...item, name: values.user_name, type: "admin" };
      });
      localStorage.setItem("token", JSON.stringify(admindata?.[0]));
      navigate("/admin");
    }
  };
  return (
    <div className="w-96 h-auto m-auto pt-20">
      <Card className="opacity-80 bg-white">
        <div>
          <div className="text-center font-bold text-xl pb-2.5">
            <h3>Login</h3>
          </div>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name={"user_name"}
              label={"User Name"}
              rules={[
                {
                  required: "true",

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

            <div className="flex justify-between">
              <Button htmlType="submit">Login</Button>
              <Button onClick={() => navigate("/")}>Back Home</Button>
            </div>
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

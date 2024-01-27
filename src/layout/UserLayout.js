import { Layout, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./header";
const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <div>
        <Layout>
          <Header style={{ color: "white" }}>
            <MainHeader />
          </Header>
          <Content
            style={{
              padding: "0 48px",
            }}
          >
            <Layout
              style={{
                padding: "24px 0",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <div>
                <Outlet />
              </div>
            </Layout>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Bhuwan Shrestha
          </Footer>
        </Layout>
      </div>
    </div>
  );
};

export default UserLayout;

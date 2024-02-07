import { Layout, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./header";

import UserFooter from "./footer/UserFooter";

const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <div>
        <Layout>
          <Header className="!sticky !top-0 " style={{ zIndex: 999 }}>
            <MainHeader />
          </Header>
          <Content
            style={{
              padding: "0 48px",
            }}
          >
            <Layout
              style={{
                padding: "5px 0",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <div>
                <Outlet />
              </div>
            </Layout>
          </Content>
          <UserFooter />
        </Layout>
      </div>
    </div>
  );
};

export default UserLayout;

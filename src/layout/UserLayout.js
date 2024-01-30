import { Layout, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import MainHeader from "./header";
import image1 from "../../src/image/Logo.png";
import {
  AndroidOutlined,
  ClockCircleFilled,
  EnvironmentOutlined,
  FacebookFilled,
  GithubFilled,
  GooglePlusOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterCircleFilled,
  WhatsAppOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <div>
        <Layout>
          <Header>
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
          <Footer className=" bg-[#001529] text-slate-100">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div>
                  <Link to="/">
                    <img className="w-12 h-12" src={image1} alt="" />
                  </Link>
                </div>
                <div>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  velit it’s a cold world out there.
                </div>
                <div>
                  <EnvironmentOutlined className="text-red-600 p-2" />
                  Main Road, Koteshwor,Nepal
                </div>
                <div>
                  <PhoneOutlined className="text-red-600 p-2" />
                  (+977) 9840170728
                </div>
                <div>
                  <Link to="/">
                    <MailOutlined className="text-red-600 p-2" />
                    LM Fashion Wear
                  </Link>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold">INFORMATION</div>
                <div>Our Story</div>
                <div>Privacy & Policy</div>
                <div>Terms & Conditions</div>
                <div>Shipping & Delivery</div>
                <div>Careers</div>
                <div>FAQs</div>
              </div>
              <div>
                <div className="text-xl font-bold">OUR SOCIAL</div>
                <div>
                  <ul className="inline-block pr-5">
                    <li>
                      {" "}
                      <GooglePlusOutlined className="p-2 text-red-600" />
                      Google+
                    </li>
                    <li>
                      <WhatsAppOutlined className="p-2 text-red-600" />
                      WhatsApp
                    </li>
                    <li>
                      <AndroidOutlined className="p-2 text-red-600" />
                      Android
                    </li>

                    <li>
                      <InstagramOutlined className="p-2 text-red-600" />
                      Instragram
                    </li>
                  </ul>
                  <ul className="inline-block pr-5">
                    <li>
                      <FacebookFilled className="p-2 text-red-600" />
                      Facebook
                    </li>
                    <li>
                      <TwitterCircleFilled className="p-2 text-red-600" />
                      Twitter
                    </li>
                    <li>
                      <GithubFilled className="p-2 text-red-600" />
                      Github
                    </li>
                    <li>
                      <YoutubeFilled className="p-2 text-red-600" />
                      YouTube
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <div className="text-xl font-bold">OPENING TIME</div>
                  <div>
                    <ClockCircleFilled className="p-2 text-red-600" />
                    Monday - Friday: 08:30 am - 09:30 pm
                  </div>
                  <div>Sat - Sun: 09:00 am - 10:00 pm</div>
                </div>
                <div>
                  <div className="text-xl font-bold">PAYMENT OPTION</div>
                  <div className=" grid grid-cols-4 gap-1 text-5xl text-red-600">
                    <i class="fa-brands fa-cc-mastercard"></i>
                    <i class="fab fa-cc-discover"></i>
                    <i class="fab fa-cc-amex"></i>
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-stripe"></i>
                    <i class="fab fa-cc-stripe"></i>
                    <i class="fab fa-cc-jcb"></i>
                  </div>
                </div>
              </div>
            </div>
          </Footer>
          <Footer className=" bg-[#aa860e] px-3 py-2 text-xs text-white text-center">
            <div>© 2021 bhuwan.com | All Rights Reserved.</div>
          </Footer>
        </Layout>
      </div>
    </div>
  );
};

export default UserLayout;

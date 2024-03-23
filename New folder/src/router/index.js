import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { lazy } from "react";

const Adminlayout = lazy(() => import("../layout/Adminlayout"));
const AdminDashBoard = lazy(() => import("../component/admin/DashBoard"));
const UserDashBoard = lazy(() => import("../component/user/DashBoard"));
const UserLayout = lazy(() => import("../layout/UserLayout"));
const AboutUs = lazy(() => import("../component/aboutUs/AboutUs"));
const ContactUs = lazy(() => import("../component/contactUs/ContactUs"));
const HotProducts = lazy(() => import("../component/user/HotProducts"));
const LatestProducts = lazy(() =>
  import("../component/latestProducts/LatestProducts")
);
const Login = lazy(() => import("../component/login/Login"));
const SignUp = lazy(() => import("../component/signUp/SignUp"));

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<UserDashBoard />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="hotproducts" element={<HotProducts />} />
        <Route path="latestproducts" element={<LatestProducts />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="/admin" element={<Adminlayout />}>
        <Route index element={<AdminDashBoard />} />
      </Route>
    </Route>
  )
);

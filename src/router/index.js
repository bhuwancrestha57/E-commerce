import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { lazy } from "react";
import PageNotFound from "../component/PageNotFound";
import UserDetails from "../component/user/UserDetails";
import Category from "../component/user/Category";
import Profile from "../component/user/profile/Profile";

const Adminlayout = lazy(() => import("../layout/Adminlayout"));
const AdminDashBoard = lazy(() => import("../component/admin/DashBoard"));
const UserDashBoard = lazy(() => import("../component/user/DashBoard"));
const UserLayout = lazy(() => import("../layout/UserLayout"));
const AboutUs = lazy(() => import("../component/aboutUs/AboutUs"));
const ContactUs = lazy(() => import("../component/contactUs/ContactUs"));
const HotProducts = lazy(() => import("../component/user/HotProducts"));
const TrendingVendors = lazy(() => import("../component/user/TrendingVendors"));
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const Login = lazy(() => import("../component/auth/Login"));
const SignUp = lazy(() => import("../component/auth/SignUp"));

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<UserDashBoard />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="hotproducts" element={<HotProducts />} />
        <Route path="trendingvendors" element={<TrendingVendors />} />
        <Route path="user/profile" element={<Profile />} />

        <Route path="userdetail/:id" element={<UserDetails />} />
      </Route>
      <Route path="/admin" element={<Adminlayout />}>
        <Route index element={<AdminDashBoard />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="/category" element={<Category />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Route>
  )
);

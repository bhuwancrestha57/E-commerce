import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Adminlayout from "../layout/Adminlayout";

import AdminDashBoard from "../component/admin/DashBoard";
import UserDashBoard from "../component/user/DashBoard";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserDashBoard />}>
        <Route index element={<UserDashBoard />} />
      </Route>
      <Route path="/admin" element={<Adminlayout />}>
        <Route index element={<AdminDashBoard />} />
      </Route>
    </Route>
  )
);

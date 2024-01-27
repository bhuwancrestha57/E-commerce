import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <div>hello userlayout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;

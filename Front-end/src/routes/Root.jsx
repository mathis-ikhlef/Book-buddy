// src/routes/Root.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;

import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function RootLayout() {
  return (
    <>
      {/* Navigation bar */}
      <MainNavigation />
      <br />
      <br />
      {/* Main Content */}
      <Outlet />
    </>
  );
}

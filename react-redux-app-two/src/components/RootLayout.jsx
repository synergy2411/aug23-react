import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <br />
      <Outlet />
    </>
  );
}

import React from "react";
import Header from "./Header/Header";
import MainLayout from "./Main/MainLayout";

export default function Layout() {
  return (
    <div>
      <div className="h-screen w-full">
        <Header/>
        <MainLayout/>
      </div>
    </div>
  );
}

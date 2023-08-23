import React from "react";
import MainHeader from "./Main_components/MainHeader";
import MainContent from "./Main_components/MainContent";

export default function MainLayout() {
  return (
    <div className="w-full h-full bg-common-bg">
      <div className="w-3/5 h-full  m-auto">
        <MainHeader />
        <MainContent/>
      </div>
    </div>
  );
}

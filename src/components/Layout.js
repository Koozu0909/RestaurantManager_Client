import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from "./Header/Header";
import MainLayout from "./Main/MainLayout";
import Login from "./Login&Resgister/Login";
import Footer from "./Footer/Footer";
import Resgister from "./Login&Resgister/Resgister";

export default function App() {
  return (
    <Router>
      <div className="h-screen w-full">
        <Header/>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resgister />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

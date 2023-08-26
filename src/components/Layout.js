import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import MainLayout from "./Main/MainLayout";
import Login from "./Login&Resgister/Login";
import Footer from "./Footer/Footer";
import Resgister from "./Login&Resgister/Resgister";
import FoodLayout from "./FoodDetail/FoodLayout";
import MyUserReducer from "./reducers/MyUserReducer";
import { CookiesProvider, useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
export const MyUserContext = createContext();
const commonLayoutRoutes = [
  "/ha-noi/food",
  "/ho-chi-minh/food",
  "/ha-noi/drink",
  "/ho-chi-minh/drink",
];

export default function Layout() {
  const [cookies] = useCookies(["user"]);
  const [user, dispatch] = useReducer(MyUserReducer, cookies.user || null);
  return (
    <CookiesProvider>
      <MyUserContext.Provider value={[user, dispatch]}>
        <Router>
          <div className="h-screen w-full">
            <Header />
            <Routes>
              {commonLayoutRoutes.map((route) => (
                <Route
                  key={route}
                  path={`/${route}/:encodedId`}
                  element={<FoodLayout />}
                />
              ))}
              {/* Common Layout Routes */}
              {commonLayoutRoutes.map((route) => (
                <Route key={route} path={route} element={<MainLayout />} />
              ))}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Resgister />} />
            </Routes>
            <Footer />
          </div>
        </Router>
        <ToastContainer />
      </MyUserContext.Provider>
    </CookiesProvider>
  );
}

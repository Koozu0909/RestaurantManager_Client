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
import UserInfo from "./UserInfo/UserInfo";
import ChangePass from "./UserInfo/UserInfo_components/ChangePass";
import UserDetailInfo from "./UserInfo/UserInfo_components/UserDetailInfo";
import Notification from "./UserInfo/UserInfo_components/Notification";
import ManageLayout from "./ManageLayout/ManageLayout";
import RevenueStatistics from "./ManageLayout/ManageLayout_components/RevenueStatistics";
import ManageFood from "./ManageLayout/ManageLayout_components/ManageFood";
import RestaurantInfo from "./ManageLayout/ManageLayout_components/RestaurantInfo";
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
              <Route path="/owner" element={<ManageLayout />}>
                <Route index element={<RevenueStatistics />} />
                <Route path="statistics" element={<RevenueStatistics />} />
                <Route path="manage-food" element={<ManageFood />} />
                <Route path="restaurant-info" element={<RestaurantInfo />} />
              </Route>
              <Route path="/user" element={<UserInfo />}>
                <Route index element={<UserDetailInfo />} />
                <Route path="profile" element={<UserDetailInfo />} />
                <Route path="change_pass" element={<ChangePass />} />
                <Route path="notification" element={<Notification />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        </Router>
        <ToastContainer />
      </MyUserContext.Provider>
    </CookiesProvider>
  );
}

import React, { useContext } from "react";
import { FaBell, FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MyUserContext } from "../../Layout";
import { Menu } from "@headlessui/react";
import UserDropDown from "./UserDropDown";

export default function HeaderRight() {
  const [user, dispatch] = useContext(MyUserContext);

  return (
    <div className="w-1/5 h-full  flex items-center justify-end ">
      <Link
        to="/cart"
        className="w-1/8 h-3/6  flex items-center justify-center text-lg"
      >
        <FaCartShopping />
      </Link>
      {user === null ? (
        <>
          <Link
            to="/login"
            className="w-2/6 h-3/6 rounded border-2 border-red-500 text-red-600 mr-7 ml-3"
          >
            <button className="w-full h-full">Đăng nhập</button>
          </Link>
        </>
      ) : (
        <div className="w-3/6 h-3/5  flex items-center justify-between">
          <div className="w-2/6 h-3/6  flex items-center justify-center text-lg ">
            <FaBell className="cursor-pointer" />
          </div>
          <Menu as="div" className="w-4/6 h-3/6  text-lg cursor-pointer relative ">
            <Menu.Button className="w-full h-full flex items-center justify-start">
            <div className="w-3/6 h-full mr-2 ">{user && user.username}</div>
            <div className="w-1/6 h-full ">
              <img className="w-full h-full" src={user.imageURL} alt="" />
            </div>
            </Menu.Button>
            <UserDropDown/>
          </Menu>
        </div>
      )}
    </div>
  );
}

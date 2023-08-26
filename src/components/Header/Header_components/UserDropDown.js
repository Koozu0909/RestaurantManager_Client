import React, { useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MyUserContext } from "../../Layout";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function UserDropDown() {
  let navigate = useNavigate();

  const [user, dispatch] = useContext(MyUserContext);
  const [cookies, setCookie, removeCookie] = useCookies(["token", "user"]);

  const logout = () => {
    removeCookie("token", { path: "/" });
    removeCookie("user", { path: "/" });
    dispatch({
        "type": "logout"
    })
    navigate("/login");
}

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
   
    >
      <Menu.Items static className="absolute right-7 mt-2 w-36 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className=" flex flex-wrap ">
          
            <Menu.Item className="hover:bg-gray-400 w-full h-full" >
              <div
                className={`group flex w-2/6 items-center px-2 py-2 text-sm cursor-pointer `}
              >
               Thông tin cá nhân
              </div>
            </Menu.Item>
            <Menu.Item className="hover:bg-gray-400 w-full h-full" >
              <div
                className={`group flex w-2/6 items-center px-2 py-2 text-sm cursor-pointer `}
              >
               Lịch sử giao dịch
              </div>
            </Menu.Item>
            <Menu.Item className="hover:bg-gray-400 w-full h-full" >
              <div
                className={`group flex w-2/6 items-center px-2 py-2 text-sm cursor-pointer `}
                onClick={logout}
              >
                Đăng xuất
              </div>
            </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
   
  );
}

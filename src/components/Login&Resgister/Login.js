import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="w-full h-4/6 bg-common-bg">
      <div className="w-3/5 h-5/6 m-auto flex justify-center items-center">
        <div className="w-3/6 h-5/6 bg-white p-6 shadow-2xl  shadow-black-500/40">
          <h3 className="text-2xl font-bold">Đăng nhập</h3>
          <div className="flex flex-col mt-8">
            <div className="flex h-full rounded border-2  focus-within:border-black">
              <div className="w-10 flex items-center justify-center">
                <FaEnvelope />
              </div>
              <input
                className="p-2 w-full focus:outline-none"
                type="text"
                placeholder="Tên đăng nhập"
              />
            </div>
            <div className="flex h-full rounded border-2  focus-within:border-black mt-2">
              <div className="w-10 flex items-center justify-center">
                <FaLock />
              </div>
              <input
                className="p-2 w-full focus:outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
              />
              <div
                className="w-10 flex items-center justify-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="w-full text-right cursor-pointer mt-2 text-blue-500 hover:text-blue-800">
            {" "}
            <Link to="/register">Quên mật khẩu?</Link>
          </div>
          <button className="w-full bg-blue-400 p-1 text-base text-white rounded mt-2">
            ĐĂNG NHẬP
          </button>
          <div className="w-full text-left cursor-pointer mt-2 text-blue-500 hover:text-blue-800">
            {" "}
            <Link to="/register">Bạn chưa có tài khoản?</Link>
          </div>
          <div className="mt-14 text-base">
            Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{" "}
            <Link to="#" className="text-blue-500 underline">
              Chính sách quy định của ....
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

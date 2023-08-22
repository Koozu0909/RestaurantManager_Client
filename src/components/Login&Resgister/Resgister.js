import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Resgister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast.warning("Mật khẩu không trùng khớp");
      return;
    }
    toast.success("Đăng ký thành công");
  };

  return (
    <div className="w-full h-4/6 bg-common-bg">
      <div className="w-3/5 h-5/6 m-auto flex justify-center items-center">
        {/* Container */}
        <div className="w-3/6 h-5/6 bg-white p-6 shadow-2xl  shadow-black-500/40">
          {/* Dangky */}
          <h3 className="text-2xl font-bold">Đăng ký</h3>
          {/* Dangky */}
          <div className=" mt-8">
            {/* Tên đăng nhập */}
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
            {/* Tên đăng nhập */}
            {/* Mật khẩu" */}
            <div className="flex h-full rounded border-2  focus-within:border-black mt-2">
              <div className="w-10 flex items-center justify-center">
                <FaLock />
              </div>
              <input
                className="p-2 w-full focus:outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                value={password}
                onChange={handlePasswordChange}
              />
              <div
                className="w-10 flex items-center justify-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            {/* Mật khẩu" */}
            {/* Xác nhận mật khẩu */}
            <div className="flex h-full rounded border-2  focus-within:border-black mt-2">
              <div className="w-10 flex items-center justify-center">
                <FaLock />
              </div>
              <input
                className="p-2 w-full focus:outline-none"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Xác nhận mật khẩu"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <div
                className="w-10 flex items-center justify-center cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            {/* Xác nhận mật khẩu */}
          </div>
          {/* Button */}
          <button
            className="w-full bg-blue-400 p-1 text-base text-white rounded mt-2"
            onClick={handleRegister}
          >
            ĐĂNG KÝ
          </button>
          {/* Button */}
          <div className="w-full text-left cursor-pointer mt-2 text-blue-500 hover:text-blue-800">
            {" "}
            <Link to="/login">Bạn đã có tài khoản?</Link>
          </div>
          <div className="mt-14 text-base">
            Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{" "}
            <Link to="#" className="text-blue-500 underline">
              Chính sách quy định của ....
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* Container */}
        <ToastContainer theme="colored"/>
      </div>
    </div>
  );
}

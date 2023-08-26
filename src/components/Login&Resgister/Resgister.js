import React, { useContext, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyUserContext } from "../Layout";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./Input";
import {
  name_validation,
  password_validation,
  confirm_password_validation,
} from "../utils/inputValidations";
import axios from "axios";

export default function Resgister() {
  let navigate = useNavigate();
  const methods = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [user, dispatch] = useContext(MyUserContext);

  const  onSubmit = methods.handleSubmit(async (data) => {
    const register = "http://localhost:8080/RestaurantManager/api/register";
    if (data.password !== data.confirmPassword) {
      toast.warning("Mật khẩu không trùng khớp");
      return;
    }else{
      try {
        const response = await axios.post(register, {
          username: data.username,
          password: data.password,
        });
        console.log(response.data);
        navigate("/login");
        toast.success("Đăng ký thành công");
      } catch (error) {
        toast.warning("UserName đã tồn tại");
        console.error("Error logging in:", error);
      }
      methods.reset();
    }
  });
 
  if (user !== null) return <Navigate to="/" />;
  return (
    <div className="w-full h-4/6 bg-common-bg">
      <div className="w-3/5 h-5/6 m-auto flex justify-center items-center">
        {/* Container */}
        <div className="w-3/6 h-5/6 bg-white p-6 shadow-2xl  shadow-black-500/40">
          {/* Dangky */}
          <h3 className="text-2xl font-bold">Đăng ký</h3>
          {/* Dangky */}
          <FormProvider {...methods} className="flex flex-col mt-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="container"
            >
              <div className="flex h-full rounded border-2  focus-within:border-black">
                <div className="w-10 flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <Input {...name_validation} />
              </div>
              <div className="flex h-full rounded border-2  focus-within:border-black mt-2">
                <div className="w-10 flex items-center justify-center">
                  <FaLock />
                </div>
                <Input {...password_validation} showPassword={showPassword} />
                <div
                  className="w-10 flex items-center justify-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <div className="flex h-full rounded border-2  focus-within:border-black mt-2">
                <div className="w-10 flex items-center justify-center">
                  <FaLock />
                </div>
                <Input {...confirm_password_validation} showConfirmPassword={showConfirmPassword} />
                <div
                  className="w-10 flex items-center justify-center cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </form>
            <button
              className="w-full bg-blue-400 p-1 text-base text-white rounded mt-2"
              onClick={onSubmit}
            >
              ĐĂNG KÝ
            </button>
          </FormProvider>
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

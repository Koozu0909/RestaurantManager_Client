import axios from "axios";
import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MyUserContext } from "../Layout";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./Input";
import {
  name_validation,
  password_validation,
} from "../utils/inputValidations";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  let navigate = useNavigate();
  const methods = useForm();
  const [cookies, setCookie] = useCookies(["token", "user"]);
  const [user, dispatch] = useContext(MyUserContext);

  const [showPassword, setShowPassword] = useState(false);

  const  onSubmit = methods.handleSubmit(async (data) => {
    const loginUrl = "http://localhost:8080/RestaurantManager/api/login";
    const currentUserUrl =
      "http://localhost:8080/RestaurantManager/api/current-user";

    try {
      const response = await axios.post(loginUrl, {
        username: data.username,
        password: data.password,
      });
      console.log(response.error);
     

      setCookie("token", response.data, { path: "/" });

      if (response.data !== " ") {
        const userResponse = await axios.post(currentUserUrl, {
          token: response.data,
        });
        console.log(userResponse.data);
        setCookie("user", userResponse.data, { path: "/" });

        dispatch({
          type: "login",
          payload: userResponse,
        });
        toast.success("Đăng nhập thành công");
        navigate("/");
      }
    } catch (error) {
      toast.warning("Tài khoản hoặc mật khẩu không đúng");
      console.error("Error logging in:", error);
    }
    methods.reset();
  });
  if (user !== null) return <Navigate to="/" />;
  return (
    <div className="w-full h-4/6 bg-common-bg">
      <div className="w-3/5 h-5/6 m-auto flex justify-center items-center">
        <div className="w-3/6 h-5/6 bg-white p-6 shadow-2xl  shadow-black-500/40">
          <h3 className="text-2xl font-bold">Đăng nhập</h3>
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
            </form>

            <div className="w-full text-right cursor-pointer mt-2 text-blue-500 hover:text-blue-800">
              {" "}
              <Link to="/register">Quên mật khẩu?</Link>
            </div>
            <button
              className="w-full bg-blue-400 p-1 text-base text-white rounded mt-2"
              onClick={onSubmit}
            >
              ĐĂNG NHẬP
            </button>
          </FormProvider>

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
      <ToastContainer />
    </div>
  );
}

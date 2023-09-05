  import React, { useContext, useRef, useState } from "react";
  import { MyUserContext } from "../../Layout";
  import { useForm } from "react-hook-form";
  import axios from "axios";

  export default function UserDetailInfo() {
    const [user] = useContext(MyUserContext);
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleButtonClick = () => {
      fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        const newFile = event.target.files[0];
        setSelectedFile(URL.createObjectURL(newFile)); // Đặt hình ảnh được chọn là URL của tệp ảnh mới
      } else {
        setSelectedFile(user.imageURL); // Sử dụng imageURL của user nếu không có tệp nào được chọn
      }
    };

    const { register, handleSubmit ,reset} = useForm({
      shouldUseNativeValidation: true,
    });

    const onSubmit = async (data) => {
      const updateUrl = "http://localhost:8080/RestaurantManager/api/update-info-user";
  
      const formData = new FormData();
  
      for (const key in data) {
          formData.append(key, data[key]);
      }
  
      if (fileInputRef.current.files[0]) {
          formData.append('file', fileInputRef.current.files[0]);
      }
      formData.append("id", user.id)
      console.log(formData.data)
      try {
          const response = await axios.post(updateUrl, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
  
          console.log(response.data);
  
          // setCookie("user");
      } catch (error) {
          console.error("Error logging in:", error);
      }
  
      reset();
  }
  
    return (
      <div className="w-5/6 h-auto bg-white">
        <div className="w-5/6 h-auto  m-auto ">
          <div className="h-11 w-full  flex  items-center border-b-2 border-gray-300 text-xl">
            Hồ sơ cá nhân
          </div>
          <div className="h-96 w-full  flex  items-center  border-b-2  text-base flex">
            <div className="w-3/5 h-full ">
              <form
                className="mt-2"
                action=""
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
              >
                <div className="flex">
                  <label className="mx-3 text-right w-2/6" htmlFor="username">
                    Tên đăng nhập
                  </label>
                  <input
                    className="bg-none w-2/6"
                    disabled
                    type="text"
                    id="username"
                    name="username"
                    placeholder={user.username}
                  ></input>
                </div>
                <div className="flex mt-3">
                  <label className="mx-3 text-right w-2/6" htmlFor="lastName">
                    Tên Đệm
                  </label>
                  <input
                    className="outline-none border-2 w-3/6"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={user.lastName}
                    {...register("lastName")}
                  ></input>
                </div>
                <div className="flex mt-3">
                  <label className="mx-3 text-right w-2/6" htmlFor="firstName">
                    Tên
                  </label>
                  <input
                    className="outline-none border-2 w-3/6"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={user.firstName}
                    {...register("firstName")}
                  ></input>
                </div>
                <div className="flex mt-3">
                  <label className="mx-3 text-right w-2/6" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="outline-none border-2 w-3/6"
                    type="email"
                    id="email"
                    name="email"
                    placeholder={user.email}
                    {...register("email")}
                  ></input>
                </div>
                <div className="flex mt-3">
                  <label className="mx-3 text-right w-2/6" htmlFor="phone">
                    Số điện thoại
                  </label>
                  <input
                    className="outline-none border-2 w-3/6"
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder={user.phone}
                    {...register("phone")}
                  ></input>
                </div>
                <div className="">
                  <button type="submit" className="px-2 py-1 bg-red-500 mt-2 ">
                    Lưu
                  </button>
                </div>
              </form>
            </div>
            <div className="w-2/5 h-full flex items-start justify-center">
              <div className="w-7/12 h-3/5 ">
                <div className="w-full h-4/6  flex items-center justify-center">
                  <img
                    className="w-3/6 h-4/6 rounded-full object-cover"
                      src={selectedFile || user.imageURL}
                    alt=""
                  />
                </div>
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept=".jpg,.jpeg,.png"  
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <button onClick={handleButtonClick} className="px-3 py-2 border border-gray-500">Chọn Ảnh</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

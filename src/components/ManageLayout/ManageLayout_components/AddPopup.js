import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { Fragment, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


export default function AddPopup({
  isOpen,
  setIsOpen,
  setFoodItems,
  parentCate,
  categories,
  restaurant,
  foodItems,
}) {
  const fileInputRef = useRef(null); 
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedParentCate, setSelectedParentCate] = useState(2);

  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });
  const filteredCategories = categories.filter(
    (category) => category.parentCateId === parseInt(selectedParentCate)
  );
  if (!isOpen) {
    return null; 
  }
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const newFile = event.target.files[0];
      setSelectedFile(URL.createObjectURL(newFile));
    } else {
      setSelectedFile(null);
    }
  };

  const onSubmit = async (data) => {
    const createFood = "http://localhost:8080/RestaurantManager/api/fooditems";
    data["foodType"] = parseInt(data["foodType"]) === 2 ? "food" : "drink";
    console.log(data["foodType"])
  
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("address", restaurant.address);
    formData.append("district", restaurant.district);
    formData.append("locationFood",restaurant.cityProvince === "Hồ Chí Minh" ? "ho-chi-minh" : "ha-noi");
    formData.append("restaurantId", restaurant.id);
    formData.append("active", true);
  
    if (fileInputRef.current.files[0]) {
      formData.append("file", fileInputRef.current.files[0]);
    } else {
      toast.warning("Vui lòng thêm ảnh");
      return;
    }
  
    try {
      const response = await axios.post(createFood, formData, {
        headers: {
            'Content-Type': 'multipart/form-data; charset=utf-8'
        }
    });
    setFoodItems([...foodItems, response.data]);
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
    }
    setIsOpen(false);
    reset();
  };

  
  

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={(e) => {
          setSelectedFile(null);
          setIsOpen(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Thêm mới
                </Dialog.Title>

                <div className="h-96 w-full  items-center  border-b-2  text-base flex">
                  <div className="w-3/5 h-full ">
                    <form
                      className="mt-2"
                      action=""
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                      autoComplete="off"
                    >
                      <div className="flex">
                        <label
                          className="mr-3 text-right w-1/6"
                          htmlFor="username"
                        >
                          Tên
                        </label>
                        <input
                          className="outline-none border-2 w-4/6"
                          type="text"
                          id="username"
                          name="username"
                          {...register("name", {
                            required: true,
                            maxLength: 20,
                          })}
                        ></input>
                      </div>
                      <div className="flex mt-3">
                        <label
                          className="mr-3 text-right w-1/6"
                          htmlFor="description"
                        >
                          Miêu tả
                        </label>
                        <textarea
                          className="outline-none border-2 w-4/6"
                          id="description"
                          name="description"
                          {...register("description")}
                          required
                        />
                      </div>

                      <div className="flex mt-3">
                        <label
                          className="mr-3 text-right w-1/6"
                          htmlFor="phone"
                        >
                          Giá
                        </label>
                        <input
                          className="outline-none border-2 w-4/6"
                          type="number"
                          id="phone"
                          name="phone"
                          {...register("price", { min: 0 })}
                          required
                        ></input>
                      </div>
                      <div className="flex mt-3">
                        <label
                          className="mr-3 text-right w-1/6"
                          htmlFor="preparationTime"
                        >
                          T/g chuẩn bị
                        </label>
                        <input
                          className="outline-none border-2 w-4/6"
                          id="preparationTime"
                          type="number"
                          name="preparationTime"
                          {...register("preparationTime", { min: 5, max: 60 })}
                          required
                        />
                      </div>
                      <div className="flex mt-3">
                        <label
                          className="mr-3 text-right w-1/6"
                          htmlFor="parentCate"
                        >
                          Danh mục cha
                        </label>
                        <select
                          className="outline-none border-2 w-1/6"
                          id="foodType"
                          name="foodType"
                          {...register("foodType")}
                          required
                          onChange={(event) =>
                            setSelectedParentCate(event.target.value)
                          }
                        >
                          {parentCate.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                        <label
                          className="mr-3 text-right w-1/6"
                          htmlFor="categoryId"
                        >
                          Danh mục con
                        </label>
                        <select
                          className="outline-none border-2 w-1/6"
                          id="categoryId"
                          name="categoryId"
                          {...register("categoryId")}
                          required
                        >
                          {filteredCategories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    

                      <div className="">
                        <button
                          type="submit"
                          className="px-2 py-1 bg-red-500 mt-2 "
                       
                        >
                          Thêm mới
                        </button>
                        {/* <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={(e) => {
                            setIsOpen(false);
                          }}
                        >
                          Got it, thanks!
                        </button> */}
                      </div>
                    </form>
                  </div>
                  <div className="w-2/5 h-full flex items-start justify-center">
                    <div className="w-7/12 h-3/5 ">
                      <div className="w-full h-4/6  flex items-center justify-center">
                        <img
                          className="w-full h-full  object-cover"
                          src={selectedFile || null}
                          alt=""
                        />
                      </div>
                      <div className="text-center mt-4">
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept=".jpg,.jpeg,.png"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <button
                          onClick={handleButtonClick}
                          className="px-3 py-2 border border-gray-500 "
                        >
                          Chọn Ảnh
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}


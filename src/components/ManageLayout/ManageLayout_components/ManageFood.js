import React, { Fragment, useContext, useEffect, useState } from "react";
import TableViewData from "./TableViewData";
import axios from "axios";
import ManageLayoutContext from "../ManageLayoutContext";
import EditPopup from "./EditPopup";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";
import AddPopup from "./AddPopup";
import { Dialog, Transition } from "@headlessui/react";

export default function ManageFood() {
  const [foodItems, setFoodItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDeleted, setIsOpenDeleted] = useState(false);
  const { restaurant } = useContext(ManageLayoutContext);

  const openEditPopup = (foodItemId) => {
    setSelectedFoodItem(foodItems.find((item) => item.id === foodItemId));
    setIsOpenEdit(true);
  };

  useEffect(() => {
    if (!restaurant || !restaurant.id) return;
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/RestaurantManager/api/fooditems/restaurant/${restaurant.id}`
        );
        setFoodItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [restaurant]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/RestaurantManager/api/categories`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  const openDeletedPopup = (id) => {
    setSelectedFoodItem(foodItems.find((item) => item.id === id));
    setIsOpenDeleted(true);
  };
  const parentCate = categories.filter((item) => item.parentCateId === null);
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Tên",
      accessorKey: "name",
      footer: "Tên",
    },
    { 
      header: "Giá",
      accessorKey: "price",
      footer: "Giá",
      cell: ({ row }) => `${row.getValue("price").toLocaleString("vi-VN")} VNĐ`,
    },
    {
      header: "Ảnh",
      accessorKey: "imageURL",
      footer: "Ảnh",
      cell: ({ row }) => (
        <img
          src={row.getValue("imageURL")}
          alt="Food Item"
          className="w-32 h-24"
        />
      ),
    },
    {
      header: "Chỉnh sửa",
      accessorKey: "",
      cell: ({ row }) => (
        <div>
          <button
            onClick={() => openEditPopup(row.getValue("id"))}
            className="px-1 py-1 bg-blue-300 hover:bg-blue-600 ml-1"
          >
            <FaRegPenToSquare />
          </button>
          <button
            onClick={() => openDeletedPopup(row.getValue("id"))}
            className="px-1 py-1 bg-red-300 hover:bg-red-600 ml-1"
          >
            <FaTrashCan />
          </button>
        </div>
      ),
    },
    {
      header: "Trạng thái",
      accessorKey: "active",
      cell: ({ row }) =>
        row.getValue("active") ? (
          <div className="bg-green-500 text-center"> Enable</div>
        ) : (
          <div className="bg-red-500 text-center"> Disable</div>
        ),
    },
  ];

  return (
    <div className="w-4/5 h-auto bg-white">
      <div className="w-11/12 h-auto  m-auto text-right">
        <button
          className="px-5 bg-blue-300 hover:bg-blue-600"
          onClick={() => {
            setIsOpenAdd(true);
          }}
        >
          Thêm mới
        </button>
      </div>
      <TableViewData mData={foodItems} columns={columns} />
      {isOpenEdit !== false ? (
        <EditPopup
          isOpen={isOpenEdit}
          setIsOpen={setIsOpenEdit}
          selectedFoodItem={selectedFoodItem}
          setFoodItems={setFoodItems}
          parentCate={parentCate}
          categories={categories}
          restaurant={restaurant}
          foodItems={foodItems}
        />
      ) : null}
      {isOpenAdd !== false ? (
        <AddPopup
          isOpen={isOpenAdd}
          setIsOpen={setIsOpenAdd}
          setFoodItems={setFoodItems}
          parentCate={parentCate}
          categories={categories}
          restaurant={restaurant}
          foodItems={foodItems}
        />
      ) : null}

      {isOpenDeleted !== false ? (
        <DeletedPopup
          isOpen={isOpenDeleted}
          setIsOpen={setIsOpenDeleted}
          selectedFoodItem={selectedFoodItem}
          foodItems={foodItems}
          setFoodItems={setFoodItems}
        />
      ) : null}
    </div>
  );
}

function DeletedPopup({
  isOpen,
  setIsOpen,
  selectedFoodItem,
  foodItems,
  setFoodItems,
}) {
  const onDeleted = async (id) => {
    const deteleUrl = `http://localhost:8080/RestaurantManager/api/fooditems/${id}`;

    try {
      await axios.delete(deteleUrl);
      setFoodItems((prevFoodItems) =>
      prevFoodItems.filter((item) => item.id !== id)
    );
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
    }
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={(e) => {
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
              <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Xác nhận xoá
                </Dialog.Title>
                <div className="flex w-full gap-10 mt-5">
                  <button
                    onClick={(e) => {
                      onDeleted(selectedFoodItem.id);
                    }}
                    className="bg-red-300 hover:bg-red-500 px-2 py-1"
                  >
                    Xác nhận
                  </button>
                  <button
                    onClick={(e) => {
                      setIsOpen(false);
                    }}
                    className="bg-green-300  hover:bg-green-500 px-2 py-1"
                  >
                    Huỷ
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

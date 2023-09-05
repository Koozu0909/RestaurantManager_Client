import React, { useState } from "react";
import {
  FaChartColumn,
  FaRegBell,
  FaRegPenToSquare,
  FaStore,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ManageLeft() {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="w-1/5 h-auto ">
      <div className="w-full h-96  flex items-start flex-col">
        <div className="w-full h-auto text-left">
          <Link
            to={"/owner/statistics"}
            className="cursor-pointer flex items-center mb-3"
          >
            {" "}
            <span className="mr-4 text-red-500 text-base">
              {" "}
              <FaChartColumn />
            </span>
            Thống kê
          </Link>
        </div>
        <div className="w-full h-auto text-left">
          <div
            className="cursor-pointer flex items-center mb-3"
            onClick={() => setShowInfo(!showInfo)}
          >
            {" "}
            <span className="mr-4 text-red-500 text-base">
              {" "}
              <FaStore />
            </span>
            Quản lý cửa hàng
          </div>
          {showInfo && (
            <div className="flex flex-col ml-9">
              <Link className="mb-3" to={"/owner/manage-food"}>
                Quản lý đồ ăn
              </Link>
              <Link className="mb-3" to={"/owner/manage-food"}>
                Quản lý thức uống
              </Link>
              <Link className="mb-3">thong tin 3</Link>
            </div>
          )}
        </div>
        <div className="w-full h-auto text-left">
          <Link
            to={"/owner/restaurant-info"}
            className="cursor-pointer flex items-center mb-3"
          >
            {" "}
            <span className="mr-4 text-red-500 text-base">
              {" "}
              <FaRegPenToSquare />
            </span>
            Thông tin cửa hàng
          </Link>
        </div>
        <div className="w-full h-auto text-left">
          <Link
            to={"/user/notification"}
            className="cursor-pointer flex items-center mb-3"
          >
            {" "}
            <span className="mr-4 text-red-500 text-base">
              {" "}
              <FaRegBell />
            </span>
            Thông Báo
          </Link>
        </div>
      </div>
    </div>
  );
}

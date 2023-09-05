import React from "react";
import {
  FaAnglesRight,
  FaCircle,
  FaDollarSign,
  FaMoneyBillWave,
  FaRegClock,
  FaThumbsUp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function FoodMainDetailRight({ encodedId, foodDetail }) {
  var isOpen = true;
  return (
    <div className="w-3/6 h-full bg-blue-200 p-5">
      <div className="w-full text-blue-500">
        <ol className="flex items-center text-sm">
          <li className="flex items-center">
            {" "}
            <Link to="/">Home</Link>
            <FaAnglesRight className="text-xs ml-1 mr-1" />
          </li>
          <li>
            <Link to={`/food/${encodedId}`}>{foodDetail.name}</Link>
          </li>
        </ol>
      </div>
      <div className="w-1/6 bg-red-600 flex justify-start items-center text-sm text-white mt-1 py-1 cursor-pointer">
        <FaThumbsUp className="mr-1 ml-2 text-xs " />
        Yêu thích
      </div>
      <div className="w-full flex items-center text-2xl font-bold">
        {foodDetail.name}
      </div>
      <div className="text-yellow-500 h-auto flex items-start justify-start">
        <StarRating rate={4.5} />
        <span className=" bg-yellow-500 text-white ml-2 rounded text-sm px-2 ">
          12+
        </span>
      </div>
      <div className="w-full h-auto  flex items-start mt-2">
        {isOpen ? (
          <div className="flex items-center text-green-500">
            <span className="text-xs  mr-2">
              <FaCircle />
            </span>
            Mở cửa
            <div className="flex items-center ml-3 text-gray-500 text-base ">
              <FaRegClock className="mr-2 mb-1" /> 8:00 - 21:00
            </div>
          </div>
        ) : (
          <div className="flex items-center text-gray-500">
            <span className="text-xs  mr-2">
              <FaCircle />
            </span>
            Đóng cửa
          </div>
        )}
      </div>
      <div className="w-full h-auto  flex items-start mt-2">
        <div className="flex items-center text-gray-500">
          <span className="text-xs  mr-2">
            <FaMoneyBillWave />
          </span>
          38.000 VNĐ
        </div>
      </div>
    </div>
  );
}

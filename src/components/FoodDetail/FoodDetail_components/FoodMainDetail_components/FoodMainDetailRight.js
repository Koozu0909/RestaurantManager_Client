import React from "react";
import { FaAnglesRight, FaThumbsUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function FoodMainDetailRight({ encodedId, foodDetail }) {
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
      <div className="text-yellow-500 ">
        <StarRating  rate={4.5}/> 
      </div>
    </div>
  );
}

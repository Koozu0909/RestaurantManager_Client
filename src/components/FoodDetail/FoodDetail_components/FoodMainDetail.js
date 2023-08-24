import React from "react";
import FoodMainDetailRight from "./FoodMainDetail_components/FoodMainDetailRight";

export default function FoodMainDetail({ foodDetail, encodedId }) {
  return (
    <div className="w-full h-96  bg-white flex items-center">
      <div className="w-3/5 h-5/6  m-auto bg-red-900 flex">
        <div className="w-3/6 h-full bg-blue-500 flex items-center justify-center">
          <img className="w-5/6 h-full" src={foodDetail.imageURL} alt="" />
        </div>
        <FoodMainDetailRight encodedId={encodedId} foodDetail={foodDetail} />
      </div>
    </div>
  );
}

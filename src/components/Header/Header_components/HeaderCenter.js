import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import PopupSearch from "./PopupSearch";
import { useLocation, useNavigate } from "react-router-dom";

export default function HeaderCenter() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocationPath = location.pathname;
  const values = currentLocationPath.split("/");
  const foodLocation = values[1];
  const foodhash = values[3];

  const handleDropdownChange = (selectedOption) => {
    const targetLocation = selectedOption.value === "TP.HCM" ? "ho-chi-minh" : "ha-noi";
    navigate(`/${targetLocation}/food`);
  };

  const handleCategoryClick = (category) => {
    let newPath;

    if (currentLocationPath === "/") {
      newPath = `/ho-chi-minh/${category}`;
    } else if (foodhash === " ") {
      newPath = `${currentLocationPath.replace(/\/(food|drink)+$/, "")}/${category}`;
    } else {
      newPath = `/${foodLocation}/${category}`;
    }

    navigate(newPath);
  };
  const isFoodSelected = currentLocationPath.includes("/food");
  const isDrinkSelected = currentLocationPath.includes("/drink");

  return (
    <div className="w-3/5 h-full flex">
      <div className="w-1/5 h-full flex items-center justify-center">
        <Dropdown
          menuClassName="rounded"
          controlClassName="rounded cursor-pointer"
          className="w-3/5 h-3/5"
          options={["TP.HCM", "Ha Noi"]}
          value={values[1] === "ha-noi" ? "Ha Noi" : "TP.HCM"}
          placeholder="TP.HCM"
          onChange={handleDropdownChange}
        />
      </div>
      <div className="w-2/5 h-full flex">
        <div className="w-1/6 h-full" onClick={() => handleCategoryClick("food")}>
          <div
            className={`w-full h-full flex items-center justify-center cursor-pointer ${
              isFoodSelected ? "text-red-500 font-bold border-b-2 border-red-600" : "text-black"
            } hover:text-red-500`}
          >
            Đồ ăn
          </div>
        </div>
        <div className="w-1/6 h-full" onClick={() => handleCategoryClick("drink")}>
          <div
            className={`w-full h-full flex items-center justify-center cursor-pointer ${
              isDrinkSelected ? "text-red-500 font-bold border-b-2 border-red-600" : "text-black"
            } hover:text-red-500`}
          >
            Đồ uống
          </div>
        </div>
      </div>
      <div className="w-2/5 h-full flex items-center justify-center">
        <div className="w-5/6 h-2/5 flex items-center justify-end">
          <PopupSearch />
        </div>
      </div>
    </div>
  );
}

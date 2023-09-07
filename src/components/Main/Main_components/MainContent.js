import React, { useState, useEffect } from "react";
import axios from "axios"; 
import MainItem from "./MainContent_components/MainItem";
import { useLocation } from "react-router-dom";

export default function MainContent() {
  const location = useLocation();
  const currentLocationPath = location.pathname;
  const values = currentLocationPath.split("/");

  const foodType = values[2];
  const foodLocation =  values[1];


  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/RestaurantManager/api/fooditems/${foodType}/${foodLocation}`
        );
        setFoodItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [foodType, foodLocation]);

  return (
    <div className="w-full h-auto  flex flex-wrap justify-around gap-3 pt-5 border-t-2 border-black border-opacity-30">
      {foodItems.map((foodItem) => (
        <MainItem
          foodItem={foodItem}
          foodLocation={foodLocation}
          foodType={foodType}
        />
      ))}
    </div>
  );
}

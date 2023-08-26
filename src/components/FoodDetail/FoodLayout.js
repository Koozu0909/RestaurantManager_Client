import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";
import Hashids from "hashids";
import FoodMainDetail from "./FoodDetail_components/FoodMainDetail";

const salt = "your_secret_salt";
const hashids = new Hashids(salt);

export default function FoodLayout() {
  const { encodedId } = useParams();
  const decodedIds = hashids.decode(encodedId);
  const id = decodedIds[0];
  const [foodDetail, setFoodDetail] = useState(null);

  useEffect(() => {
    async function fetchFoodDetail() {
      try {
        const response = await axios.get(
          `http://localhost:8080/RestaurantManager/api/fooditems/${id}`
        );
        const data = response.data;
        setFoodDetail(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching food detail:", error);
      }
    }

    fetchFoodDetail();
  }, [id]);

  if (!foodDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full bg-common-bg">
      <FoodMainDetail foodDetail={foodDetail} encodedId={encodedId} />
    </div>
  );
}

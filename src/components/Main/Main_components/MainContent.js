import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import thư viện Axios
import MainItem from './MainContent_components/MainItem';

export default function MainContent() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/RestaurantManager/api/fooditems');
        setFoodItems(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='w-full h-auto  flex flex-wrap justify-around gap-3 pt-5 border-t-2 border-black border-opacity-30'>
         {foodItems.map((foodItem) => (
          <MainItem foodItem={foodItem} />
      ))}
   
    </div>
  );
}

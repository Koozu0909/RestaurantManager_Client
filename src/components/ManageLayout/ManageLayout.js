import React, { useContext, useEffect, useState } from 'react';
import ManageLeft from './ManageLayout_components/ManageLeft';
import { Outlet } from 'react-router-dom';
import ManageLayoutContext from './ManageLayoutContext';
import axios from 'axios';
import { MyUserContext } from '../Layout';

export default function ManageLayout() {
  const [restaurant, setRestaurant] = useState(null);
  const [user] = useContext(MyUserContext);

  useEffect(() => {
    if (user && user.id) {
      async function fetchData() {
        try {
          const response = await axios.get(
            `http://localhost:8080/RestaurantManager/api/restaurant/user/${user.id}`
          );
          setRestaurant(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [user]);  

  return (
    <div className='w-full h-auto bg-common-bg pt-3'>
        <div className='w-3/5 h-auto m-auto flex'>
            <ManageLeft />
            <ManageLayoutContext.Provider value={{ restaurant }}> 
              <Outlet />
            </ManageLayoutContext.Provider>
        </div>
    </div>
  );
}

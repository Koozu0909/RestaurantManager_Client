import Hashids from 'hashids';
import React from 'react';
import { Link } from 'react-router-dom';

const salt = 'your_secret_salt';
const hashids = new Hashids(salt);

export default function MainItem({ foodItem,foodLocation,foodType }) {
  const encodedId = hashids.encode(foodItem.id);

  return (
    <Link to={`/${foodLocation}/${foodType}/${encodedId}`} > 
      <div className='w-52 h-56 bg-blue-50 rounded-md overflow-hidden cursor-pointer shadow hover:shadow-2xl' key={foodItem.Id}>
        <div className='w-full h-3/5'>
          <img className='w-full h-full' src={foodItem.imageURL} alt="" />
        </div>
        <div className='w-full h-2/5 text-left p-2'>
            <div className='font-semibold'>{foodItem.name}</div>
            <div className='font-normal'>Giá: <span className='text-red-600 font-semibold'>{foodItem.price} $</span> </div>
        </div>
      </div>
    </Link>
  );
}

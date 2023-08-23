import React from 'react';
import { FaBell, FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function HeaderRight() {
  return (
    <div className='w-1/5 h-full  flex items-center justify-end '>
       <Link to="/cart" className='w-1/8 h-3/6  flex items-center justify-center text-lg' >
        <FaCartShopping/>
      </Link>
      <div className='w-1/6 h-3/6  flex items-center justify-center text-lg '>
        <FaBell className='cursor-pointer'/>
      </div>
      <Link to="/login" className='w-2/6 h-3/6 rounded border-2 border-red-500 text-red-600 mr-7'> 
        <button  className='w-full h-full'>Đăng nhập</button>
      </Link>
    </div>
  );
}

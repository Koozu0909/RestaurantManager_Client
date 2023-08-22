import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderRight() {
  return (
    <div className='w-1/5 h-full  flex items-center justify-end'>
      <Link to="/login" className='w-2/6 h-3/6 rounded border-2 border-red-500 text-red-600 mr-7'> 
        <button  className='w-full h-full'>Đăng nhập</button>
      </Link>
    </div>
  );
}

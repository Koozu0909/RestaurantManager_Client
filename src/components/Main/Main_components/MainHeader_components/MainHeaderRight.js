import React from 'react'
import Dropdown from 'react-dropdown';

export default function MainHeaderRight() {
    const options = [
        `Đúng nhất`, 'Bán chạy', 'Đánh giá','Giao nhanh'
    ];
    const defaultOption = options[0];
  return (
    <div className='w-2/6 h-full flex justify-end items-center'>
        <div></div>
        <div className='w-3/6 h-5/5 '>
        <Dropdown menuClassName='rounded' controlClassName='rounded cursor-pointer' className='w-full h-full ' options={options} value={defaultOption} placeholder="Đúng nhất" />
        </div>
    </div>
  )
}

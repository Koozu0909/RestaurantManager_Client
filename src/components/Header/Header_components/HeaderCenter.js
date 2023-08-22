import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import PopupSreach from './PopupSreach';

export default function HeaderCenter() {
    const options = [
        `TP.HCM`, 'Ha Noi', 'Hue'
    ];
    const defaultOption = options[0];
    return (
        <div className='w-3/5 h-full flex'>
            <div className='w-1/5 h-full  flex items-center justify-center '>
                <Dropdown menuClassName='rounded ' controlClassName='rounded cursor-pointer' className='w-3/5 h-3/5 ' options={options} value={defaultOption} placeholder="TP.HCM" />
            </div>
            <div className='w-2/5 h-full  flex'>
                <div className='w-1/6 h-full flex items-center justify-center cursor-pointer text-black hover:text-red-500 '>Cate test</div>
                <div className='w-1/6 h-full flex items-center justify-center cursor-pointer text-black hover:text-red-500 '>Cate test</div>
                <div className='w-1/6 h-full flex items-center justify-center cursor-pointer text-black hover:text-red-500 '>Cate test</div>
                <div className='w-1/6 h-full flex items-center justify-center cursor-pointer text-black hover:text-red-500 '>Cate test</div>
                <div className='w-1/6 h-full flex items-center justify-center cursor-pointer text-black hover:text-red-500 '>Cate test</div>
                <div className='w-1/6 h-full flex items-center justify-center cursor-pointer text-black hover:text-red-500 '>Cate test</div>
            </div>
            <div className='w-2/5 h-full flex items-center justify-center'>
                <div className='w-5/6 h-2/5 flex items-center justify-end'>
                    <PopupSreach/>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ChangePass() {
  return (
    <div className='w-5/6 h-auto bg-orange-700'>
       <Outlet />
       Hello
    </div>
  )
}

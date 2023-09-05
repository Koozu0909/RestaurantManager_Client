import React from 'react'
import UserInfoLeft from './UserInfo_components/UserInfoLeft'
import { Outlet} from 'react-router-dom'

export default function UserInfo() {
  return (
    <div className='w-full h-auto bg-common-bg pt-3'>
        <div className='w-3/5 max-md:w-full h-auto  m-auto flex '>
            <UserInfoLeft/>
            <Outlet/>
        </div>
    </div>
  )
}

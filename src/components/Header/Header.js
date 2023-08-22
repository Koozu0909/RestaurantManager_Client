import React from 'react'
import HeaderLogo from './Header_components/HeaderLogo'
import HeaderCenter from './Header_components/HeaderCenter'
import HeaderRight from './Header_components/HeaderRight'

export default function Header() {
  return (
    <div className='w-full h-20  flex'>
        <HeaderLogo/>
        <HeaderCenter/>
        <HeaderRight/>
    </div>
  )
}

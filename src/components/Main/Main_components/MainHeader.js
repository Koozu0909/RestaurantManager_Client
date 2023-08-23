import React from 'react'
import MainHeaderLeft from './MainHeader_components/MainHeaderLeft'
import MainHeaderRight from './MainHeader_components/MainHeaderRight'

export default function MainHeader() {
  return (
    <div className='w-full h-12 flex justify-between'>
        <MainHeaderLeft/>
        <MainHeaderRight/>
    </div>
  )
}

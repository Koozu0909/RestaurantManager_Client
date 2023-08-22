import React from 'react';
import logoImage from './../../../images/shopeefoodvn.png'; // Điều chỉnh đường dẫn đến hình ảnh

export default function HeaderLogo() {
  return (
    <div className='w-1/5 h-full  flex items-center justify-center'>
      <div className='w-2/5 h-2/5'>
        <img className='w-full h-full' src={logoImage} alt="Shooppee Logo" />
      </div>
    </div>
  );
}

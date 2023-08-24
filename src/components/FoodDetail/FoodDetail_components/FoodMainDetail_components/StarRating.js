import React from 'react'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6';


export default function StarRating({ rate }) {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;
  
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i}  />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfStroke className='text-lg'  key={stars.length} />);
    }
    return <div className="star-rating flex text-base items-center">{stars}</div>;
}

import React from 'react';
import './PropertyCard.css';
import { IoHeartSharp } from "react-icons/io5";

const PropertyCard = ( {card} ) => {
  return (
    <div className='flexColStart r-card'>

        <IoHeartSharp size={24} color='white' />

        <img src={card.image} alt='home' />

        <span style={{color: 'orange', fontSize: '1.2rem', fontWeight: '700'}}>$<span style={{color: 'black', fontWeight: '700', fontSize: '1.2rem'}}>{card.price}</span></span>

        <span style={{color: '#000080', fontSize: '1.5rem', fontWeight: '700', width: '15rem'}}>{card.name}</span>

        <span className='secondoryText'>{card.detail}</span>

    </div>
  )
}

export default PropertyCard;
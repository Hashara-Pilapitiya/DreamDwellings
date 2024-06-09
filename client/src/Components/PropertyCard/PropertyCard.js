import React from 'react';
import './PropertyCard.css';
import { IoHeartSharp } from "react-icons/io5";
import {truncate} from 'lodash';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ( {card} ) => {

  const navigate = useNavigate();

  return (
    <div className='flexColStart r-card' onClick={() => navigate(`../properties/${card.id}`)}>

        <IoHeartSharp size={24} color='white' />

        <img src={card.image} alt='home' />

        <span style={{color: 'orange', fontSize: '1.2rem', fontWeight: '700'}}>$<span style={{color: 'black', fontWeight: '700', fontSize: '1.2rem'}}>{card.price}</span></span>

        <span style={{color: '#000080', fontSize: '1.5rem', fontWeight: '700', width: '15rem'}}>{truncate(card.title, {length: 18})}</span>

        <span className='secondoryText'>{truncate(card.description, {length: 120})}</span>

    </div>
  )
}

export default PropertyCard;
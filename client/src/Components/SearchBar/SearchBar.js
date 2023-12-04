import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className='flexCenter search-bar'>

    <span><FaLocationDot size={25} /></span>
    <input type='text' placeholder='Search country,city' />
    <button className='button'><span className='search'>Search</span></button>

    </div>
  )
}

export default SearchBar;
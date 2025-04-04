import React, { useEffect } from 'react';
import { GoNorthStar } from "react-icons/go";

import { FiSearch } from "react-icons/fi";
import { NavLink, useParams } from 'react-router-dom';
const Menu = () => {
  const{id}=useParams();
  return (
    <>
      <div className='w-[800px] flex flex-wrap items-center mt-15'>
        <div className='w-full flex justify-center items-center'>
           <h1 className='text-[14px] uppercase font-semibold text-gray-500'><GoNorthStar className='inline mx-2 -mt-1'/>menu<GoNorthStar className='inline mx-2 -mt-1'/></h1> 
        </div>
        <NavLink to={`/searchdishes/${id}`}>
        <div className='w-[800px] bg-gray-300 rounded-xl mt-3 flex'>
          <input 
          type='search'
          placeholder='search for dishes'
          className='capitalize text-right  w-[62%] p-3 '
          />
          
          <div className='w-[36%] text-right  items-center'>
          <FiSearch className='inline text-2xl mt-3 text-gray-500'/>
          </div>
        </div>
         </NavLink>
      </div>
     
    </>
  )
} 

export default Menu

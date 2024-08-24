import React from 'react'
import ItemList from './ItemList'
import { useState } from 'react'
const RestaurantCategory = (props) => {
  
  const [showItems,setShowItems] =useState(false);

  const handleClick=()=>{
    setShowItems(!showItems);
  }

 // console.log(props)
  const {title,itemCards} =props.data

  return (
    <div className='w-6/12 bg-gray-100 shadow-lg my-3 p-4 mx-auto' >
      
      <div className=' flex justify-between cursor-pointer ' onClick={handleClick} >
          <span className='font-bold text-lg'>{title} ({itemCards.length})</span>
          <span>⬇️</span>
      </div>
      {showItems && <ItemList items={itemCards} ></ItemList>}
    </div>
  )
}

export default RestaurantCategory;
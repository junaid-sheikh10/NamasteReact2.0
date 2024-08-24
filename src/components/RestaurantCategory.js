import React from 'react'
import ItemList from './ItemList'

const RestaurantCategory = (props) => {
 // console.log(props)
  const {title,itemCards} =props.data

  return (
    <div className='w-6/12 bg-gray-100 shadow-lg my-3 p-4 mx-auto' >
      {/* Header */}
      
      <div className=' flex justify-between '>
      <span className='font-bold text-lg'>{title} ({itemCards.length})</span>
      <span>⬇️</span>
      </div>

      {/*accordian  Body */}
      {/* {
        itemCards.map(items=><ItemList ></ItemList>)
      } */}
      <ItemList items={itemCards} ></ItemList>


      
    </div>
  )
}

export default RestaurantCategory;
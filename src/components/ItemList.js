import React from 'react'
import { CDN_URL } from '../utils/constant'

const ItemList = ({items}) => {
    //console.log(items)
  return (
    <div > 
            {items.map(item=>(
            <div key={item.card.info.id} className='flex justify-between text-left p-2 m-2 border-b-2'>
                <div className='py-2 w-9/12'>
                    <span className='font-bold text-md '>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                <p className='text-xs py-2' >{item.card.info.description}</p>
                </div>

                <div className='w-3/12 p-4 '>
                <div className='absolute'>
                <button className='p-2  w-16 mx-12 my-24 cursor-pointer text-green-700 bg-white font-bold rounded-md shadow-lg'>Add+</button>
                </div>
                <img className=' rounded-md' src={CDN_URL+item.card.info.imageId } alt="" />
                </div>
                
            </div>
            ))}
    </div>
  )
}

export default ItemList
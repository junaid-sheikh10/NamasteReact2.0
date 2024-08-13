import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
const {id}=useParams();

;

  return (
    <div>
        RestaurantMenu
        <h2>params is {id}</h2>


    </div>
  )
}

export default RestaurantMenu
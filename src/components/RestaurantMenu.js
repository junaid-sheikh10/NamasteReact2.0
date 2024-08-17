import React from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
const {id}=useParams();

const restDetails =useRestaurantMenu(id);
console.log(restDetails)

if(restDetails === null)return(<Shimmer></Shimmer>)


const {name, avgRating , cuisines, costForTwo} = restDetails.cards[2].card.card.info
const {itemCards} = restDetails.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  return   (
    <div>
        <h1>{name}</h1>
        <p>{costForTwo} | {avgRating}stars</p>
        <p>{cuisines.join(",")}</p>

        <h2>Menu</h2>
        {itemCards? itemCards.map(item=><li key={item.card.info.id} >{item.card.info.name}</li>): <p>No Menu Items</p> }

    </div>
  )
}

export default RestaurantMenu
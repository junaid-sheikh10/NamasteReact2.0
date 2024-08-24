import React from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
const {id}=useParams();

const restDetails =useRestaurantMenu(id);
//console.log(restDetails)

if(restDetails === null)return(<Shimmer></Shimmer>)
const {name, avgRating , cuisines, costForTwo} = restDetails.cards[2].card.card.info;
const {itemCards} = restDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//console.log(itemCards);

const categories=restDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item=>item.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//console.log(categories)
 
return   (
    <div className='text-center '>
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
         
        <p className='font-bold text-md '>
          {cuisines.join(",")} - {costForTwo}
        </p>
        {
          categories.map(category=><RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} ></RestaurantCategory>)
        }

        
    </div>
  )
}

export default RestaurantMenu
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { NETWORK_URL } from '../utils/constant';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
const {id}=useParams();

const [restDetails, setRestDetails]=useState(null)


useEffect(()=>{
    getData()
},[])

async function getData(){
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1876885&lng=79.07919190000001&restaurantId="+id);
    const json = await data.json();
    console.log(json.data)
    //const resDeets =json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.filter(item=>item.info.id===id)
    setRestDetails(json.data);
    //const menu= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1876885&lng=79.07919190000001&restaurantId=528951")
    //const menuJson=await menu.json();
    //console.log(menuJson)
   // console.log(restDetails)
} 

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
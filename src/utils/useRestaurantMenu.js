import React from 'react'
import { useEffect, useState } from 'react'

const useRestaurantMenu = (id) => {
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

  return restDetails
    
}

export default useRestaurantMenu
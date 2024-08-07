
import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { NETWORK_URL } from "../utils/constant";


const Body=()=>{

    //state variable
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    
    //Normal JS variable    
    const ListOfRestaurants=[];

    useEffect(()=>{
        console.log("useEffect running ")
        getRestaurants();
    },[])

    async function getRestaurants(){
        const data= await fetch(NETWORK_URL);
        const json= await data.json();
        console.log("getRestaurants func Running");
        console.log(json)
        setListOfRestaurant(json.data.cards);
    }

    return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" 
                onClick={()=>{
                    console.log("CLICKED")
                }}>
                    Top Rated Restaurants</button>

            </div>
            <div className='res-container'>
               {
                ListOfRestaurant.map((restaurant,index)=>{
                    return <RestaurantCard key={index}></RestaurantCard>
                })
               }
            </div>
        </div>

    )
};

export default Body;
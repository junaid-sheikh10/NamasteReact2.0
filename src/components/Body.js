
import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { NETWORK_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineCheck from "../utils/useOnlineCheck";

const Body=()=>{

    //state variable
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchTxt,setSearchTxt]=useState("");
    
    //Normal JS variable    

    useEffect(()=>{
        //console.log("useEffect running ")
        getRestaurants();
    },[])

    async function getRestaurants(){
        const data= await fetch(NETWORK_URL);
        const json= await data.json();
        console.log("getRestaurants func Running");
       // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
 
//     const isOnline = useOnlineCheck();
//   //  console.log("isOnline in Body="+isOnline)


//     if(isOnline===false){
//         return <h2>No Network Connection ! Please check your Internet connection</h2>
//     }

    
    return ListOfRestaurant.length===0 ? <Shimmer></Shimmer> : (
        <div className='body'>
            <div>
                <input type="text" value={searchTxt} onChange={(e)=>{
                    console.log(e.target.value)
                    setSearchTxt(e.target.value);
                }} />
                <button onClick={()=>{
                    console.log("search Text "+searchTxt);
                    const data = ListOfRestaurant.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase() ))
                    console.log(data);
                    setFilteredRestaurants(data)
                    setSearchTxt("")
                }} >search</button>
            </div>


            <div className='filter'>
                <button className="filter-btn" 
                onClick={()=>{
                    console.log("CLICKED")
                    const fRes=ListOfRestaurant.filter((rest)=>{if(rest.info.avgRating>4.4){return rest}})
                    console.log(fRes)
                    setFilteredRestaurants(fRes)


                }}>Top Rated Restaurants</button>
            </div>

            <div className='res-container'>
               
               { filteredRestaurants.length===0 ?<h1>No results Found</h1> : 
                filteredRestaurants.map((restaurant,index)=>{
                    return <Link to={"restaurant/"+restaurant.info.id}  key={restaurant.info.id} ><RestaurantCard  {...restaurant} ></RestaurantCard> </Link> 
                })
               }
            </div>
        </div>

    )
};

export default Body;
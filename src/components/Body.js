
import { useState,useEffect } from "react";
import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
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
  //  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        //console.log("useEffect running ")
        getRestaurants();
    },[])

    async function getRestaurants(){
        const data= await fetch(NETWORK_URL);
        const json= await data.json();
        console.log("getRestaurants func Running");
       // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
 
    console.log(filteredRestaurants)

    
    return ListOfRestaurant.length===0 ? <Shimmer></Shimmer> : (
        <div className=' mt-3'>

            <div className="flex gap-8   pl-12 py-2 ">
            <div>
                <input className="border border-black rounded-md " type="text" value={searchTxt} onChange={(e)=>{
                    console.log(e.target.value)
                    setSearchTxt(e.target.value);
                }} />

                <button className="bg-green-200 rounded-md mx-4 py-1 px-4" 
                onClick={()=>{
                    console.log("search Text "+searchTxt);
                    const data = ListOfRestaurant.filter(restaurant=>restaurant?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase() ))
                    console.log(data);
                    setFilteredRestaurants(data)
                    setSearchTxt("")
                }}
                 >
                    Search
                </button>
            </div>


            <div className=''>
                <button className="text-md px-4 py-1 bg-slate-200 rounded-md" 
                onClick={()=>{
                    console.log("CLICKED")
                    const fRes=ListOfRestaurant.filter((rest)=>{if(rest?.info?.avgRating>4.4){return rest}})
                    console.log(fRes)
                    setFilteredRestaurants(fRes)


                }}>Top Rated Restaurants</button>
            </div>
            </div>
          

            <div className='flex flex-wrap mx-2  justify-between'>
               
               { filteredRestaurants.length===0 ?<h1>No results Found</h1> : 
                filteredRestaurants.map((restaurant,index)=>{
                    return <Link to={"restaurant/"+restaurant.info.id}  key={restaurant.info.id} >
                        {/* {if restaurant is promoted add promoted label} */
                            restaurant?.promoted ? <RestaurantCardPromoted/> : <RestaurantCard  {...restaurant} ></RestaurantCard>
                        }
                        
                         </Link> 
                })
               }
            </div>
        </div>

    )
};

export default Body;
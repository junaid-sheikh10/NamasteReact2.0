import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
   // console.log(props)
    const {name, cuisines,avgRating,cloudinaryImageId}=props.info
    return(
        <div className='m-2 hover:bg-gray-300 p-4 w-[250px] bg-gray-100 rounded-lg'>
            <img className='rounded-md' src={CDN_URL+cloudinaryImageId} alt="" />
            <h3 className="font-bold pt-4 text-lg">{name}</h3>
            <h3 className="">{cuisines.join(" ")}</h3>
            <h4>{avgRating}</h4>
        </div>
    )
};

export default RestaurantCard;
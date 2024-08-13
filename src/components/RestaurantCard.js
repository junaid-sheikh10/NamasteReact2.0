import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
   // console.log(props)
    const {name, cuisines,avgRating,cloudinaryImageId}=props.info
    return(
        <div className='res-card'>
            <img className='card-img' src={CDN_URL+cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h3>{cuisines.join(" ")}</h3>
            <h4>{avgRating}</h4>
        </div>
    )
};

export default RestaurantCard;
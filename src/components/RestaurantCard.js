import { CDN_URL } from "../utils/constant";

const RestaurantCard=({resName,cuisine})=>{
    return(
        <div className='res-card'>
            <img className='card-img' src={CDN_URL+"nv9q1gsfyzezfb4sndc7"} alt="" />
            <h3>{resName}</h3>
            <h3>{cuisine}</h3>
            <h4>4.4 stars</h4>
        </div>
    )
};

export default RestaurantCard;
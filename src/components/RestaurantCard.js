import { CDN_URL } from "../utils/constant";

const RestaurantCard=({resName,cuisine})=>{
    return(
        <div className='res-card'>
            <img className='card-img' src={CDN_URL+"nv9q1gsfyzezfb4sndc7"} alt="" />
            <h3>Restaurant Name</h3>
            <h3>Cuisines</h3>
            <h4>4.4 stars</h4>
        </div>
    )
};

export default RestaurantCard;
import RestaurantCard from "./RestaurantCard";


const Body=()=>{
    return(
        <div className='body'>
            <div className='search-bar'></div>
            <div className='res-container'>
                <RestaurantCard resName="Meghna Foods" cuisine="indian"/>
                <RestaurantCard resName="KFC" cuisine="burger"/>
            </div>
        </div>

    )
};

export default Body;
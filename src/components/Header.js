import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useRestaurantCheck from "../utils/useOnlineCheck";

const Header=()=>{

    const isOnline=useRestaurantCheck();

    return (
        <>
        <div className='header'> 
            <div className='logo-container'>
            <img src={LOGO_URL} alt="" />
            </div>
            
            <div className='nav-items'>
                <ul>
                    <li>Online Status:{isOnline? "✅":"🟥"}</li>
                    <li><Link to="/" >Home</Link> </li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>

                </ul>
            </div>
        </div>
        
        </>

    )
};




export default Header;


//dub.dubInc
// enter dubsh on google
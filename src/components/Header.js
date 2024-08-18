import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useRestaurantCheck from "../utils/useOnlineCheck";

const Header=()=>{

    const isOnline=useRestaurantCheck();

    return (
        <>
        <div className=" flex justify-between  pr-20  shadow-lg "> 
            <div className=''>
            <img src={LOGO_URL} alt="" />
            </div>
            
            <div className=" items-center flex" > 
                        
                
                <ul className="flex gap-5 underline-offset-auto">
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
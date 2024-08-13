import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <>
        <div className='header'> 
            <div className='logo-container'>
            <img src={LOGO_URL} alt="" />
            </div>
            
            <div className='nav-items'>
                <ul>
                    <li><Link to="/" >Home</Link> </li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                </ul>
            </div>
        </div>
        
        </>

    )
};




export default Header;


//dub.dubInc
// enter dubsh on google
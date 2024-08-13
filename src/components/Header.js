import { LOGO_URL } from "../utils/constant";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const Header=()=>{
    return (
        <>
        <div className='header'> 
            <div className='logo-container'>
            <img src={LOGO_URL} alt="" />
            </div>
            
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        
        </>

    )
};




export default Header;


//dub.dubInc
// enter dubsh on google
import ReactDom from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { lazy } from 'react';
//import About from './routes/About';
import Contact from './routes/Contact';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
import useRestaurantCheck from './utils/useOnlineCheck';
import { Suspense } from 'react';


const Grocery = lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./routes/About"))




const AppLayout=()=>{
    
    // const isOnline=useRestaurantCheck();
    // if (isOnline===false){
    //     return <h1> youre' Offline , check your internet</h1>
    // }
    return( 
    <div>
     <Header></Header>
     <Outlet/>
     <Footer></Footer>
    </div>
    )
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout></AppLayout>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body></Body>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading...</h1>}><About></About></Suspense> 
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>} ><Grocery/></Suspense>
            }
        ]
    }
    
    
])

const root=ReactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);
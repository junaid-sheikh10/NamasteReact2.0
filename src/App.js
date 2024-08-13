import ReactDom from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import About from './routes/About';
import Contact from './routes/Contact';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';





const AppLayout=()=>{
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
        children:[
            {
                path:"/",
                element:<Body></Body>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]

    },
    
])

const root=ReactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);
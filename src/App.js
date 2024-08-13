import ReactDom from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import About from './routes/About';






const AppLayout=()=>{
    return( 
    <div>
     <Header></Header>
     <Body></Body>
    </div>
    )
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout></AppLayout>
    },
    {
        path:"/about",
        element:<About/>
    }
])

const root=ReactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);
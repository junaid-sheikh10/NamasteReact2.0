import ReactDom from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';









const AppLayout=()=>{
    return( 
    <div>
     <Header></Header>
     <Body></Body>
    </div>
    )
};

const root=ReactDom.createRoot(document.getElementById('root'))
root.render(<AppLayout/>);
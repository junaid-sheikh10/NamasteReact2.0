import ReactDom from 'react-dom';
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

ReactDom.render(<AppLayout/>,document.getElementById('root'));
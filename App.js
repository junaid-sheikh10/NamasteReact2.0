import ReactDom from 'react-dom';

//React Element
const Title=(
    <h1 className='head'>
        Namaste React using JSX🚀
    </h1>
);


//React Functional Component -  returns JSX
const HeadingComponent=()=>{
    return ( 
    <div>
        <h2>{Title}</h2> 
        <h1>
            Namaste React Functional Component
        </h1>
        
        </div>    
    )
}

ReactDom.render(<HeadingComponent/>,document.getElementById('root'));
import './App.css';
import React,{useState,useEffect,useRef} from 'react';

function App() {
  /*
  const [name,setName]=useState("")
  const [count,setCount]=useState(0);

  
  useEffect(()=>{
    setCount(count+1) s
  }) 

  return (
    <div className="App">

      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <div>My name  is: {name}</div>
      <div>Rerendered:{count}</div>
    

    </div>
  );


  The problem over here is that when the first  time the component is rendered,count is changed and this will cause the 
  component to rerender and because of this the useeffect will be called again and it will go in infinite loop                        
                              
  */
//////////////////////////////////////////////////////////////////////////////////////////////////
/*
  const [name,setName]=useState("")
  const count=useRef(1) 

  useEffect(()=>{
    count.current=count.current+1
  }) 


  return (
    <div className="App">

      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <div>My name  is: {name}</div>
      <div>Rerendered:{count.current}</div>
    

    </div>
  );

Here useref will return a object with key current,they basically does not rerender the component when they are updated 
ansd also they  persist their value when the component rerenders

*/

/////////////////////////////////////////////////////////////////////////////////////

/*
const inputref=useRef();

function focus()
{
  inputref.current.focus();
}


return (
  <div className="App">
  
    <input  ref={inputref} type="text" />
    <div>Refering to HTML elements</div>
    <button onClick={focus}>Focus</button>
    
  </div>
);

*/
//////////////////////////////////////////////////////////////////////////////////

const [name,setName]=useState("")
const previousname=useRef("") 

useEffect(()=>{
  previousname.current=name
},[name]) 


return (
  <div className="App">

    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <div>My name  is: {name}</div>
    <div>Previous name:{previousname.current}</div>
  

  </div>
);
/*
VERY VERY IMPORTANT
Here the concept is very important.During the first render nothing that is empty string is shown,but when u start typing the name
the name state is change and the component is rendered wit the previous value of current and  after the component is rendered 
then the useeffect is called and then it is updating the current .But since updating the ref does not render we cannot see its latest
value.
*/

//////////////////////////////////////////////////////////////////////////////////


}

export default App;

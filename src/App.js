import React from 'react';
import Product from './components/Product';
import Counter from './components/Counter';
import { useState } from 'react';
 const handleAddtoCart= (title)=>{
     alert("Add to cart Click for "+title);
 };
 
 const [count,setCount] = React.useState(5);
    const handleIncrement=

        () => {
            console.log("inc called");
            setCount(++count)
    
        }
        const handleDecrement=()=>{console.log("dec called");
    setCount(--count)
      }
 
function App() {
    // 1> const [persons,setPersons]= React.useState(["Zahid","Muneeb","Ali"]);

  return (
    
    <div>
      <h1 style ={{backgroundColor:"blue"}}>Components example </h1>
      <Counter count ={count} 
      handleIncrement={handleIncrement} 
      handleDecrement={handleDecrement }/>
          <Product title="Audi" price="300" onAddToCart={handleAddtoCart}/>
      <Product title="Honda" price="600"onAddToCart={handleAddtoCart} />
      <Product title="toyota" price="400" onAddToCart={handleAddtoCart}/>
      

          </div>
   
  );

}

export default App;


 // <div className="App">
    //   {/*1> <button onClick={()=>{ 
    //     let ps = [...persons];
    //     ps.sort();
    //     setPersons(ps) }}>Test Sort</button>
    // <ul>
    //   {persons.map((person,index)=>(
    //     <li key={index}>{person}</li>
    //   ))}
    //   </ul>   */}
    // </div>
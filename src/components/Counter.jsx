import React from 'react';
import { useState } from 'react';
const Counter = ({handleDecrement,handleIncrement,count}) => {
    

    return ( <div> 
        <button onClick={handleDecrement}>--</button>
            {count}
        <button onClick={handleIncrement} >++</button>
             </div> );
}
 
export default Counter;
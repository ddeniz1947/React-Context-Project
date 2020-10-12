import React, { useState, useEffect, createContext,useContext } from 'react';
import {DenemeContext} from '../contexts/DenemeContext';
function Example() {
 
  const [count, setCount] = useState(0);
  const { deneme, state } = useContext(DenemeContext);
  useEffect(() => {
      console.log("HOOK COMPONENT ÇALIŞTI")
       
  });
  // setCount((count) => {
  //   count++;
  // });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={setCount(count)}>
        Click me
      </button>
   
    </div>
  );
}

export default Example;
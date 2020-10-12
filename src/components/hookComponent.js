import React, { useState, useEffect, createContext,useContext } from 'react';
import DenemeContext from '../contexts/DenemeContext.js';
function Example() {
 
  const [count, setCount] = useState(0);
  const [denemeContextData, setdenemeContextData] = useState('');
  useEffect(() => {
      console.log("HOOK COMPONENT ÇALIŞTI")
   
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
   
    </div>
  );
}

export default Example;
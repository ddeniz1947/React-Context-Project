import React, { useState, useEffect, createContext, useContext } from 'react';
import { DenemeContext } from '../contexts/DenemeContext';
function Example({addNameProp}) {

  const [count, handleClick] = useState(0);
  const [dummy, dummyFunc] = useState(0);
  // const [ sendDataFunc] = useState(0);
  // const [denemeFunc] = useState(0);
  // const { deneme, state } = useContext(DenemeContext);

  useEffect(() => {
    console.log(addNameProp , "normal");

    // console.log(JSON.stringify(dummy) , "JSON");
    // let userObject = {
    //   userName :dummy ,
    //   userId : 0 
    // }
    // fetch('https://localhost:44302/api/values?value', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(userObject)
    // }).then(function (response) {

    // }).then(function (data) {

    // });

  },[addNameProp]);

  const sendDataFunc = () => {
    
    console.log(JSON.stringify(addNameProp) , "JSON");
    let userObject = {
      userName :addNameProp ,
      userId : 0 
    }
    fetch('https://localhost:44302/api/values?value', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userObject)
    }).then(function (response) {

    }).then(function (data) {

    });
  }

  return (
    <div>
   <button onClick={sendDataFunc}>
     Veri Ekle
     </button> 
    </div>
  );
}

export default Example;
import React, { Component } from 'react';
import TextComponent from './components/text-component';
import DenemeComponent from './components/deneme-component';
import Example from  './components/hookComponent';
import logo from './logo.svg';
import DenemeContextProvider from './contexts/denemeContext';
import './App.css';

function App() {

const user = { name: 'Tania', loggedIn: true }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     denemeData: '',
  //     boolData: false
  // //   }
  //   this.nameSurnameChange = this.nameSurnameChange.bind(this);
  //   this.clickFunc = this.clickFunc.bind(this);
  // }


  // componentDidMount(() => {
  //   console.log("APP COMPONENT CALISTI");
  // });



  const nameSurnameChange = ((data) => {
    // console.log(data.target.value);
    this.setState({ denemeData: data.target.value })
  });

  const clickFunc = (() => {
    this.setState({ boolData: true });
    console.log(this.state.denemeData);
    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBA7X3dN_AXkK3HTD9b3AFTW-i0MPfUr94&cx=017576662512468239146:omuauf_lfve&q='${this.state.denemeData}'`, {
      "method": "GET",
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  });

  // render() {
    return (
      <div className="App">
        <header className="App-header">
          <DenemeContextProvider value={user}> 
          <Example/>
          <TextComponent  />
          <button>deneme</button>
          <img src={logo} className="App-logo" alt="logo" />
          </DenemeContextProvider>
       
        </header>
      </div>
    );
  

}

export default App;

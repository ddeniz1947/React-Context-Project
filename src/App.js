import React, { setState, useState, useEffect, useContext, Component } from 'react';
import TextComponent from './components/text-component';
import DenemeComponent from './components/deneme-component';
import HookComponent from './components/hookComponent';
import Example from './components/hookComponent';
import logo from './logo.svg';
import DenemeContextProvider from './contexts/DenemeContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import ReactDOM from 'react-dom';
class App extends Component {

  // const [user] = useState("");
  constructor(props) {
    super(props);
    this.state = {
      userDataArray: [],
      boolData: false,
      userName: ""
    }
    this.addUserMethod = this.addUserMethod.bind(this);
    this.takeDataFunc = this.takeDataFunc.bind(this);
  }


  addUserMethod(e) {
    this.setState({ userName: e.target.value });
  }

  takeDataFunc() {
    fetch(`https://localhost:44302/api/values`, {
      "method": "GET",
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let arrayTry = [];
        var joined = arrayTry.concat(response);
        this.setState({ userDataArray: joined });
      });
  }

  componentDidMount() {
    fetch(`https://localhost:44302/api/values`, {
      "method": "GET",
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let arrayTry = [];
        var joined = arrayTry.concat(response);
        this.setState({ userDataArray: joined });
      });
  }

  render() {
    return (

      <div className="App">
        <input onChange={this.addUserMethod} />

        <Router>
          <div>
            <Link to="/text">Take Data</Link>
          </div>
          <div>
            <Link to="/hookpost">Send Data</Link>
          </div>
          <Switch>
            <Route path="/text">
              <button onClick={this.takeDataFunc}>Veri Çek</button>
            </Route>
            <Route path="/hookpost">
              <HookComponent addNameProp={this.state.userName} />
            </Route>
          </Switch>
        </Router>

        { this.state.userDataArray.length != 0 ?
          <div style={{ display: "flex", textAlign: "center" }}>
            <table class="table table-dark" style={{ width: '50vw', marginRight: 'auto', marginLeft: 'auto' }}>
              <thead>
                <tr>
                  <th scope="col">Select User</th>
                </tr>
              </thead>
              <tbody>
                <tr> {this.state.userDataArray.map((item, i) => <div key={i} >{item.userName}</div>)}</tr>
              </tbody>
            </table>
          </div>
          :
          <div style={{ display: "flex", textAlign: "center" }}>
            <table class="table table-dark" style={{ width: '50vw', marginRight: 'auto', marginLeft: 'auto' }}>
              <thead>
                <tr>
                  <th scope="col">First</th>
                  {/* <th scope="col">Last</th>
                            <th scope="col">Handle</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  NO DATA
                 </tr>
              </tbody>
            </table>
          </div>

        }



        {/*        
        <DenemeContextProvider>
          <Example />
        </DenemeContextProvider> */}
      </div>
    );
  }
}

export default App;

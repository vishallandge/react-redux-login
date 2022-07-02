// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import React from 'react';
import {
  BrowserRouter,
  Redirect,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// import Loader from "./components/loaders/Loaders";
import { useSelector } from "react-redux";
import Home from './components/Home';
function App() {
  // const appLoader = Loader();
  return (
    <div className="App">
      Hii
       <Login/>
{/* <Login2/> */}
     
    </div>
  );
}

export default App;

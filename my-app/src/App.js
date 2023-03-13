import React from 'react';
import './App.css';
import Header from "./components/content/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/content/Content";
import {useDispatch, useSelector} from "react-redux";

function App() {

  return (
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content"}>
          <Content/>
        </div>
      </div>
  )
}

export default App;

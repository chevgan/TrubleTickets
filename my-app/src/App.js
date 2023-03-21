import React from 'react';
import './App.css';
import Header from "./components/content/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";


function App() {

  return (
      <BrowserRouter>
                  <Routes>
                      <Route path='/login' element={<LoginPage/>}/>
                      <Route path='/' element={
                          <div className="app-wrapper">
                              <Header/>
                              <Navbar/>
                              <div className={"app-wrapper-content"}>
                                  <Content/>
                              </div>
                          </div>
                      }/>
                  </Routes>
      </BrowserRouter>

  )
}

export default App;

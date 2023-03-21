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
//                   _ooOoo_
//                  o8888888o
//                  88" . "88
//                  (| -_- |)
//                  O\  =  /O
//               ____/`---'\____
//             .'  \\|     |//  `.
//            /  \\|||  :  |||//  \
//           /  _||||| -:- |||||-  \
//           |   | \\\  -  /// |   |
//           | \_|  ''\---/''  |   |
//           \  .-\__  `-`  ___/-. /
//         ___`. .'  /--.--\  `. . __
//      ."" '<  `.___\_<|>_/___.'  >'"".
//     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//     \  \ `-.   \_ __\ /__ _/   .-` /  /
//======`-.____`-.___\_____/___.-`____.-'======
//                   `=---='
//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//         God Bless        Never Crash
export default App;

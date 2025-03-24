import logo from './logo.svg';
import './App.css';
import HomePage from './components/JioHome/HomePage.js';
import "./components/JioHome/HomePage.css";
import MobileList from "./components/MobileList/MobileList.js";
import "./components/MobileList/MobileList.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HeaderList from './components/HeaderList/HeaderList.js';
import { useState } from "react";
import LoginPage from './components/LoginPage/LoginPage.js';
import "./components/LoginPage/LoginPage.css";
import JioFiber from './components/JioFiber/JioFiber.js';
import "./components/JioFiber/JioFiber.css";
import MyProject from './components/MyProject/MyProject.js';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn && <HeaderList />}

      <Routes>



        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}></Route>
        
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/MobileList" element={<MobileList />}></Route>
        <Route path="/JioFiber" element={<JioFiber />}></Route>

      </Routes>
    </Router>











  );

}

export default App;

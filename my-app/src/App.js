import logo from './logo.svg';
import './App.css';
//  import "./components/portList/portList.css";
// import UniverseList from './components/universeList/universeList';
// import UniverseList2 from './components/universeList/UniverseList2';
// import ShivaAnna from './components/shivaList/ShivaAnna.js';
// import "./components/shivaList/ShivaAnna.css";
// import "./components/JioHome/HomePage.js"
import HomePage from './components/JioHome/HomePage.js';
import "./components/JioHome/HomePage.css";
import MobileList from "./components/MobileList/MobileList.js";
import "./components/MobileList/MobileList.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Link} from "react-router-dom";
import HeaderList from './components/HeaderList/HeaderList.js';
import {useState} from "react";
function App() {
  
  return (
    <Router>
      <HeaderList/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/MobileList" element={<MobileList/>}></Route>

      </Routes>
    </Router>

    


      



    


  );

}

export default App;

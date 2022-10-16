import React from "react";
import NavBar from "./NavBar/NavBar.js";
import "./App.css";
import Banner from "./Banner/Banner.js";
import RowPost from "./RowPost/RowPost.js";
import {orginals,action,Comedy,Romance,Horror} from '../src/urls.js'

function App() {
  return (
    <div className="App">
    
    <NavBar/>
    <Banner/>
    <RowPost url={orginals} title="Netflix Orginals"/>
    <RowPost url={action} title="Action" isSmall/>
    <RowPost url={Comedy} title="Comedy" isSmall/>
    <RowPost url={Romance} title="Romance" isSmall/>
    <RowPost url={Horror} title="Horror" isSmall/>
    
    </div>
  );
}

export default App;

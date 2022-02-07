import PraticlesComponent from "./components/Particles/particles"
import React from 'react';

import NavBarComponent from "./components/navbar/navbar"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <NavBarComponent></NavBarComponent>
        <PraticlesComponent/>
    </div>
  );
}

export default App;

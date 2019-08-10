import React from 'react';
//import logo from './logo.svg';
import {Navbar} from './components/Navbar/Navbar'
import {MainContainer} from './containers/MainContainer/MainContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContainer/>
    </div>
  );
}

export default App;

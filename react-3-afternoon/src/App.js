import React from 'react';
import './App.css';
import People from "./components/People"
import Header from "./components/Header"
import Main from './components/Main';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Header />
     {/*  <Main /> */}
     <People />
      <NavBar />
    </div>
  ); 

}

export default App;

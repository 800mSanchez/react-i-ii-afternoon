import React from 'react';
import './App.css';
import data from "./data"
import Header from "./components/Header"
import Main from './components/Main';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NavBar />
    </div>
  ); 

}

export default App;

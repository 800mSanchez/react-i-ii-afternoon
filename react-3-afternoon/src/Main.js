import React, { Component } from 'react';
import './App.css';
import data from "./data"

class Main extends Component {
  constructor(){
      super()
      this.state = {
          data: data
      }
  }
  
  render(){
      return <div>
          <h2>I am the List of People</h2>
          <button> Previous </button>
          <button> Next </button>
      </div>
  }
}


export default Main;
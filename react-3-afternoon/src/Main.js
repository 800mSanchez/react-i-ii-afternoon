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
  
/* changeData(){
    this.setState({
        data: 
    }) 
} */

  render(){
      return <div>
          <h2>I am the List of People</h2> {/* ----> I think I want to change the slides of array data here */}
          <button /* onClick={() => this.changeData()} */> Previous </button>
          <button /* onClick={() => this.changeData()} */> Next </button>
      </div>
  }
}


export default Main;
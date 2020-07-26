/* import React, { Component } from 'react';

class Main extends Component {
  constructor(props){
      super(props)
      this.state = {
          dataArr: NameList
      }
  }
  
showData(index){
    const dataArr = [...this.state.dataArr]
    dataArr.splice(index,1)
    this.setState({dataArr})
}

  render(){
      return <div className="data-box">
                <div>{this.state.dataArr}</div> {/* ----> I think I want to change the slides of array data here *///}
             //</div>
  //}
//}


//export default Main; 
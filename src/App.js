
import React from 'react'

import './App.css';

class Bitcoin extends React.Component {
    componentDidMount(){
        fetch('https://blockchain.info/ticker') /* returns a promise */ 
        
        .then (this.setState(data)) /* change the json into the array */ 
    }
    constructor() {
        super();
        this.state = {
            data: []
        }
      }
    render() {
      return <h1>Hello {this.state.data} </h1>;
    }
  }

export default Bitcoin;

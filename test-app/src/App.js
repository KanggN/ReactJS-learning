import React, { Component } from 'react';
import Todolist from './components/Todolist'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn : true
    }
  }
  
  render () {
      let rs = ''
      if(this.state.isLoggedIn){
        rs = 'in'
      }
      else rs = 'out'
      

    return (
      <div className="App">
        <h1>You are currently logged in/out Answer: {rs}</h1>
        <Todolist/>
      </div>
    )
  }
}

export default App;



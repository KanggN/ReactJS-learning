import React from 'react';


import TodoItem from './components/Todoitems';
import Todosdata from './components/Todolist-data';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(prevState => {
      return{
        count : prevState.count + 1
      }
    })
  }
  render(){
    return(
      <div className="Appp">
        <div className="container">
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Change!</button>
            <button onClick={()=>console.log(this.state.count)}>Check</button>
        </div>  
      </div>
    )
  }
};
export default App




/* 
constructor(){
  super()
  this.state = {
    todos : Todosdata
  }
}
<div className="Todo-list">
        <div className="container">
        {Todoitems}
        </div>
      </div>
 const Todoitems = this.state.todos.map(item=> <TodoItem key={item.id} item={item} />) */

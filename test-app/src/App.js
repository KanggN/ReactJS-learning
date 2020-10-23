import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'

class App extends Component {
  Showinfo(a){
    if(a.Status){
      return <h1>
              Id : {a.id} <br/>
              Ten : {a.Ten}<br/>
              Lop : {a.Lop}<br/>
              status : {a.Status ? 'Active' : 'Pending'}
            </h1>
    };
  };
  render () {
    var a = 4;
    var b = 3;
    var Hocsinh = {
      id : 1,
      Ten : 'Quang',
      Lop : 12,
      Status : true
    }   
    return (
      <div className="App">
        <Header/>
        {this.Showinfo(Hocsinh)}
      </div>
    )
  }
}

export default App;


/* 
  function Showinfo(a){
    if(a.Status){
      return <h1>
              Id : {a.id} <br/>
              Ten : {a.Ten}<br/>
              Lop : {a.Lop}<br/>
              status : {a.Status ? 'Active' : 'Pending'}
            </h1>
    };
  };
  function App() {
    var Hocsinh = {
      id : 1,
      Ten : 'Quang',
      Lop : 12,
      Status : true
    } 
    return (
      <div>
        <Header/>
        {Showinfo(Hocsinh)}
      </div>
  
    )
  } */
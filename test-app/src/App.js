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
        <div className="container">
          <div className="row mt-3">
              <div className="col-4">
                  <Product name="Iphone 6s"
                            price="6000000"
                            image="https://fptshop.com.vn/Uploads/Originals/2020/1/7/637139916609041371_6s-pl-vang-1.png" />
              </div>
              <div className="col-4">
                  <Product name="Samsung galaxy 10"
                            price="12000000" 
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlVoCou11mnMql0fEEoBaPUxB7YlYmKsAKm9pLmD_RzrOFRod8mxv6USMZ_miVB-nRvGhKwsz6&usqp=CAc"/>
              </div>
              <div className="col-4">
                  <Product name="Xiaomi12"
                            price="8000000" 
                            image="https://cdn.tgdd.vn/Products/Images/42/217308/xiaomi-redmi-9-114620-094644-400x400.jpg"/>
              </div>
          </div>
        </div>
        
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
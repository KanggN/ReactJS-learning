import React from 'react';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="row">
        <div className="col-3">
          <Product/>
        </div>
        <div className="col-3">
          <Product/>
        </div>
      </div>
    </div>
  );
}

export default App;

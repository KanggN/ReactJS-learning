import react from 'react'
import './App.css';
import Products from './components/Products'
import ProductData from './components/Product-data'
class App extends react.Component {
  render(){
    const abc = ProductData.map(item => {
     return <Products key={item.id} item={item}/> 
    })
    return(
      <div className="App">
        <div className="container">
          <div className="row">        
                {abc}
          </div>
        </div>
      </div>
    )
  }
}

export default App;



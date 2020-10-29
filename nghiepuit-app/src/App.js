import react from 'react'
import './App.css';
import ColorPicker from './components/Colorpicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'
class App extends react.Component {
  constructor(){
    super()
    this.state = {
      color : 'red',
      fontSize : '15px'
    }
    this.SetColor = this.SetColor.bind(this)
  }
  SetColor(param){
    this.setState({
      color : param
    })
  }
  render(){
    return(
      <div className="App">
        <div className="container mt-5">
          <div className="row"> 
            <div className="col-6">
              <ColorPicker color={this.state.color} ReceiveColor={this.SetColor}/>   
            </div>       
            <div className="col-6">
                <SizeSetting/>
                <Reset/>
            </div>
          </div>
          <div className="row mt-5">
          <div className="col-12">
              <Result color = {this.state.color}/>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default App;



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
      fontSize : 15
    }
    this.SetColor = this.SetColor.bind(this)
    this.SetFontSize = this.SetFontSize.bind(this)
    this.onSettingDefault = this.onSettingDefault.bind(this)
 
  }
  SetColor(param){
    this.setState({
      color : param
    })
  }
  SetFontSize(param){
    this.setState({
      fontSize : param
    })
  }
  onSettingDefault(value){
    if(value)
    this.setState({
      color : 'red',
      fontSize : 15
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
                <SizeSetting fontSize={this.state.fontSize} ReceiveFontSize={this.SetFontSize}/>
                <Reset onSettingDefault={this.onSettingDefault}/>
            </div>
          </div>
          <div className="row mt-5">
          <div className="col-12">
              <Result color = {this.state.color}
                      fontSize = {this.state.fontSize}/>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default App;



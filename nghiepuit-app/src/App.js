import react from 'react'
import './App.css';

class App extends react.Component {
  constructor(){
    super()
    this.state = {
      username : '',
      password : ''
    }
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }
  onHandleChange(e){
    var name = e.target.name;
    var value = e.target.value;
    this.setState({
      [name] : value
    })
  }
  onHandleSubmit(e){
    e.preventDefault()
    console.log(this.state)
  }
  render(){
    return(
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 ml-5">
            <div className="card border-primary">
                <div className="card-header bg-primary">Form</div>
                  <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <div className="card-body">
                            <label>Tên</label>
                            <input type="text"
                              className="form-control" 
                              name="username" 
                              onChange={this.onHandleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                    <div className="card-body">
                            <label>Mật Khẩu</label>
                            <input type="text"
                              className="form-control" 
                              name="password" 
                              onChange={this.onHandleChange} />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Submit</button>
                    <button type="reset" className="btn btn-success m-2">Reset</button>
                  </form>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default App;



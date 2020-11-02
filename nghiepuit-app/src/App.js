import react from 'react'
import './App.css';
import TaskForm from './components/task-form'
import Control from './components/control'
import TaskList from './components/task-list'

class App extends react.Component {
  constructor(){
    super();
    this.state = {
      tasks : []
    }
  }
  componentDidMount(){
    if(localStorage.getItem('Tasks') != null)
    var a = JSON.parse(localStorage.getItem('Tasks')) 
    this.setState({
      tasks : a
    })
  }
  onGenerateData = () =>{
    var task = [
      {
        id : this.generateID(),
        name : 'Học Lập Trình',
        status : true
      },
      {
        id : this.generateID(),
        name : 'Đi bơi',
        status : false
      },
      {
        id : this.generateID(),
        name : 'Ngủ',
        status : true
      },
    ]
    localStorage.setItem('Tasks',JSON.stringify(task))
  }
  s4(){
    return Math.floor( (1 + Math.random())* 0x10000).toString(16).substring(1)
  }
  generateID(){
    return  this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
  }
  
    render(){
      var {tasks} = this.state
    return(
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center">Quản Lý Công Việc</h1>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <TaskForm/>
              </div>
              <div className="col-md-9">
                <form>
                  <button type="button" className="btn btn-primary my-3 mr-3">
                      Thêm Công Việc
                  </button>
                  <button type="button" onClick={this.onGenerateData} className="btn btn-danger my-3">
                      Tạo dữ liệu mẫu
                  </button>
                    <Control/>   
                    <TaskList tasks = {tasks}/>
                </form>
              </div>
            </div>
          </div>
    )
  }
}

export default App;



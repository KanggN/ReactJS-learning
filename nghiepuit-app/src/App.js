import react from 'react'
import './App.css';
import TaskForm from './components/task-form'
import Control from './components/control'
import TaskList from './components/task-list'

class App extends react.Component {
 onGenerateData(){
   console.log('Hellllo')
 }
  render(){
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
                  <button className="btn btn-primary my-3 mr-3">
                      Thêm Công Việc
                  </button>
                  <button type="button" onClick={this.onGenerateData} className="btn btn-danger my-3">
                      Tạo dữ liệu mẫu
                  </button>
                    <Control/>   
                    <TaskList/>
                </form>
              </div>
            </div>
          </div>
    )
  }
}

export default App;



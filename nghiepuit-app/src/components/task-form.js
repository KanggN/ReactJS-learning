import React from 'react';

class TaskForm extends React.Component {
    onCloseForm = ()=> {
     this.props.onCloseForm()
    }
    render(){
      
        return(
            <div className="card border-warning my-3">
                <div className="card-header bg-warning d-flex justify-content-between">
                  Thêm Công Việc <a href="/#" onClick={this.onCloseForm}><i className="fas fa-times-circle text-danger"></i></a></div> 
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Tên :</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label>Trạng Thái :</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-warning mx-2">Thêm</button>
                      <button className="btn btn-danger mx-2">Xóa</button>
                    </div>
                  </form>
                </div>
              </div>
        )
    }
}
export default TaskForm
import React from 'react';

class TaskForm extends React.Component {
    render(){
        return(
            <div className="card border-warning">
                <div className="card-header bg-warning">Thêm Công Việc</div>
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
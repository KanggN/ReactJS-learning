import React from 'react';

class TaskForm extends React.Component {
    constructor(){
      super()
      this.state = {
        id : '',
        name : '',
        status : true,
      }
    }
    componentDidMount = () =>{
      if(this.props.task){
        this.setState({
          id : this.props.task.id,
          name : this.props.task.name,
          status : this.props.task.status,
        })
      }
    }
    
    onCloseForm = ()=> {
     this.props.onCloseForm()
    }
    onHandleChange = (e) =>{
      var name = e.target.name
      var value = e.target.value
      if(name === 'status'){
        value = e.target.value === 'true' ? true : false
      }
      this.setState({
        [name] : value
      })
    }
    onHandleSubmit = (e) =>{
      e.preventDefault()
      if(this.state.id){
        this.props.onUpdate(this.state)
      } else {
        this.props.onSubmit(this.state)
      }
      this.onCloseForm()
    }
    onClear = () =>{
      this.setState({
        name : '',
        status : true
      })
    }
    render(){
      var { id } = this.state
        return(
            <div className="card border-warning my-3">
                <div className="card-header bg-warning d-flex justify-content-between">
                  {id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'} <a href="/#" onClick={this.onCloseForm}><i className="fas fa-times-circle text-danger"></i></a></div> 
                <div className="card-body">
                  <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                      <label>Tên :</label>
                      <input  type="text" 
                              className="form-control"
                              name="name"
                              value={this.state.name}
                              onChange = {this.onHandleChange}/>
                    </div>
                    <div className="form-group">
                      <label>Trạng thái</label>
                      <select className="form-control" 
                              name="status"
                              value={this.state.status} 
                              onChange = {this.onHandleChange}>
                        <option value={true}>Kích hoạt</option>
                        <option value={false}>Ẩn</option>
                      </select>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-warning mx-2" >{id !== '' ? 'Cập Nhật' : 'Thêm'}</button>
                      <button type="button" className="btn btn-danger mx-2" onClick={this.onClear}>Hủy Bỏ</button>
                    </div>
                  </form>
                </div>
              </div>
        )
    }
}
export default TaskForm
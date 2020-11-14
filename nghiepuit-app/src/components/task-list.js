import react from 'react'
import TaskItem from './task-item'

class TaskList extends react.Component {
  constructor(){
    super()
    this.state = {
      filterName : '',
      filterStatus : -1,
    }
  }
  onHandleChange = (e) =>{
    var name = e.target.name
    var value = e.target.value
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName ,
      name === 'filterStatus' ? value : this.state.filterStatus 
    )
    this.setState({
      [name] : value
    })
  }
  render(){
    var {tasks} = this.props
    var {filterName,filterStatus} = this.state
      var elmTasklist = tasks.map((task,index)=>{
        return <TaskItem  key={task.id} 
                          index={index} 
                          tasks={task} 
                          onUpdateStatus={this.props.onUpdateStatus}
                          onDeleteItem={this.props.onDeleteItem}
                          onFixItem={this.props.onFixItem}/>
      })
    return(
        <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td><input type="text"  name='filterName' 
                                    className="form-control"
                                    value={filterName} 
                                    onChange={this.onHandleChange} /></td>
            <td><select className="form-control" 
                        name='filterStatus' 
                        value={filterStatus}
                        onChange={this.onHandleChange}>
                <option value={-1}>Tất Cả</option>                                        
                <option value={0}>Ẩn</option>                                        
                <option value={1}>Kích Hoạt</option>                                        
              </select></td>
            <td />
          </tr>
          {elmTasklist}
        </tbody>
      </table>
    )
  }
}

export default TaskList;



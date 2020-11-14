import react from 'react'

class TaskItem extends react.Component {
  constructor(){
    super()
    this.state = {
      status : ''
    }
  }
  onUpdateStatus = () =>{
    this.props.onUpdateStatus(this.props.tasks.id)
  }
  onDeleteItem = () =>{
    this.props.onDeleteItem(this.props.tasks.id)
  }
  onFixItem = () =>{
    this.props.onFixItem(this.props.tasks.id)
  }
  render(){
    var {tasks,index} = this.props
    return(
        <tr>
            <td>{index + 1}</td>
            <td>{tasks.name}</td>
            <td className="text-center"><span onClick={this.onUpdateStatus} className={tasks.status ? 'badge badge-success' : 'badge badge-danger'}>{tasks.status ? 'Kích Hoạt' : 'Ẩn'}</span></td>
            <td className="text-center">
                <button type="button" onClick={this.onFixItem} className="btn btn-warning mx-2">Sửa</button>
                <button type="button" onClick={this.onDeleteItem} className="btn btn-danger mx-2">Xóa</button></td>
        </tr>
    )
  }
}

export default TaskItem;



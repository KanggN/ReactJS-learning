import react from 'react'

class TaskItem extends react.Component {
  
  
  render(){
    var {task} = this.props
    var {index} = this.props
    return(
        <tr>
            <td>{index}</td>
            <td>{task.name}</td>
            <td className="text-center"><span className= {(task.status) ? 'badge badge-success': 'badge badge-danger'}>{(task.status) ? 'Kích hoạt': 'Ẩn'}</span></td>
            <td className="text-center">
                <button type="button" className="btn btn-warning mx-2">Sửa</button>
                <button type="button" className="btn btn-danger mx-2">Xóa</button></td>
        </tr>
    )
  }
}

export default TaskItem;



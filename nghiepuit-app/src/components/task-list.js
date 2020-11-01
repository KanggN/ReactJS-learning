import react from 'react'
import TaskItem from './task-item'

class TaskList extends react.Component {
  
  render(){
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
            <td><input type="text" className="form-control" /></td>
            <td><select className="form-control">
                <option value="" disabled>Tất Cả</option>                                        
                <option value="">Ẩn</option>                                        
                <option value="">Kích Hoạt</option>                                        
              </select></td>
            <td />
          </tr>
          <TaskItem/>
        </tbody>
      </table>
    )
  }
}

export default TaskList;


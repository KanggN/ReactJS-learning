import react from 'react'

class TaskItem extends react.Component {
  
  render(){
    return(
        <tr>
            <td>1</td>
            <td>Học Lập Trình</td>
            <td className="text-center"><span className="badge badge-success">Kích Hoạt</span></td>
            <td className="text-center">
                <button type="button" className="btn btn-warning mx-2">Sửa</button>
                <button type="button" className="btn btn-danger mx-2">Xóa</button></td>
        </tr>
    )
  }
}

export default TaskItem;



import React from 'react';

class Sort extends React.Component {
    onHandleClick = (type,value) => {
        this.props.onSort(type,value)
    }
    render(){
        return(
            <div className="col-6">
                <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    Sắp xếp
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/#" onClick={()=>this.onHandleClick('name',1)}><i className="fas fa-sort-alpha-down"></i> Tên A-Z</a>
                    <a className="dropdown-item" href="/#" onClick={()=>this.onHandleClick('name',-1)}><i className="fas fa-sort-alpha-down-alt"></i> Tên Z-A</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/#" onClick={()=>this.onHandleClick('status',1)}>Trạng Thái Kích Hoạt</a>
                    <a className="dropdown-item" href="/#" onClick={()=>this.onHandleClick('status',-1)}>Trạng Thái Ẩn</a>
                </div>
                </div>
            </div>
        )
    }
}
export default Sort
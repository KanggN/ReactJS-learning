import React, { Component } from 'react';

class Todolist extends Component {
    render (){
        return (
          <div className="form-check py-2">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
              {this.props.task}
            </label>
          </div>
        )
    }
}

export default Todolist;



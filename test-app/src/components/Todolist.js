import React, { Component } from 'react';

class Todolist extends Component {
    render (){
        return (
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked />
              Display value
            </label>
          </div>

        )
    }
}

export default Todolist;



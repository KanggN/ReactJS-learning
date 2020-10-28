import React from 'react'

function TodoItem(props)  {
        return(
            <div className="Todo-item">
                <input  type="checkbox" 
                        id={props.item.id}
                        checked={props.item.completed}
                        onChange={() => props.handleClick(props.item.id)}/>
                <p>{props.item.text}</p>
            </div>
        )
}

export default TodoItem
import React, { useContext } from "react";
import { TodoContext } from "../../App";

import './index.css'

function TodoList (props) {
    const {removeTodo} = useContext(TodoContext)
    
    const {todoItem} = props
    

    const onDeleteTodo = () => {
        removeTodo(todoItem.id)
        console.log(todoItem.id)
    }
    
    return (
        <li className="todo-item">
            <p className="text">{todoItem.text}</p>
            <button  className="del-button" onClick={onDeleteTodo}>
                 Delete</button>
        </li>
    )
}

export default TodoList
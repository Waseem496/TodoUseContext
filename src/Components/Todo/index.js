import React, {useContext} from 'react'
import { TodoContext } from '../../App'
import TodoList from '../TodoList'
import TodoForm from '../TodoForm'
import './index.css'



const Todo = () => {
    const{todos}= useContext(TodoContext)
    
    return(
         
        <div className='todo-items'>
           <TodoForm />

           <ul className='item-container'>
            {todos.map(eachItem => <TodoList key={eachItem.id} todoItem={eachItem} />)}
            </ul>
        </div>

    )
}

export default Todo
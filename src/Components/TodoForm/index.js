import React, {useState} from 'react'
import { TodoContext } from '../../App'

import './index.css'


function TodoForm (props) {
    const [input, setInput] = useState('')
    const {addTodo,todos} = React.useContext(TodoContext)


    const onChange = e => {
       setInput(e.target.value)
    } 

   
    const submitForm = e => {
        e.preventDefault()
        addTodo(
           [{
                id: todos.length +1,
                text:input
            }]
        )
        setInput('')
    }

    return(
        <form className='todo-form' onSubmit={submitForm}>
            <input type="text" placeholder='What needs to be done?' 
                value={input} className='todo-input' onChange={onChange} />
            <button className='button'> ADD</button>
        </form>
    )
}
export default TodoForm
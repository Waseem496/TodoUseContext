import React from 'react'
import Todo from './Components/Todo'
import './App.css'
export const TodoContext = React.createContext()

function App() {
  const [todos, setTodos] = React.useState([])
  
  const addTodo = todo => {
    setTodos([...todos, ...todo])
        console.log(todo)
 }
 const removeTodo = id => {
   const filteredItems = todos.filter(eachItem => eachItem.id !== id)

  setTodos(filteredItems)
  console.log(id)
 }

  return (
    <div className="todo-container">
    <TodoContext.Provider value={{todos, removeTodo, addTodo}}>
    
    <h1 className="header"> Todo List</h1>
    <Todo />
  
    </TodoContext.Provider>
    </div>
    
  );
}

export default App;

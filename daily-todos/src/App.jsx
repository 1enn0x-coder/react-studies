import { useState } from 'react'
import { nanoid } from "nanoid";
import './App.css'

export default function App() {
  
 const [todos, setTodos] = useState([]);

 const presetTodos = [
  {name: 'Cleaning', id : 1} , 
  {name: 'Cooking', id : 2} ,
  {name: 'Washing dishes', id : 3} ,
  {name: 'Laundry', id : 4} ,
  {name: 'Sweeping', id : 5} ,
  {name: 'Mopping', id : 6} ,
  {name: 'Taking out trash', id : 7} ,
  {name: 'Making the bed', id : 8} ,
  {name: 'Grocery shopping', id : 9} ,
  {name: 'Organizing rooms', id : 10} 
 ];

function addTodo(todo) {
  setTodos(prev => [...prev, { name : todo.name , id: nanoid() }]);
}

function deleteTodo(id) {
  setTodos(prev => prev.filter(todo => todo.id !== id));
}
  return (
    <>
      <div className="app">

    <h1>daily to do's</h1>

    <div className="todo-list">
      <h2>your tasks</h2>

      {todos.length === 0 ? (
        <div className="empty">no tasks yet</div>
      ) : (
        todos.map(item => (
          <div className="todo-item" key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => deleteTodo(item.id)}>X</button>
          </div>
        ))
      )}
    </div>

    <div className="preset-buttons">
      <h2>add from presets</h2>

      <div className="buttons-container">
        {presetTodos.map(item => (
          <button
            key={item.id}
            className="preset-button"
            onClick={() => addTodo(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>

  </div>
    </>
  )
}



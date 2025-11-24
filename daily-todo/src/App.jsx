import { useState } from 'react'
import { nanoid } from 'nanoid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nanoid } from 'nanoid'

function App() {

  const [todo, setTodo] = useState([])
  const presetTodos = [
    { id: 1, title: 'Brush Teeth'}, 
    { id: 2, title: 'Make Bed'}, 
    { id: 3, title: 'Eat Breakfast'}, 
    { id: 4, title: 'Do Homework'}, 
    { id: 5, title: 'play Outside'},
    { id: 6, title: 'Read a Book'},
    { id: 7, title: 'Help with Dishes'},
    { id: 8, title: 'Go to Sleep'}
  ]


  return ( 

  )
}

export default App

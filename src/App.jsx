import { useState } from "react"
import Input from "./components/Input"
import Todos from "./components/Todos"
import './App.css';

const INITIAL_TODO = [
    {
      id: crypto.randomUUID(),
      title: "Type your first todo"
    }
  ]

function App() {
  const [todos, setTodos] = useState(INITIAL_TODO)

  return (
    <div>
      <h1>Todo App</h1>
      <Input setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  )
}

export default App
import { useState } from "react"
import Input from "./components/Input"
import Todos from "./components/Todos"
import './App.css';

const INITIAL_TODO = [
    {
      id: crypto.randomUUID(),
      title: "Make your first plan!"
    }
  ]

function App() {
  const [todos, setTodos] = useState(INITIAL_TODO)

  return (
    <div>
      <h1>Res Faciendae</h1>
      <Input setTodos={setTodos} />
      {}
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
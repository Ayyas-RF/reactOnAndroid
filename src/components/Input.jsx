import { useState } from "react"

function Input({setTodos}) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodos((prevTodos) => ([
     ...prevTodos,
        { id: crypto.randomUUID(), title: text }
      ])
    )

    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} placeholder="What's your plan today?" onChange={(e) => setText(e.target.value)} />
    </form>
  )
}

export default Input
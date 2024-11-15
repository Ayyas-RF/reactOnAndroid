import TodoItem from "./TodoItem"

function Todos({todos}){

  return (
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    )
}

export default Todos
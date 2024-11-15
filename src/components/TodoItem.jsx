function TodoItem({todo}) {

  return (
      <li>
        <p>{todo.title}</p>
       <button>Delete</button>
      </li>
    )
}

export default TodoItem
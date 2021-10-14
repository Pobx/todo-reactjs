function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{
            textDecoration: todo.done ? "line-through" : "",
          }}
        >
          Id: {todo.id} text: {todo.text} done: {todo.done}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

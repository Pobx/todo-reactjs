function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedtods = todos.map((item) => item.id === todo.id? {...item, done: !item.done} : item);
    setTodos(updatedtods);
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          onClick={() => handleToggleTodo(todo)}
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

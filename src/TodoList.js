
function TodoList({todos}) {
  console.log(todos)
  return (
    <ul>
      {todos.map((todo, index) => (<li key={index}>Id: {todo.id} text: {todo.text} done: {todo.done}</li>))}
    </ul>
  );
}

export default TodoList;
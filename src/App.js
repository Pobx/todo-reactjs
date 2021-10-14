// import './App.css';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import React from 'react';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "A 1", done: false },
    { id: 2, text: "A 2", done: false },
    { id: 3, text: "A 3", done: false },
    { id: 4, text: "A 4", done: false },
    { id: 5, text: "A 5", done: false },
  ]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default App;

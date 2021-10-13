// import './App.css';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const todos = [
  { id: 1, text: "A 1", done: false },
  { id: 2, text: "A 2", done: false },
  { id: 3, text: "A 3", done: false },
  { id: 4, text: "A 4", done: false },
  { id: 5, text: "A 5", done: false },
];

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <AddTodo />
    </div>
  );
}

export default App;

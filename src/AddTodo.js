import React from "react";

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    console.log(text);
    const todo = {
      id: 4,
      text,
      done: false,
    };
    setTodos((prevTodos) => prevTodos.concat(todo));
    inputRef.current.value = '';
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodo;

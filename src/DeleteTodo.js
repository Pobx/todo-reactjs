function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this ?");
    if (confirmed) {
      setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
    }
  }

  return (
    <span
      role="button"
      onClick={handleDeleteTodo}
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
      }}
    >
      X
    </span>
  );
}

export default DeleteTodo;
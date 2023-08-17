import React, { useState, useEffect } from "react";
import "./styles/App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import FilterTodo from "./components/FilterTodo";

function App() {
  // State for managing todos and status filter
  const [todos, setTodos] = useState([]); // State to hold todo items
  const [statusFilter, setStatusFilter] = useState("all"); // State for filtering todos

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      { ...newTodo, id: Date.now(), status: "notCompleted" },
    ]);
  };

  // Function to edit an existing todo
  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to change the status of a todo
  const changeTodoStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  // Filtering todos based on the selected status filter
  const filteredTodos =
    statusFilter === "all"
      ? todos
      : todos.filter((todo) => todo.status === statusFilter);

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("todos");
    if (storedData) {
      setTodos(JSON.parse(storedData));
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      {/* App title */}
      <h1>My Todo</h1>

      {/* Form to add new todos */}
      <AddTodoForm onAdd={addTodo} />

      {/* Filter todos based on status */}
      <FilterTodo
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      {/* List of todos */}
      <TodoList
        todos={filteredTodos}
        onEdit={editTodo}
        onDelete={deleteTodo}
        onStatusChange={changeTodoStatus}
      />
    </div>
  );
}

export default App;

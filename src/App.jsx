import React, { useState, useEffect } from "react";
import "./styles/App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import FilterTodo from "./components/FilterTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      { ...newTodo, id: Date.now(), status: "notCompleted" },
    ]);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const changeTodoStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos =
    statusFilter === "all"
      ? todos
      : todos.filter((todo) => todo.status === statusFilter);

  useEffect(() => {
    // Retrieve stored card data from local storage
    const storedData = localStorage.getItem("todos");
    if (storedData) {
      setTodos(JSON.parse(storedData));
    }
  }, []); // Run only on component mount

  useEffect(() => {
    // Save todos to local storage whenever it changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>My Todo</h1>
      <AddTodoForm onAdd={addTodo} />
      <FilterTodo
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />
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

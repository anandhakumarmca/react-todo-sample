import React from "react";
import TodoItem from "./TodoItem";

// Functional component representing a list of todos
const TodoList = ({ todos, onEdit, onDelete, onStatusChange }) => {
  return (
    <div className="todo-list">
      {/* Map through each todo and render a TodoItem component */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Unique key for React list rendering
          todo={todo} // Current todo object
          onEdit={onEdit} // Callback for editing a todo
          onDelete={onDelete} // Callback for deleting a todo
          onStatusChange={onStatusChange} // Callback for changing todo status
        />
      ))}
    </div>
  );
};

export default TodoList;

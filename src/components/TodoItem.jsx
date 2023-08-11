import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete, onStatusChange }) => {
  return (
    <div className="todo-card">
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <select
        value={todo.status}
        onChange={(e) => onStatusChange(todo.id, e.target.value)}
      >
        <option value="notCompleted">Not Completed</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={() => onEdit(todo.id)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

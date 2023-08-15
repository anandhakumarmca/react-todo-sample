import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete, onStatusChange }) => {
  return (
    <div className="todo-card">
      <p>Name : {todo.name}</p>
      <p>Description : {todo.description}</p>
      <lebel>Status : </lebel>
      <select
        value={todo.status}
        onChange={(e) => onStatusChange(todo.id, e.target.value)}
      >
        <option value="notCompleted">Not Completed</option>
        <option value="completed">Completed</option>
      </select><br></br>
      <button onClick={() => onEdit(todo.id)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

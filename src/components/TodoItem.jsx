import React from "react";

const TodoItem = ({ todo, onEdit, onDelete, onStatusChange }) => {
  const getSelectClassName = () => {
    if (todo.status === "completed") {
      return "btn btn-success"; // Apply green color for completed todos
    } else if (todo.status === "notCompleted") {
      return "btn btn-danger"; // Apply red color for not completed todos
    }
    return "btn btn-info"; // Default color (info)
  };

  return (
    <div className="todo-card">
      <p>Name : {todo.name}</p>
      <p>Description : {todo.description}</p>
      <label>Status : </label>
      <select
        className={getSelectClassName()}
        value={todo.status}
        onChange={(e) => onStatusChange(todo.id, e.target.value)}
      >
        <option value="notCompleted" className="bg-danger text-white">Not Completed</option>
        <option value="completed" className="complete bg-success text-white">Completed</option>
      </select>
      <br></br>
      <button className="btn btn-info" onClick={() => onEdit(todo.id)}>
        Edit
      </button>
      <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

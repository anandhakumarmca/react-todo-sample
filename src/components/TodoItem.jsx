import React, { useState } from "react";

const TodoItem = ({ todo, onEdit, onDelete, onStatusChange }) => {

  const getSelectClassName = () => {
    if (todo.status === "completed") {
      return "btn btn-success"; // Apply green color for completed todos
    } else if (todo.status === "notCompleted") {
      return "btn btn-danger"; // Apply red color for not completed todos
    }
    return "btn btn-info"; // Default color (info)
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, editedTodo); // Call onEdit with the updated todo
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  return (
    <div className="todo-card">
      <p>
        Name :{" "}
        {isEditing ? (
          <input
            name="name"
            value={editedTodo.name}
            onChange={handleInputChange}
          />
        ) : (
          todo.name
        )}
      </p>
      <p>
        Description :{" "}
        {isEditing ? (
          <input
            name="description"
            value={editedTodo.description}
            onChange={handleInputChange}
          />
        ) : (
          todo.description
        )}
      </p>
      <label>Status : </label>
      <select
        className={getSelectClassName()}
        value={isEditing ? editedTodo.status : todo.status}
        onChange={(e) => onStatusChange(todo.id, e.target.value)}
      >
        <option value="notCompleted" className="bg-danger text-white">
          Not Completed
        </option>
        <option value="completed" className="complete bg-success text-white">
          Completed
        </option>
      </select>
      <br />
      {isEditing ? (
        <>
          <button className="btn btn-success" onClick={handleSaveEdit}>
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <button className="btn btn-info" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;

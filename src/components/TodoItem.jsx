import React, { useState } from "react";

// Functional component representing an individual todo item
const TodoItem = ({ todo, onEdit, onDelete, onStatusChange }) => {
  // Function to determine the class name for the select element
  const getSelectClassName = () => {
    if (todo.status === "completed") {
      return "btn btn-success"; // Apply green color for completed todos
    } else if (todo.status === "notCompleted") {
      return "btn btn-danger"; // Apply red color for not completed todos
    }
    return "btn btn-info"; // Default color (info)
  };

  // State for tracking editing state and edited todo
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  // Function to initiate editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to save the edited todo
  const handleSaveEdit = () => {
    onEdit(todo.id, editedTodo); // Call onEdit with the updated todo
    setIsEditing(false);
  };

  // Function to handle input change in editing mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  return (
    <div className="todo-card">
      {/* Display Name with input field in editing mode */}
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
      {/* Display Description with input field in editing mode */}
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
      {/* Select dropdown for changing status */}
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
      {/* Buttons for editing, saving, canceling, and deleting */}
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

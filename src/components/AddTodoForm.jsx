import React, { useState } from "react";

// Functional component representing a form to add new todos
const AddTodoForm = ({ onAdd }) => {
  // State variables for input fields and error message
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate and handle form submission
    if (!name || !description) {
      setError("Please fill in both fields."); // Display error message
      return;
    }

    // Call onAdd with the new todo details, then reset input fields and error
    onAdd({ name, description });
    setName("");
    setDescription("");
    setError("");
  };

  return (
    <div className="add-todo-form">
      {/* Form element */}
      <form onSubmit={handleSubmit}>
        {/* Input fields for todo name and description */}
        <div className="form-row">
          <input
            type="text"
            placeholder="Todo Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* Submit button */}
          <button type="submit">Add Todo</button>
        </div>
        {/* Display error message if present */}
        {error && <p className="error-message danger">{error}</p>}
      </form>
    </div>
  );
};

export default AddTodoForm;

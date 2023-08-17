import React, { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description) {
      setError("Please fill the both fields.");
      return;
    }

    onAdd({ name, description });
    setName("");
    setDescription("");
    setError("");
  };

  return (
    <div className="add-todo-form">
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Add Todo</button>
        </div>
        {error && <p className="error-message danger">{error}</p>}
      </form>
    </div>
  );
};

export default AddTodoForm;

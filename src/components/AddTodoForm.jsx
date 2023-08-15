import React, { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, description });
    setName("");
    setDescription("");
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
        <br></br>
      </form>
    </div>
  );
};

export default AddTodoForm;

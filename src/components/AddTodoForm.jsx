import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <div className="add-todo-form">
      <h2>Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoForm;

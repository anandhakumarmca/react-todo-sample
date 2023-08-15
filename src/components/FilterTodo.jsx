import React from 'react';

const FilterTodo = ({ statusFilter, onStatusFilterChange }) => {
  return (
    <div className="filter-todo">
      <label> Status Filter :</label>
      <select
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not Completed</option>
      </select>
    </div>
  );
};

export default FilterTodo;

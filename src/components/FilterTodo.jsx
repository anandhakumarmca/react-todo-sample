import React from "react";

// Functional component representing a filter for todo status
const FilterTodo = ({ statusFilter, onStatusFilterChange }) => {
  // Function to determine the class name for the select element
  const getSelectClassName = () => {
    if (statusFilter === "completed") {
      return "btn btn-success"; // Apply green color for completed filter
    } else if (statusFilter === "notCompleted") {
      return "btn btn-danger"; // Apply red color for not completed filter
    }
    return "btn btn-info"; // Default color (info)
  };

  return (
    <div className="todo-title">
      {/* My Todos label */}
      <div className="my-todos">
        <label>My Todos</label>
      </div>
      {/* Filter section */}
      <div className="filter-todo">
        <label> Status Filter : </label>
        {/* Dropdown to filter todo status */}
        <select
          className={getSelectClassName()}
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value)}
        >
          <option value="all" className="all bg-light">
            All
          </option>
          <option value="completed" className="complete bg-success text-white">
            Completed
          </option>
          <option value="notCompleted" className="bg-danger text-white">
            Not Completed
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterTodo;

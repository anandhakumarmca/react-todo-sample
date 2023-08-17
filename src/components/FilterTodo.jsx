import React from "react";

const FilterTodo = ({ statusFilter, onStatusFilterChange }) => {
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
      <div className="my-todos">
        <label>My Todos</label>
      </div>
      <div className="filter-todo">
        <label> Status Filter : </label>
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

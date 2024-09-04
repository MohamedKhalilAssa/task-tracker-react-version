import React from "react";

const Task = ({ id, task, time, checked, setShouldRefresh }) => {
  const deleteTask = () => {
    const currentTasks = JSON.parse(localStorage.getItem("tasks"));
    const newTasks = currentTasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setShouldRefresh(true);
  };
  return (
    <div
      className={`bg-gray-200 min-h-20 rounded-r-lg p-2 w-full mt-3 ${
        checked ? "border-l-4 border-red-500" : ""
      }`}
    >
      <h2 className="text-xl font-sans font-semibold flex justify-between">
        <span>{task}</span>{" "}
        <i
          onClick={deleteTask}
          className="close cursor-pointer text-red-500 text-2xl fas fa-times"
        ></i>
      </h2>
      <h6 className="text-gray-700 "> {time} </h6>
    </div>
  );
};

export default Task;

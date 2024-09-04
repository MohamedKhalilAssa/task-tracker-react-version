import React from "react";

const AppHeader = ({ isAddingTask, setIsAddingTask }) => {
  return (
    <div className="header flex justify-between ">
      <h1 className="text-3xl font-bold font-sans text-gray-800">
        TaskTracker
      </h1>
      {/* adding button  */}
      <button
        className={`bg-${
          isAddingTask ? "red" : "green"
        }-700 text-white px-4 py-2 rounded-lg hover:opacity-85`}
        onClick={() => setIsAddingTask(!isAddingTask)}
      >
        {isAddingTask ? "Cancel" : "Add Task"}
      </button>
    </div>
  );
};

export default AppHeader;

import React from "react";

const AddTaskModal = (props) => {
  const saveTask = (e) => {
    e.preventDefault();
    const taskData = {
      id: Math.floor(Math.random() * 1000),
      task: document.getElementById("Task").value,
      time: document.getElementById("Time").value,
      reminder: document.getElementById("reminder").checked,
    };
    let currentTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!currentTasks) {
      currentTasks = [];
    }
    currentTasks.push(taskData);
    localStorage.setItem("tasks", JSON.stringify(currentTasks));
    props.setIsAddingTask(false);
  };
  return (
    <form>
      <div class="inputs my-3">
        <label for="Task" className="text-lg text-gray-700 font-semibold">
          Task:
        </label>
        <input
          required
          type="text"
          name="Task"
          id="Task"
          placeholder="(e.g. Learning a new FrameWork)"
          className="w-full p-2 border border-black rounded"
        />
      </div>
      <div class="inputs mb-3">
        <label for="Time" className="text-lg text-gray-700 font-semibold">
          Date & Time:
        </label>
        <input
          required
          type="text"
          name="time"
          id="Time"
          placeholder="(e.g. March 1st 2022 - 11:00am)"
          className="w-full p-2 border border-black rounded"
        />
      </div>
      <div class="inputs flex items-center gap-4 mb-4">
        <label for="reminder" className="text-lg text-gray-700 font-semibold">
          Set Important:
        </label>
        <input
          type="checkbox"
          className="mt-0.5"
          name="reminder"
          id="reminder"
          value="true"
        />
      </div>
      <div className="btnContainer flex justify-center">
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:opacity-85 mx-auto"
          onClick={saveTask}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddTaskModal;

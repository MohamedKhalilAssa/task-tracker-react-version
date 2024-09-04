import { useEffect, useState } from "react";
import AddTaskModal from "./components/AddTaskModal";
import AppHeader from "./components/AppHeader";
import Task from "./components/task";
function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
    setShouldRefresh(false);
  }, [isAddingTask, shouldRefresh]);
  return (
    <div className="max-w-md sm:max-w-xl mx-auto mt-12 border p-4 border-black rounded-lg">
      <AppHeader
        isAddingTask={isAddingTask}
        setIsAddingTask={setIsAddingTask}
      />
      {isAddingTask && <AddTaskModal setIsAddingTask={setIsAddingTask} />}
      <div className="tasks mt-8">
        {tasks.map((task) => (
          <Task
            key={task.task}
            task={task.task}
            time={task.time}
            checked={task.reminder}
            id={task.id}
            setShouldRefresh={setShouldRefresh}
          />
        ))}
      </div>
      <footer className="fixed bottom-0 left-0 right-0 font-bold text-lg text-center">
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/mohamed-khalil-assaddiki-15511b25b/"
          className="underline text-blue-300"
        >
          Mohamed Khalil Assaddiki
        </a>{" "}
        as a part of learning react - 2024 &copy;
      </footer>
    </div>
  );
}

export default App;

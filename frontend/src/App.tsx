import { useEffect, useState } from "react";
import * as api from "./api/task.api";
import { ITask } from "./types/task.types";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    api.getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleAdd = async (title: string) => {
    // add task to server
    const res = await api.createTask(title);
    setTasks((prev) => [res.data, ...prev]);
  };

  const handleToggle = async (id: string) => {
    // toggle task
    const { data } = await api.toggleTask(id);
    setTasks((prev) =>
      prev.map((prevTask) => (prevTask._id === data._id ? data : prevTask)),
    );
  };

  const handleDelete = async (id: string) => {
    // toggle task
    await api.deleteTask(id);

    setTasks((prev) => prev.filter((prevTask) => prevTask._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Tasks</h1>

        <TaskInput onAdd={handleAdd} />

        <div className="space-y-2">
          {tasks?.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

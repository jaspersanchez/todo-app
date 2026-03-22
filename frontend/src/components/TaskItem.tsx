import { ITask } from "../types/task.types";

interface Props {
  task: ITask;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: Props) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition group">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task._id)}
          className="w-4 h-4 accent-indigo-600 cursor-pointer"
        />
        <span
          className={`text-sm ${task.isCompleted ? "line-through text-gray-400" : "text-gray-700"}`}
        >
          {task.title}
        </span>
      </div>

      <button
        className="text-xs text-red-400 opacity-0 group-hover:opacity-100
                   hover:text-red-600 transition"
        onClick={() => onDelete(task._id)}
      >
        remove
      </button>
    </div>
  );
};

export default TaskItem;

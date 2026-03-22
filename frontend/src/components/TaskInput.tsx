import React, { useState } from "react";

interface Props {
  onAdd: (title: string) => void;
}
const TaskInput = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        placeholder="Add task..."
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg px-4 py-2 text-sm font-medium"
      >
        add task
      </button>
    </form>
  );
};

export default TaskInput;

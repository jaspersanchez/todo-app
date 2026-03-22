// import axios
import axios from "axios";
import { ITask } from "../types/task.types";

const BASE = "http://localhost:4000/api/tasks";

/// get all task
export const getTasks = () => axios.get<ITask[]>(BASE);

// create task
export const createTask = (title: string) => axios.post<ITask>(BASE, { title });

// toggle task
export const toggleTask = (id: string) => axios.patch<ITask>(`${BASE}/${id}`);

// delete task
export const deleteTask = (id: string) =>
  axios.delete<{ message: string }>(`${BASE}/${id}`);

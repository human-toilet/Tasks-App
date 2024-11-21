import { useContext } from "react";
import { TaskContext } from "../context/task";

export function useTask(){
  const context = useContext(TaskContext)
  return context
}

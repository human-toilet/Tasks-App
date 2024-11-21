//dependencias
import { useContext } from "react";
import { TaskContext } from "../context/task";

//custom hook para consumir el contexto
export function useTask(){
  const context = useContext(TaskContext)
  return context
}

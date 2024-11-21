import { createContext, useState } from "react";

export const TaskContext = createContext()

export function TaskProvider ({ children }){
  const [tasks, setTasks] = useState([])

  const submitTask = (task) => {
    setTasks([
      ...tasks,
      task
    ])
  }

  const deleteTask = (key) => {
    setTasks([...tasks].filter((task) => task.id !== key))
  }

  return (
    <TaskContext.Provider 
      value={{
        tasks,
        submitTask,
        deleteTask
      }}>
      {children}
    </TaskContext.Provider>
  )
}

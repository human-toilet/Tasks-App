//dependencias
import { createContext, useState } from "react"

//contexto para manejar las tareas globalmente
export const TaskContext = createContext()

//componente proveedor del contexto
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

  const checkTask = (key) => {
    const newTasks = [...tasks]
    const index = tasks.findIndex((task) => task.id === key)

    newTasks[index] = {
      ...newTasks[index],
      completed: !newTasks[index].completed
    }

    setTasks(newTasks)
  }

  return (
    <TaskContext.Provider 
      value={{
        tasks,
        submitTask,
        deleteTask, 
        checkTask
      }}>
      {children}
    </TaskContext.Provider>
  )
}

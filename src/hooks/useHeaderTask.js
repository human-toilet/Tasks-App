//dependencias
import { useTask } from "./useTask"
import { useState } from "react"
import { getId } from "../utils"

//custom hook para manejar el formulario del header
export function useHeaderTask(){
  const { submitTask } = useTask()
  const [task, setTask] = useState('')

  const onChangeTask = (e) => {
    setTask(e.target.value)
  }

  const onSubmitTask = (e) => {
    e.preventDefault()
    const id = getId()

    submitTask({
      value: task,
      id,
      completed: false
    })}

  return {
    task,
    onChangeTask,
    onSubmitTask
  }
}
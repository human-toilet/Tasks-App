import { useTask } from "./useTask"
import { useState } from "react"
import { getId } from "../utils"

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
      id
    })}

  return {
    task,
    onChangeTask,
    onSubmitTask
  }
}
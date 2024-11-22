//dependencias
import { useId } from "react"
import { useHeaderTask } from '../hooks/useHeaderTask'
import '../assets/styles/HeaderTask.css'

//componente del header
export function HeaderTask(){
  const taskId = useId() 
  const { task, onSubmitTask, onChangeTask } = useHeaderTask()

  return (
    <header className="header-app">
      <h1 className="head">TASKS'S APP</h1>
      <form 
        onSubmit={onSubmitTask}
        className="header-form"
      >
        <label 
          htmlFor={taskId}
          className="header-label-form"
        >
          Task: 
        </label>
        <div className="header-input-button">
          <input 
            id={taskId} 
            placeholder="Ingress a task..."
            value={task}
            onChange={onChangeTask}
            className="header-input"
          />
          <button className="create-task-button">Create Task</button>
        </div>
      </form>
    </header>
  )
}
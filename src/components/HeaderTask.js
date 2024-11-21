//dependencias
import { useId } from "react"
import { useHeaderTask } from '../hooks/useHeaderTask';

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
        <input 
          id={taskId} 
          placeholder="TASK..."
          value={task}
          onChange={onChangeTask}
          className="header-input"
        />
        <button className="create-task-button">Create Task</button>
      </form>
    </header>
  )
}
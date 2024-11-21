import { useId } from "react"
import { useHeaderTask } from '../hooks/useHeaderTask';

export function HeaderTask(){
  const taskId = useId()
  const { task, onSubmitTask, onChangeTask } = useHeaderTask()

  return (
    <header>
      <h1>TASKS'S APP</h1>
      <form onSubmit={onSubmitTask}>
        <label htmlFor={taskId}>Task: </label>
        <input 
          id={taskId} 
          placeholder="TASK..."
          value={task}
          onChange={onChangeTask}
        />
        <button type="submit">Create Task</button>
      </form>
    </header>
  )
}
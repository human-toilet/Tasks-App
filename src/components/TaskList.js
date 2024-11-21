//dependencias
import { useId } from "react";
import { useTask } from "../hooks/useTask";

//componente para manejar la lista de tareas
export function TaskList(){
  const { tasks } = useTask()
  const { deleteTask, checkTask } = useTask() 
  const taskId = useId()

  return (
    <main>
      <ul className="task-list">
        {tasks.map((task, index) => (
            <li 
              key={task.id}
              className='task'  
            >
              <span className="task-name">{task.value}</span>
              <div className={task.completed ? 'task-completed' : 'not-task-completed'}>
              <label 
                htmlFor={taskId}
                className="task-label-check"
              >
                {task.completed ? 'completed: ' : 'not completed'}
              </label>
              <input
                type="checkbox"
                onChange={() => checkTask(index)}
                checked={task.completed}
                id={taskId}
                className="task-input-check"
              />
              </div>
              <button 
                onClick={() => deleteTask(task.id)}
                className="task-delete-button"
              >
                delete
              </button>
            </li>
          ))}
      </ul>
    </main>
  )
}
//dependencias
import { useTask } from "../hooks/useTask"
import '../assets/styles/TaskList.css'

//componente para manejar la lista de tareas
export function TaskList(){
  const { tasks } = useTask()
  const { deleteTask, checkTask } = useTask() 

  return (
    <main className="content">
      <ul className="task-list">
        {tasks.map((task) => (
            <li 
              key={task.id}
              className={`task ${task.completed ? 'task-completed' : 'not-task-completed'}`}  
            >
              <p className="task-name">{task.value}</p>
              <div className="task-handle">
                <div className="check-handle">
                  <label className="task-label-check">{task.completed ? 'completed: ' : 'not completed'}</label>
                  <input
                    type="checkbox"
                    onChange={() => checkTask(task.id)}
                    checked={task.completed}
                    className="task-input-check"
                  />
                </div>
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="task-delete-button"
                >
                  delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </main>
  )
}
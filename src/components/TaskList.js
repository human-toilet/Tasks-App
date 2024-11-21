import { useTask } from "../hooks/useTask";

export function TaskList(){
  const { tasks} = useTask()
  const { deleteTask } = useTask() 

  return (
    <main>
      <ul>
        {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.value}</span>
              <button onClick={() => deleteTask(task.id)}>delete</button>
            </li>
          ))}
      </ul>
    </main>
  )
}
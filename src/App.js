//dependencias
import './App.css';
import { HeaderTask } from './components/HeaderTask';
import { TaskList } from './components/TaskList';
import { TaskProvider } from './context/task';

export function App() {
  return (
    <TaskProvider>
      <div className='app'>
        <HeaderTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

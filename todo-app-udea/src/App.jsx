import './App.css'
import TaskForm from './components/TaskForm' // 👈
import TaskItem from './components/TaskItem' // 👈
import TaskStats from './components/TaskStats' // 👈
import TaskFilter from './components/TaskFilter' // 👈

import { useEffect, useState } from 'react' // 
import { getTasks, addTask, updateTask, deleteTask } from './services/TaskService' // 👈

function App() {
  
  const [tasks, setTasks] = useState([]); // 👈
  const [filterStatus, setFilterStatus] = useState('all'); // 👈

  // Get all tasks
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    }
    fetchTasks();
  });

  // Add task
  const handleAddTask = async (task) => {
    const newTask = await addTask({ ...task, status: 'in-progress' }); // Ensure default status
    setTasks([...tasks, newTask]);
  };
  // Update task
  const handleUpdateTask = async (id, updatedTask) => {
    const updated = await updateTask(id, updatedTask);
    setTasks(tasks.map((task) => task.id === id ? updated : task));
  };
  // Delete task  
  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }
  // Filter tasks
  const filterTasks = filterStatus == 'all' ? tasks : tasks.filter((task) => task.status === filterStatus);

  return (
    <>
      <div
      className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <h1
        className='text-3xl font-bold text-gray-700 mb-4'>
          Todo App
        </h1>
        <div className='w-full max-w-md bg-white shadow-md rounded-lg p-4'>
          <TaskForm onAddTask={handleAddTask} />
          <TaskFilter filter={filterStatus} setFilter={setFilterStatus} />
          {filterTasks.map((task) => (
            <TaskItem key={task.id} task={task} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
          ))}
          <TaskStats tasks={tasks} />
        </div>
      
      </div>
      
    </>
  )
}

export default App

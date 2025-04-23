import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskForm({ onAddTask }) {

  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask.trim() === "") {
      return;     
    }

    onAddTask(newTask);
    setNewTask('');
  }

  return (
    <form onSubmit={handleSubmit}
    className="flex items-center justify-between p-4 border-b border-gray-200 m-2">
      <input 
        type="text"
        value={newTask}
        placeholder="Agrega una nueva tarea"
        onChange={(e) => setNewTask(e.target.value)}
        className="flex-1 p-2 border rounded me-2"
      />
      <button
        type="submit"
        className="bg-primary text-white p-2 rounded me-2 hover:bg-blue-600 transition duration-200">
        Agrega Tarea
      </button>
    </form>
  );
}

export default TaskForm;
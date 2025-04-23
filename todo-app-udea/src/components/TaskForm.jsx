import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={newTask}
        placeholder="Agrega una nueva tarea"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit">
        Agrega Tarea
      </button>
    </form>
  );
}

export default TaskForm;
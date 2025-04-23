
function TaskItem({ task, onUpdate, onDelete}) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'not-started':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }    
  }
  return(
    <div className={`flex items-center justify-between p-4 border-b border-gray-200 ${getStatusColor(task.status)}`}>   
      <div className="flex items-center space-x-4">
       <div className="flex-1">
        <h4>{task.text}</h4>
        {/* Usuario
        FechaCreacion */}
        
      </div> 
       <select name="" id="" 
        value={task.status}
        onChange={(e) => onUpdate(task.id, e.target.value)}
        className={`p-2 rounded ${getStatusColor(task.status)}`}>
        
        <option value="completed">Completado</option>
        <option value="in-progress">En progreso</option>
        <option value="not-started">Sin iniciar</option>
       </select>

       <button
       onClick={() => onDelete(task.id)} 
       className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
       >
        Eliminar
       </button>
      </div>
    </div>
  );
}

export default TaskItem;
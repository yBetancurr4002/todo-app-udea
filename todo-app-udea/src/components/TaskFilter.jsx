import 'bootstrap/dist/css/bootstrap.min.css';

function TaskFilter({ filter, setFilter }) {
  return (
    <div
    className="flex items-center justify-between p-4 border-b border-gray-200">
      <button
      className={`text-white p-2 rounded bg-primary ${filter === 'all' ? 'bg-blue-400' : ''}`}
      onClick={() => setFilter('all')}>
        Todas
      </button>
      <button
      className={`text-white p-2 rounded bg-success ${filter === 'completed' ? 'bg-green-400' : ''}`}
      onClick={() => setFilter('completed')}>
        Completadas
      </button>
      <button
      className={`bg-blue-500 text-white p-2 rounded bg-warning ${filter === 'in-progress' ? 'bg-yellow-400' : ''}`}
      onClick={() => setFilter('in-progress')}>
        Pendientes
      </button>
      <button 
      className={`bg-blue-500 text-white p-2 rounded bg-danger ${filter === 'in-progress' ? 'bg-red-400' : ''}`}
      onClick={() => setFilter('not-started')}>
        Sin comenzar
      </button>
    </div>  
  );
}

export default TaskFilter;
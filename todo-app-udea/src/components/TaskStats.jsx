function TaskStats({ tasks }) {
  const pendingTasks = tasks.filter((task) => task.status == 'in-progress').length;
  const completedTasks = tasks.filter((task) => task.status == 'completed').length;
  const notStartedTasks = tasks.filter((task) => task.status == 'not-started').length;

  return (
    <div className="flex flex-orientation-column items-center justify-between p-4 border-b border-gray-200">
      <h2
      className="text-lg font-bold text-gray-700">
        Estadísticas</h2>
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-green-500">Completadas: {completedTasks}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">Pendientes: {pendingTasks}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-red-500">Sin iniciar: {notStartedTasks}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskStats;
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task.text}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
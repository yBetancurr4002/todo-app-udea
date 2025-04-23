// Conexión al Backend


const mock = [
  { id: 1, text: "Complete project documentation", status: "not-started" },
  { id: 2, text: "Review pull requests", status: "in-progress" },
  { id: 3, text: "Prepare for team meeting", status: "completed" }
];

// crud using the mock data

export const getTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock);
    }, 1000);
  });

}
export const addTask = (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTask = { id: (mock.length + 1), ...task };
      mock.push(newTask);
      resolve(newTask);
    }, 1000);
  });
};

// update task
export const updateTask = (id, updatedTask) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mock.findIndex((task) => task.id === id);
      if (index !== -1) {
        mock[index] = { ...mock[index], ...updatedTask };
        resolve(mock[index]);
      } else {
        resolve(null);
      }
    }, 1000);
  });

}
// delete task
export const deleteTask = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mock.findIndex((task) => task.id === id);
      if (index !== -1) {
        mock.splice(index, 1);
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
}
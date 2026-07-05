import tasks from "../data/tasks.json";

export const getTasks = async () => {
  return tasks;
};

// export const postTasks = async (newTasks) => {
//   newTasks.id = tasks.length + 1;

//   tasks.push(newTasks);
//   return { success: true, message: "Task added Successfully" };
// };

// export const postTasks = async (newTasks) => {
//   newTasks.id = tasks.length + 1;
//   tasks.push(newTasks);
//   return { success: true, message: "Task addedd Successfully" };
// };

export const postTasks = async (newTasks) => {
  newTasks.id = tasks.length + 1;
  tasks.push(newTasks);

  return { ok: true, message: "Task added Successfully!" };
};

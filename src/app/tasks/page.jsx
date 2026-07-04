import AddTask from "@/Components/AddTask";
import TasksCard from "@/Components/TasksCard";
import { createATask } from "@/lib/action";
import { getTasks } from "@/lib/tasks";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div className="w-11/12 mx-auto min-h-[100vh] mt-5 ">
      <div>Total Tasks: {tasks.length}</div>
      <div className="my-5">
        <AddTask createATask={createATask} />
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;

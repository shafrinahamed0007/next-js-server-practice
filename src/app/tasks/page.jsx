import TasksCard from "@/Components/TasksCard";
import { getTasks } from "@/lib/tasks";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div className="w-11/12 mx-auto min-h-[100vh] mt-5 ">
      Total Tasks: {tasks.length}

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            tasks.map(task => <TasksCard key={task.id} task={task} />)
        }

      </div>
    </div>
  );
};

export default TasksPage;

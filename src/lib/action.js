import { revalidatePath } from "next/cache";
import { postTasks } from "./tasks";

export const createATask = async (formData) => {
  "use server";
  // const title = formData.get("title");
  // const description = formData.get("description");
  // const status = formData.get("status");
  // const priority = formData.get("priority");
  // const assginedTo = formData.get("assginedTo");
  // console.log("Action form name: ", formData);

  const newTasks = Object.fromEntries(formData.entries());
  console.log("New Task Object: ", newTasks);

  //  await postTasks(newTasks);
  // await postTasks(newTasks);
  const res = await postTasks(newTasks);
  if (res.ok) {
    revalidatePath("/tasks");
  }
  return res;
};

import { Task } from "../types/types";

export const render = (tasks: Task[], todoContainer: HTMLElement) => {
  todoContainer.innerHTML = "";
  tasks.forEach((task, idx) => {
    const todoTask: HTMLElement = document.createElement("li");
    if (task.category) {
      todoTask.classList.add(task.category);
    }
    todoTask.textContent = task.title;

    const todoTaskCheckbox: HTMLInputElement = document.createElement("input");

    todoTaskCheckbox.type = "checkbox";

    todoTask.appendChild(todoTaskCheckbox);
    todoContainer.appendChild(todoTask);
    task.done
      ? ((todoTaskCheckbox.checked = true),
        todoTask.classList.add("task-complited"))
      : "";

    todoTaskCheckbox.addEventListener("click", () => {
      tasks[idx].done = true;
      todoTask.classList.toggle("task-complited");
    });
  });
};

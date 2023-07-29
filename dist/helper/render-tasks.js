export const render = (tasks, todoContainer) => {
    todoContainer.innerHTML = "";
    tasks.forEach((task, idx) => {
        const todoTask = document.createElement("li");
        if (task.category) {
            todoTask.classList.add(task.category);
        }
        todoTask.textContent = task.title;
        const todoTaskCheckbox = document.createElement("input");
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

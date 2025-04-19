const trashBin = `<svg xmlns="http://www.w3.org/2000/svg" fill="black" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>`;

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskElements = document.getElementsByClassName("task");

const taskList = document.querySelector(".task-list");
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
addTaskBtn.addEventListener("click", () => {
  addTask(taskInput.value);
});

function addTask(task) {
  if (task.trim().length > 0) {
    tasks.push({ task: task, isCompleted: false });
    taskInput.value = "";
  };
  updateTasksInStorage();
  renderTasks();
};

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTasksInStorage();
  renderTasks();
};

function toggleCompleteness(index) {
  tasks[index].isCompleted = !tasks[index].isCompleted;
  updateTasksInStorage();
  renderTasks();
};

function renderTasks() {
  taskList.innerHTML = "";
  tasks.sort((a, b) => a.isCompleted - b.isCompleted);

  tasks.forEach((taskObj, index) => {
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");
    if (taskObj.isCompleted) taskEl.classList.add("completed");
    taskEl.dataset.index = index;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "is-completed";
    checkbox.checked = taskObj.isCompleted;

    const text = document.createElement("p");
    text.textContent = taskObj.task;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-task";
    deleteBtn.innerHTML = trashBin;

    checkbox.addEventListener("change", () => toggleCompleteness(index));
    deleteBtn.addEventListener("click", () => deleteTask(index));

    taskEl.append(checkbox, text, deleteBtn);
    taskList.append(taskEl);
  });
}
renderTasks();

function updateTasksInStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

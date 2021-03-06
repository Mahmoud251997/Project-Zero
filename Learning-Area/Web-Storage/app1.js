const addButton = document.querySelector(".add");
const task = document.querySelector(".text");
const list = document.querySelector(".list");

window.onload = function () {
  if (sessionStorage.getItem("task")) {
    const preTasks = sessionStorage.getItem("task");
    const singleTask = document.createElement("li");
    singleTask.textContent = preTasks;
    list.appendChild(singleTask);
    alert("Your Tasks For Today : " + preTasks);
  } else {
    alert("No Tasks For Today");
  }
};

addButton.addEventListener("click", () => {
  const singleTask = document.createElement("li");
  singleTask.textContent = task.value;
  list.appendChild(singleTask);

  addSessionStorage(singleTask.textContent);
});

function addSessionStorage(theTask) {
  sessionStorage.setItem("task", theTask);
}

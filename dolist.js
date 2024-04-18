let tasks = [];
let inputFieldElement;
let addButton;
let listArea;

function loadHandlar() {
  actionAreaElement = document.getElementById("actionArea");

  //create inputfield+css class
  inputFieldElement = document.createElement("input");
  inputFieldElement.setAttribute("type", "text");
  inputFieldElement.setAttribute("placeholder", "Today I need to do...");
  inputFieldElement.classList.add("inputField");

  //ok create the add button+css class
  addButton = document.createElement("button");
  addButton.innerText = "+";
  addButton.addEventListener("click", addTaskToList);
  addButton.classList.add("addButton");
  actionAreaElement.appendChild(inputFieldElement);
  actionAreaElement.appendChild(addButton);
}

// displaying the task list added area
function displayList() {
  listArea = document.getElementById("listArea");
  listArea.innerHTML = "";

  //for loop for displaying the task
  for (let task of tasks) {
    //1#create the ul(task) element
    const listItem = document.createElement("li");
    const taskElement = document.createElement("ul");
    listItem.innerText = task;
    //  taskElement.innerText = task;

    //the done button
    doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.classList.add("doneButton");
    //linethrough task when clciked
    doneButton.addEventListener("click", () => {
      listItem.classList.add("donestrik");
    });
    //the remove button
    removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classList.add("removeButton");
    removeButton.addEventListener("click", removeTask);

    taskElement.appendChild(listItem);
    taskElement.appendChild(doneButton);
    taskElement.appendChild(removeButton);
    listArea.appendChild(taskElement);
  }
}
function addTaskToList() {
  const taskInput = inputFieldElement.value;

  if (taskInput !== "") {
    tasks.push(taskInput);
    displayList();
    // empty inputfield when button is clicked
    inputFieldElement.value = "";
  }
}

//when i click the remove button task removes
function removeTask() {}

window.addEventListener("load", loadHandlar);

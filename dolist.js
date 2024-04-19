//cite:https://chat.openai.com/share/b6155a09-e39d-4ce9-93c9-8ce65f7afc5a
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

  const storage = localStorage.getItem("storage");
  if (storage) {
    tasks = JSON.parse(storage);
    displayList();
  }
}

// so displaying the task list added area
function displayList() {
  listArea = document.getElementById("listArea");

  listArea.innerHTML = "";

  //for loop for displaying the task
  for (let i = 0; i < tasks.length; i++) {
    //1#create the ul(task) element
    const listItem = document.createElement("li");
    const taskElement = document.createElement("ul");
    listItem.innerText = tasks[i].toDo;

    //the done button+ strike
    doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.classList.add("doneButton");
    //next here linethrough task when clciked

    if (tasks[i].strike === true) {
      listItem.classList.add("donestrike");
      storage();
    }

    doneButton.addEventListener("click", () => {
      tasks[i].strike = true;
      if (tasks[i].strike === true) {
        listItem.classList.add("donestrike");
        storage();
      }
    });
    //the remove button + event
    removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classList.add("removeButton");
    removeButton.addEventListener("click", () => {
      const index = tasks.indexOf(tasks[i]);
      removeTask(index);
    });

    taskElement.appendChild(listItem);
    taskElement.appendChild(doneButton);
    taskElement.appendChild(removeButton);
    listArea.appendChild(taskElement);

    storage();
  }
}
function addTaskToList() {
  const taskInput = inputFieldElement.value;

  list = {
    toDo: taskInput,
    strike: false,
  };

  if (list !== "") {
    tasks.push(list);
    displayList();
    inputFieldElement.value = "";
  }

  storage();
}

//when i click the remove button task removes
function removeTask(index) {
  tasks.splice(index, 1);

  displayList();
  storage();
}

function storage() {
  localStorage.setItem("storage", JSON.stringify(tasks));
}

window.addEventListener("load", loadHandlar);

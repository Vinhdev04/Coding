const btn = document.querySelector(".btn");
console.log(btn);
const input = document.querySelector("#input-value");
console.log(input);
const listTodo = document.querySelector("#list");
console.log(listTodo);

// # handle event and callback functions
btn.addEventListener("click", function () {
  addTask();
});

// # handle event press "Enter" and callback functions
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

// # handle event click on list item and span, callback functions
listTodo.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// # function handle add task
function addTask() {
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  } else {
    const items = document.createElement("li");
    items.innerHTML = input.value;
    listTodo.appendChild(items);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    items.appendChild(span);
  }
  input.value = "";
  saveData();
}

// Function to save data to local storage

function saveData() {
  localStorage.setItem("data", `${listTodo.innerHTML}`);
}

// Function to load and show the stored data
function showData() {
  localStorage.getItem(`${listTodo.innerHTML}`);
}
showData();

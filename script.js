const inputbox = document.getElementById("input-box");
const displayError = document.getElementById("message");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value === "") {
    displayError.innerHTML = "You must write something";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
    inputbox.value = "";
    saveData(); 
  }
}

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData(); 
  }
});

showTask(); 

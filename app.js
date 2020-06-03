const addNote = document.getElementById("add-todo");
const charLimit = document.getElementById("char-limit");
const todoEntry = document.getElementById("todo-entry");
const taskList = document.querySelector("li");

// EVENTS
todoEntry.oninput = () => {
    let taskLength = todoEntry.value.length;
    charLimit.textContent = `${taskLength}/50`;
    charLimit.style.color = "white";
    // set the colour of the text based on the length of input
    if (taskLength < 10) {
        charLimit.textContent = `0${taskLength}/50`;
    } else if (taskLength >= 25 && taskLength < 50) {
        charLimit.style.color = "yellow";
    } else if (taskLength == 50) {
        charLimit.style.color = "red";
    }
};

addNote.addEventListener("click", (event) => {
    event.preventDefault();
    let task = todoEntry.value;
    // first empty the input box, focus it, clear the character counter
    todoEntry.value = "";
    todoEntry.focus();
    charLimit.textContent = "00/50";
    charLimit.style.color = "white";

    // create a div element with <p> containing the task
    const div = document.createElement("div");
    const label = document.createElement("label");
    const deleteButton = document.createElement("button");
    const innerDiv = document.createElement("div");

    // set attributes
    div.setAttribute("class", "task");
    deleteButton.setAttribute("id", "delete-button");
    innerDiv.setAttribute("id", "inner-div");
    label.setAttribute("id", "task-text");

    deleteButton.innerHTML = "x";
    label.textContent = task;

    innerDiv.appendChild(label);
    innerDiv.appendChild(deleteButton);
    div.appendChild(innerDiv);
    // show element in list
    taskList.appendChild(div);
    // add ability to delete each note
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(div);
    });
    // add ability to mark task as complete
    let completed = false;
    div.addEventListener("click", () => {
        if (!completed) {
            label.textContent = "Completed: " + label.textContent;
            div.setAttribute("class", "completed-task");
            label.setAttribute("id", "complete-task-text")
            completed = true;
        } else {
            label.textContent = task;
            div.setAttribute("class", "task");
            label.setAttribute("id", "task-text");
            completed = false;
        }
    });
});

const addNote = document.getElementById("add-todo");
const charLimit = document.getElementById("char-limit");
const todoEntry = document.getElementById("todo-entry");

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

addNote.onclick = (event) => event.preventDefault();

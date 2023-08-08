const todoentry = document.getElementById("TextField")
const addBtnForTextEntry = document.getElementById("AddBtn");
const TodoList = document.getElementById("UlForTodos");


function fetchingText() {
    addBtnForTextEntry.addEventListener('click' , () => {
        console.log(todoentry.value)
        let inputLenght = todoentry.value.length;
        console.log(inputLenght)
        if (inputLenght <= 0){
            alert("You cannot put an empty Todo Card")
            return;
        }
        const testingonly = `<li class="">
                                <div class="for-li-in-todo-list">
                                    <img onclick="taskCompleted(this)" src="images/unchecked.png" alt="">
                                    <span class="spanName">${todoentry.value}</span>
                                </div>
                                <button class="delete-button-in-todo-li" onclick="taskDeleted(this)"><img src="images/cross.png" alt=""></button>
                            </li>`;
        TodoList.innerHTML += testingonly

    });
};
fetchingText();

function taskCompleted(elem) {
    const mainli = elem.parentNode.parentNode
    if (mainli.classList.contains("after-completing-task")) {
        mainli.classList.remove("after-completing-task")
        elem.src = 'images/unchecked.png'
    } else {
        mainli.classList.add("after-completing-task")
        elem.src = 'images/checked.png'
    }
}

function taskDeleted(elem) {
    console.log("Deleted")
    elem.parentNode.remove();
}
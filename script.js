const inputBox= document.getElementById('input-box');
const listContainer= document.getElementById('list-container');
function addTask(event) {
    event.preventDefault();

    if (inputBox.value === '') {
        alert('You must add your task');
    } else {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";

        let taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.innerText = inputBox.value;

        
        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "\u00d7";
        deleteBtn.className = "delete-btn";

    
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        listContainer.appendChild(li);
    }

    inputBox.value = "";
}


listContainer.addEventListener("click", function(e){
    if (e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
    }else if (e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
    }
} , false); 
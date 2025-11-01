const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');

function updateCount() {
  taskCount.textContent = taskList.children.length;
}

function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();
  if(taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    li.remove();
    updateCount();
  }

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = '';
  updateCount();
}
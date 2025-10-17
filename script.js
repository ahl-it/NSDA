 
    const input = document.getElementById('addTask');
    const taskContainer = document.getElementById('taskContainer');

    addTask.addEventListener('click', function() {
      
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.placeholder = 'Add your task';

    
      taskContainer.appendChild(newInput);
    });
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const importanceSelect = document.getElementById('importance');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const importance = importanceSelect.value;

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }
        const taskItem = document.createElement('li');
        taskItem.className = importance;
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);
        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: black;"></i>';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => editTask(taskItem, taskContent));
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #000000;"></i>';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => deleteTask(taskItem));

        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #000000;"></i>';
        completeButton.className = 'complete';
        completeButton.addEventListener('click', () => completeTask(taskItem));
        taskButtons.appendChild(editButton);
        taskButtons.appendChild(deleteButton);
        taskButtons.appendChild(completeButton);

        taskItem.appendChild(taskButtons);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
    function editTask(taskItem, taskContent) {
        const newTaskText = prompt('Edit task', taskContent.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskContent.textContent = newTaskText;
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function completeTask(taskItem) {
        taskItem.classList.toggle('completed');
    }
});
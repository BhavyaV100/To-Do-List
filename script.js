// Declaring Variables
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = '<span>' + taskText + '</span><button class="editBtn">Edit</button><button class="deleteBtn">Delete</button>';

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Function to edit
function editTask(event) {
    const taskText = prompt('Edit task:', event.target.previousElementSibling.textContent);
    if (taskText !== null) {
        event.target.previousElementSibling.textContent = taskText;
}
}

// Function to delete
function deleteTask(event) {
    event.target.parentElement.remove();
}

// Event listener to add a new task
addTaskBtn.addEventListener("click", addTask);

// Event listener to edit
taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains('editBtn')) {
        editTask(event);
    }
    else if (event.target.classList.contains('deleteBtn')) {
        deleteTask(event);
    }
});

// Event listener to search
function searchTasks() {
    const searchTerm = searchInput.value.toLowerCase();
    const tasks = taskList.getElementsByTagName('li');
    Array.from(tasks).forEach(function(task) {
        const taskText = task.textContent.toLowerCase();
        if (taskText.includes(searchTerm)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

// Event listener for search input
searchInput.addEventListener('keyup', searchTasks);
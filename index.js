let taskList = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        taskList.push(newTask);
        taskInput.value = "";
        renderTasks();
    }
}

function toggleTaskStatus(id) {
    taskList = taskList.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    renderTasks();
}

function deleteTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    renderTasks();
}

function renderTasks() {
    let taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";
    taskList.forEach(task => {
        let taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        if (task.completed) {
            taskItem.classList.add("completed");
        }
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleTaskStatus(${task.id})">${task.completed ? 'Undo' : 'Done'}</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskListElement.appendChild(taskItem);
    });
}

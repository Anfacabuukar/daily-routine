
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const completionMessage = document.getElementById('completionMessage');
let tasks = [];

addTaskButton.addEventListener('click', () => {
    const time = document.getElementById('timeInput').value;
    const taskText = document.getElementById('taskInput').value;
    if (time && taskText) {
        const task = { time, text: taskText, completed: false };
        tasks.push(task);
        renderTasks();
        document.getElementById('timeInput').value = '';
        document.getElementById('taskInput').value = '';
    }
});

function renderTasks() {
    taskList.innerHTML = '';
    let allCompleted = true;

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `flex justify-between items-center p-2 my-1 rounded ${getRandomColor()}`;
        li.innerHTML = `
            <span class="${task.completed ? 'task-completed' : ''}">${task.time} - ${task.text}</span>
            <div>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})"/>
                <button class="ml-2 text-red-500" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        if (!task.completed) allCompleted = false;
    });

    completionMessage.innerText = allCompleted ? 'All tasks completed! Great job!' : '';
    completionMessage.className = allCompleted ? 'block' : 'hidden';
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function getRandomColor() {
    const colors = [
        'bg-red-400', 'bg-green-200', 'bg-blue-200', 'bg-gray-300',
        'bg-purple-400', 'bg-pink-200', 'bg-teal-200', 'bg-indigo-200'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

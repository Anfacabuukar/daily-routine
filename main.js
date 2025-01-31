const Login_Btn = document.getElementById("Btn")
const Routine = document.getElementById("Routine")
const form = document.getElementById("form")
const username = document.getElementById("name"); 
const password = document.getElementById("password"); 
const confirmPassword = document.getElementById("confirm"); 
Routine.style.display="none"


Login_Btn.addEventListener("click", (event)=>{
    event.preventDefault()

    if (username.value=="" || password.value=="" || confirmPassword.value ==""){
        alert("please fill the form")
    }

    else if (password.value.length<6){
       alert("Password mus contain atleast 6 characters")
        

    }
    else if (password.value !== confirmPassword.value){
        alert("Passwords do not much!")
     

    }
    else{
       form.style.display="none"
        Routine.style.display="block"
        
    }
    
})


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
        li.className = `flex justify-between items-center p-2 my-1 rounded px-10 ${getRandomColor()}`;
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
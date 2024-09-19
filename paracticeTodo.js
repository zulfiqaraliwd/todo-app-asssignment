/*
var arr = [];
function todo(){
    var create = document.querySelector("#create");
    arr.push(create.value); 
    create.value = "";
    console.log(arr); 
}
*/
var arr = [];
var editIndex = -1;

function todo() {
    const create = document.querySelector("#create");
    if (create.value.trim()) {
        arr.push(create.value);
        displayTasks();
        create.value = '';
    }
}

function displayTasks() {
    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = arr.map((task, index) => `
        <li>
            ${task}
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        </li>
    `).join('');
}

function editTask(index) {
    const create = document.querySelector("#create");
    create.value = arr[index];
    editIndex = index;
    toggleButtons(false);
}

function updateTask() {
    const create = document.querySelector("#create");
    if (editIndex >= 0 && create.value.trim()) {
        arr[editIndex] = create.value;
        displayTasks();
        create.value = '';
        editIndex = -1;
        toggleButtons(true);
    }
}

function deleteTask(index) {
    arr.splice(index, 1);
    displayTasks();
}

function toggleButtons(showAdd) {
    document.querySelector('#addButton').style.display = showAdd ? 'inline' : 'none';
    document.querySelector('#updateButton').style.display = showAdd ? 'none' : 'inline';
}

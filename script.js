const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = '<span>' + tasks[i].text + '</span> <button class="delete-btn" data-index="' + i + '">Удалить</button>';
    taskList.appendChild(li);
  }

  const buttons = document.querySelectorAll('.delete-btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      const index = parseInt(this.getAttribute('data-index'));
      tasks.splice(index, 1);
      renderTasks();
    };
  }
}

addButton.onclick = function () {
  const text = taskInput.value.trim();
  if (text === '') {
    alert('Напиши задачу, брат!');
    return;
  }
  tasks.push({ text: text });
  taskInput.value = '';
  renderTasks();
};

taskInput.onkeypress = function (e) {
  if (e.key === 'Enter') {
    addButton.onclick();
  }
};
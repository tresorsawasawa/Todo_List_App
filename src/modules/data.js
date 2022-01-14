class Task {
  constructor(description) {
    this.description = description;
    this.index = new Date();
    this.completed = false;
  }
}

const addTaskForm = document.querySelector('#add-task');
const data = JSON.parse(localStorage.getItem('Task-list')) || [];
addTaskForm.addEventListener('submit', () => {
  const inputTaskValue = document.querySelector('#add-task-input').value;
  if (inputTaskValue === '') return;
  const newTask = new Task(inputTaskValue);
  data.push(newTask);
  localStorage.setItem('Task-list', JSON.stringify(data));
});
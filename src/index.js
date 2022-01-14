import './style.css';
import Data from './modules/data.js';
import { addNewTask } from './modules/updateTasks.js';

const tasksList = document.querySelector('.list');
const addTaskInput = document.querySelector('.add-task-input');
const addIcon = document.querySelector('.plus-circle-icon');

addIcon.addEventListener('click', () => {
  if (addTaskInput.value === '') {
    alert('Field required');
  } else {
    addNewTask(addTaskInput.value, tasksList, Data);
    Data.displayTask();
    document.querySelector('.add-task-input').value = '';
  }
});

Data.displayTask();

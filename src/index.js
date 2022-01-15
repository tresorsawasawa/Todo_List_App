/* eslint-disable import/prefer-default-export */
import './style.css';
import { getTask } from './modules/data.js';

export const taskList = document.querySelector('.task-list-container');

function getInputValue(task) {
  return task.description;
}

getTask().forEach((task) => {
  taskList.innerHTML += `<li class="container task flex-center" draggable="true">
  <span class="left flex-center">
    <input id=${task.index} type="checkbox" ${
  task.completed ? 'checked' : ''
}  class="checkbox" />
    <form class="edit-form" action="/">
    <input data-index-number=${task.index} value='${getInputValue(task)}' class="${task.completed ? 'edit-task disabled' : 'edit-task'}" ${task.completed ? 'disabled' : ''}>
  </form>
  </span>
  <span class="right">
    <i class="fas fa-ellipsis-v"></i>
    <i class="far fa-trash-alt"></i>
  </span>
</li>`;
});

export const task = document.querySelectorAll('.task');
export const editTask = document.querySelectorAll('.edit-task');
const editForm = document.querySelectorAll('.edit-form');

editForm.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    editTask.forEach((taskList) => {
      getTask().forEach((task) => {
        if (taskList.dataset.indexNumber === task.index) {
          task.description = taskList.value;
          localStorage.setItem('Task-list', JSON.stringify(getTask()));
        }
      });
    });
  });
});

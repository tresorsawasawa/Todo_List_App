import './style.css';
import { getTask } from './modules/data.js';

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
    <input data-index-number=${task.index} value='${getInputValue(
  task,
)}' class="${task.completed ? 'edit-task disabled' : 'edit-task'}" ${
  task.completed ? 'disabled' : ''
} ></form>
  </span>
  <span class="right">
    <i class="fas fa-ellipsis-v"></i>
  </span>
</li>`;
});

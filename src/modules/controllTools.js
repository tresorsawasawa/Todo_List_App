/* eslint-disable no-restricted-globals */
/* eslint-disable import/prefer-default-export */
import { getTask } from './data.js';

export function deleteTask() {
  const clearTask = document.querySelector('.clear-task');
  clearTask.addEventListener('click', () => {
    if (getTask().length > 0) {
      const filterCompliteTask = getTask().filter((task) => task.completed !== true);
      localStorage.setItem('Task-list', JSON.stringify(filterCompliteTask));
      location.reload();
    }
  });
}

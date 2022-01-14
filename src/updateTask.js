/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { getTask } from './data';
import { checkbox, editTask } from './index';

export function updateTask() {
  checkbox.forEach((check) => {
    check.addEventListener('click', () => {
      editTask.forEach((task) => {
        if (check.id === task.dataset.indexNumber) {
          getTask().forEach((item) => {
            if (item.index === check.id) {
              console.log(item.completed);
              if (item.completed) {
                item.completed = false;
                localStorage.setItem('Task-list', JSON.stringify(getTask()));
                location.reload();
              } else {
                item.completed = true;
                localStorage.setItem('Task-list', JSON.stringify(getTask()));
                location.reload();
              }
            }
          });
        }
      });
    });
  });
}
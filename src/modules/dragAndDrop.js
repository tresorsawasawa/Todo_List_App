import { task, taskList } from './index.js';

export const dragDrop = () => {
  task.forEach((item) => {
    item.addEventListener('dragstart', () => {
      item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
    });
  });
  taskList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = dragAfterElement(taskList, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement === null) {
      taskList.appendChild(draggable);
    }
    taskList.insertBefore(draggable, afterElement);
  }
}
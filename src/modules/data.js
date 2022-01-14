import { sortTaskByIndex } from './completeTask.js';

export default class Data {
  static getAllData() {
    return JSON.parse(localStorage.getItem('Tasks')) || [];
  }

  static storeData(tasks) {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }

  static getData(index) {
    const allData = sortTaskByIndex(Data.getDataAll());
    return allData.filter((adata) => adata.index === index)[0];
  }

  static displayTask() {
    const allTasks = Data.getAllData();
    if (allTasks !== null) {
      sortTaskByIndex(allTasks);
    }

    const tasksList = document.querySelector('.list');
    tasksList.innerHTML = '';

    allTasks.forEach((task) => {
      const tasksList = document.querySelector('.list');
      tasksList.classList.add('task-list');

      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      taskItem.id = task.index;
      taskItem.innerHTML = `<form id="form2" class="form">
                              <input class="check-input" value="checked" type="checkbox" id="check">
                              <input class="task-input2" value="${task.description}" type="text" id="task">
                            </form >
                            <span class="ellipsis-icon clickable">&#8942;</i></span>
                           `;
      tasksList.appendChild(taskItem);
    });
  }
}

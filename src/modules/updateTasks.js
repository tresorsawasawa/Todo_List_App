import Data from './data.js';

export const addNewTask = (inputTask, tasksList, Data) => {
  const tasks = Data.getAllData() || [];
  const newTask = {
    index: tasks.length + 1,
    description: inputTask,
    completed: false,
  };
  tasks.push(newTask);
  const addTask = tasksList.querySelector('.task-item');
  Data.storeData(tasks);
  tasksList.innerHTML = addTask;
  Data.displayTask(tasksList);
};

export const deleteData = (icon, tasksList, Data) => {
  const modifyTask = icon.parentElement;
  const li = modifyTask.parentElement.parentElement;
  const allTasks = Data.getAllData();

  if (allTasks.length === 1) {
    Data.storeData([]);
  } else {
    allTasks.splice(li.id, 1);
    Data.storeData(allTasks);
  }
  const addTask = tasksList.querySelector('.task-item');
  Data.storeData(tasksList);
  tasksList.innerHTML = addTask;
  Data.displayTask(tasksList);
};

export function DeleteTask(DeleteIcons, tasksList) {
  DeleteIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      deleteData(icon, tasksList, Data);
    });
  });
}
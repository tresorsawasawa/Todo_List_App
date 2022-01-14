// import Data from './data.js';

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

export const deleteTask = '';
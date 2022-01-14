
// const tasks = [
//   {
//     index: 0,
//     description: 'Attend morning  session',
//     completed: true,
//   },
//   {
//     index: 1,
//     description: 'Submit the project',
//     completed: true,
//   },
//   {
//     index: 2,
//     description: 'Prepare my interview',
//     completed: true,
//   },
//   {
//     index: 3,
//     description: 'Attend the standup call',
//     completed: false,
//   },
// ];

const sortTaskByIndex = (tasks) => { tasks.sort((a, b) => a.index - b.index); };

export default class Data {
  static getAllData() {
    return JSON.parse(localStorage.getItem('Tasks'));
  }

  static storeData(tasks) {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }

  static getData(index) {
    const allData = sortTaskByIndex(Data.getDataAll());
    return allData.filter((adata) => adata.index === index)[0];
  }

  static displayTask(listContainer) {
    const allTasks = Data.getAllData();

    allTasks.forEach((atask) => {
      const listContainer = document.querySelector('.list');
      listContainer.classList.add('task-list');
      listContainer.innerHTML += `<li class="task-item">
                                      <form id="form2" class="form">
                                        <input class="check-input" value="checked" type="checkbox" id="check">
                                        <input class="task-input2" value="${atask.description}" type="text" id="task">
                                      </form >
                                      <span class="ellipsis-icon clickable">&#8942;</i></span>
                                 </li>`;
    });
    return listContainer;
  }
}

export const addNewTask = (inputTask, list, Data) => {
  const tasks = Data.getDataAll() || [];
  const newTask = {
    description: inputTask,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  Data.storeData(tasks);
};
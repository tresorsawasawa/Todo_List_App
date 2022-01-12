import './style.css';

const tasks = [
  {
    index: 0,
    description: 'Attend morning  session',
    completed: true,
  },
  {
    index: 1,
    description: 'Submit the project',
    completed: true,
  },
  {
    index: 2,
    description: 'Prepare my interview',
    completed: true,
  },
  {
    index: 3,
    description: 'Attend the standup call',
    completed: false,
  },
];

export default class Data {
  static getAllData() {
    return tasks;
  }

  static getData(index) {
    const allData = Data.getAllData();
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
                                      <span class="ellipsis-icon">&#8942;</i></span>
                                 </li>`;
    });
    return listContainer;
  }
}

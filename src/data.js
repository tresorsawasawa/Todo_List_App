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
      listContainer.classList.add(
        'w-100',
        'ps-0',
      );
      listContainer.innerHTML += `<li class="task-item d-flex w-100">
                                    <div class="d-flex w-100 position-relative">
                                    <form class="py-2 position-relative">
                                        <input class=" mt-3 position-absolute" value="checked" type="checkbox" id="check">
                                        <input class="form-control text-capitalize ps-4 py-2 w-100 task-input2 shadow-none" value="${atask.description}" type="text" id="task">
                                        </form >
                                        <span class="task-span"><i class="fa fa-ellipsis-v text-secondary"></i></span>
                                    </div>
                                 </li>`;
    });
    return listContainer;
  }
}

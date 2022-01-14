const sortTaskByIndex = (tasks) => tasks.sort((x, y) => x.index - y.index);

const markAsDone = [];

export { sortTaskByIndex, markAsDone };
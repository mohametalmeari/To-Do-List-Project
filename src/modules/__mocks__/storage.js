let mockedStorage = [];

const resetSrorage = () => {
  mockedStorage = [
    { description: 'Task 1', completed: false, index: 0 },
    { description: 'Task 2', completed: false, index: 1 },
    { description: 'Task 3', completed: false, index: 2 },
  ];
};

const UpdateToDoList = () => mockedStorage;

const UpdateStorage = (list) => {
  mockedStorage = list;
};

export { UpdateToDoList, UpdateStorage, resetSrorage };
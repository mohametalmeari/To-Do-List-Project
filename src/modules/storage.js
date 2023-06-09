const resetSrorage = () => [];

const UpdateToDoList = () => {
  if (typeof localStorage.getItem('to_do_list') !== 'undefined' && localStorage.getItem('to_do_list') !== null) {
    return JSON.parse(localStorage.getItem('to_do_list'));
  }
  return resetSrorage();
};

const UpdateStorage = (list) => localStorage.setItem('to_do_list', JSON.stringify(list));

export { UpdateToDoList, UpdateStorage, resetSrorage };
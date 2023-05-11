import CheckIfCompleted from './complete.js';
import UpdateToDoList from './UpdateToDoList.js';

let toDoList = [];
const copyList = () => toDoList;
const UpdateStorage = () => localStorage.setItem('to_do_list', JSON.stringify(toDoList));

const DelFun = (i) => {
  toDoList = UpdateToDoList();
  toDoList = toDoList.filter((item) => item.index !== i);
  const listItem = document.querySelectorAll('.item');
  listItem[i].remove();
  UpdateStorage();
};

const EditFun = (i) => {
  toDoList = UpdateToDoList();
  const editField = document.querySelectorAll('.edit-field');
  editField[i].value = toDoList[i].description;
  editField[i].focus();
  UpdateStorage();
};

const checkFun = (i) => {
  toDoList = UpdateToDoList();
  const checkIcon = document.querySelectorAll('.check-icon');
  toDoList[i].completed = CheckIfCompleted(checkIcon[i].checked);
  UpdateStorage();
};

const OkFun = (i) => {
  toDoList = UpdateToDoList();
  const editField = document.querySelectorAll('.edit-field');
  const span = document.querySelectorAll('.task-text');
  toDoList.forEach((item) => {
    if (item.index === i) {
      item.description = editField[i].value;
    }
  });
  span[i].innerHTML = editField[i].value;
  UpdateStorage();
};

const AddFun = () => {
  toDoList = UpdateToDoList();
  const addField = document.getElementById('add-field');
  const index = (toDoList.length !== 0) ? toDoList[toDoList.length - 1].index + 1 : 0;
  toDoList.push({
    description: addField.value,
    completed: false,
    index,
  });
  UpdateStorage();
};

export {
  DelFun, EditFun, checkFun, OkFun, AddFun, copyList,
};

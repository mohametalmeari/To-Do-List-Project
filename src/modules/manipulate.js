let toDoList = [];
const UpdateStorage = () => localStorage.setItem('to_do_list', JSON.stringify(toDoList));
const UpdateToDoList = () => {
  if (typeof localStorage.getItem('to_do_list') !== 'undefined' && localStorage.getItem('to_do_list') !== null) {
    toDoList = JSON.parse(localStorage.getItem('to_do_list'));
  }else {
    toDoList = [];
  }
  }
import CheckIfCompleted from './complete.js';
const DelFun = (i) => {
    UpdateToDoList();
    toDoList = toDoList.filter((item) => item.index !== i);
    const listItem = document.querySelectorAll('.item');
    listItem[i].remove();
    UpdateStorage();
  };

  const EditFun = (i) => {
    UpdateToDoList();
    const editField = document.querySelectorAll('.edit-field');
    editField[i].value = toDoList[i].description;
    editField[i].focus();
    UpdateStorage();
  };

  const checkFun = (i) => {
    UpdateToDoList();
    const checkIcon = document.querySelectorAll('.check-icon');
    toDoList[i].completed = CheckIfCompleted(checkIcon[i].checked);
    UpdateStorage();
  };

  const OkFun = (i) => {
    UpdateToDoList();
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

  export  {DelFun, EditFun, checkFun, OkFun} ;
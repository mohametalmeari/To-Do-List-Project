import './style.css';
import Enter from './images/enter.png';
import Refresh from './images/refresh.png';
import Del from './images/del.png';
import Edit from './images/edit.png';
import Ok from './images/ok.png';
import Exit from './images/exit.png';
import Dots from './images/dots.png';
import { ShowElement, HideElement } from './javascript.js';

let toDoList = [];
const refreshIcon = document.getElementById('refresh-icon');
const enterIcon = document.getElementById('enter-icon');
const addField = document.getElementById('add-field');
const cleanBtn = document.getElementById('clean-btn');
const listContainer = document.getElementById('list-container');
let ShowList;
refreshIcon.src = Refresh;
enterIcon.src = Enter;

if (localStorage.getItem('to_do_list') !== null) {
  toDoList = JSON.parse(localStorage.getItem('to_do_list'));
}

const UpdateStorage = () => localStorage.setItem('to_do_list', JSON.stringify(toDoList));

const UpdateIndex = (x) => {
  for (let i = x; i < toDoList.length; i += 1) {
    toDoList[i].index = i;
  }
  UpdateStorage();
  ShowList();
};

const EditFun = (varX) => {
  const editArrItem = toDoList.filter((item) => item.index === varX);
  return editArrItem[0].description;
};

const DelFun = (varX) => {
  toDoList = toDoList.filter((item) => item.index !== varX);
};

const OkFun = (varX, val) => {
  toDoList = toDoList.filter((item) => {
    if (item.index === varX) {
      item.description = val;
    }
    return true;
  });
};

const CheckFun = (varI, check) => {
  toDoList[varI].completed = check;
};

ShowList = () => {
  listContainer.innerHTML = '';
  for (let i = 0; i < toDoList.length; i += 1) {
    const listItem = document.createElement('li');
    const checkIcon = document.createElement('input');
    const span = document.createElement('span');
    const editField = document.createElement('input');
    const delIcon = document.createElement('img');
    const editIcon = document.createElement('img');
    const okIcon = document.createElement('img');
    const xIcon = document.createElement('img');
    const dotsIcon = document.createElement('img');

    const x = toDoList[i].index;
    checkIcon.type = 'checkbox';
    checkIcon.checked = toDoList[i].completed;
    span.innerHTML = toDoList[i].description;
    editField.style.flexGrow = 1;

    delIcon.src = Del;
    editIcon.src = Edit;
    okIcon.src = Ok;
    xIcon.src = Exit;
    dotsIcon.src = Dots;

    listItem.appendChild(checkIcon);
    listItem.appendChild(span);
    listItem.appendChild(editField);
    listItem.appendChild(delIcon);
    listItem.appendChild(editIcon);
    listItem.appendChild(okIcon);
    listItem.appendChild(xIcon);
    listItem.appendChild(dotsIcon);

    HideElement([editField, delIcon, editIcon, okIcon, xIcon]);

    listContainer.appendChild(listItem);

    checkIcon.addEventListener('change', () => {
      CheckFun(i, checkIcon.checked);
      UpdateStorage();
    });
    dotsIcon.addEventListener('click', () => {
      ShowElement([checkIcon, span, delIcon, editIcon, xIcon]);
      HideElement([editField, okIcon, dotsIcon]);
    });

    xIcon.addEventListener('click', () => {
      ShowElement([checkIcon, span, dotsIcon]);
      HideElement([editField, delIcon, editIcon, okIcon, xIcon]);
    });

    editIcon.addEventListener('click', () => {
      editField.value = EditFun(x);
      ShowElement([editField, okIcon, xIcon]);
      HideElement([checkIcon, span, delIcon, editIcon, dotsIcon]);
    });

    delIcon.addEventListener('click', () => {
      listItem.remove();
      DelFun(x);
      UpdateStorage();
      UpdateIndex(x);
    });

    okIcon.addEventListener('click', () => {
      OkFun(x, editField.value);
      UpdateStorage();
      span.innerHTML = editField.value;
      ShowElement([checkIcon, span, dotsIcon]);
      HideElement([editField, delIcon, editIcon, okIcon, xIcon]);
    });
  }
};

ShowList();

enterIcon.addEventListener('click', () => {
  if (toDoList.length !== 0) {
    toDoList.push({
      description: addField.value,
      completed: false,
      index: toDoList[toDoList.length - 1].index + 1,
    });
  } else {
    toDoList.push({
      description: addField.value,
      completed: false,
      index: 0,
    });
  }
  ShowList();
  UpdateStorage();
  addField.value = '';
  addField.focus();
});

addField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    enterIcon.click();
  }
});

cleanBtn.addEventListener('click', () => {
  toDoList = toDoList.filter((item) => item.completed === false);
  UpdateStorage();
  UpdateIndex(0);
});
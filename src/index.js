import './style.css';
import Enter from './images/enter.png';
import Refresh from './images/refresh.png';
import Del from './images/del.png';
import Edit from './images/edit.png';
import Ok from './images/ok.png';
import Exit from './images/exit.png';
import Dots from './images/dots.png';
import { ShowElement, HideElement } from './modules/visibility.js';
import CheckIfCompleted from './modules/complete.js';

let toDoList = [];
const refreshIcon = document.getElementById('refresh-icon');
const enterIcon = document.getElementById('enter-icon');
const addField = document.getElementById('add-field');
const clearBtn = document.getElementById('clear-btn');
let listContainer = document.getElementById('list-container');
let dragFun = () => {};

refreshIcon.src = Refresh;

enterIcon.src = Enter;

if (typeof localStorage.getItem('to_do_list') !== 'undefined' && localStorage.getItem('to_do_list') !== null) {
  toDoList = JSON.parse(localStorage.getItem('to_do_list'));
}

const UpdateStorage = () => localStorage.setItem('to_do_list', JSON.stringify(toDoList));

const UpdateIndex = (x) => {
  for (let i = x; i < toDoList.length; i += 1) {
    toDoList[i].index = i;
  }
  UpdateStorage();
};

const ListenToBtns = () => {
  const renewList = listContainer.cloneNode(true);
  listContainer.replaceWith(renewList);
  listContainer = document.getElementById('list-container');

  const listItem = document.querySelectorAll('.item');
  const checkIcon = document.querySelectorAll('.check-icon');
  const span = document.querySelectorAll('.task-text');
  const editField = document.querySelectorAll('.edit-field');
  const delIcon = document.querySelectorAll('.del-icon');
  const editIcon = document.querySelectorAll('.edit-icon');
  const okIcon = document.querySelectorAll('.ok-icon');
  const xIcon = document.querySelectorAll('.x-icon');
  const dotsIcon = document.querySelectorAll('.dots-icon');

  const checkFun = (i) => {
    toDoList[i].completed = CheckIfCompleted(checkIcon[i].checked);
    UpdateStorage();
  };
  const EditFun = (i) => {
    editField[i].value = toDoList[i].description;
    editField[i].focus();
  };
  const DelFun = (i) => {
    toDoList = toDoList.filter((item) => item.index !== i);
    listItem[i].remove();
    UpdateIndex(0);
    ListenToBtns();
    dragFun();
  };
  const OkFun = (i) => {
    toDoList.forEach((item) => {
      if (item.index === i) {
        item.description = editField[i].value;
      }
    });
    span[i].innerHTML = editField[i].value;
    UpdateStorage();
  };

  for (let i = 0; i < toDoList.length; i += 1) {
    checkIcon[i].addEventListener('change', () => {
      checkFun(i);
    });
    dotsIcon[i].addEventListener('click', () => {
      ShowElement([checkIcon[i], span[i], delIcon[i], editIcon[i], xIcon[i]]);
      HideElement([editField[i], okIcon[i], dotsIcon[i]]);
    });
    xIcon[i].addEventListener('click', () => {
      ShowElement([checkIcon[i], span[i], dotsIcon[i]]);
      HideElement([editField[i], delIcon[i], editIcon[i], okIcon[i], xIcon[i]]);
    });
    editIcon[i].addEventListener('click', () => {
      ShowElement([editField[i], okIcon[i], xIcon[i]]);
      HideElement([checkIcon[i], span[i], delIcon[i], editIcon[i], dotsIcon[i]]);
      EditFun(i);
    });
    delIcon[i].addEventListener('click', () => {
      DelFun(i);
    });
    okIcon[i].addEventListener('click', () => {
      OkFun(i);
      ShowElement([checkIcon[i], span[i], dotsIcon[i]]);
      HideElement([editField[i], delIcon[i], editIcon[i], okIcon[i], xIcon[i]]);
    });

    editField[i].addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        okIcon[i].click();
      } else if (event.key === 'Escape') {
        xIcon[i].click();
      }
    });
  }
};

const ShowList = () => {
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

    listItem.classList.add('item');
    checkIcon.classList.add('check-icon');
    span.classList.add('task-text');
    editField.classList.add('edit-field');
    delIcon.classList.add('del-icon');
    editIcon.classList.add('edit-icon');
    okIcon.classList.add('ok-icon');
    xIcon.classList.add('x-icon');
    dotsIcon.classList.add('dots-icon');
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
  }
  ListenToBtns();
};

ShowList();

enterIcon.addEventListener('click', () => {
  const index = (toDoList.length !== 0) ? toDoList[toDoList.length - 1].index + 1 : 0;
  toDoList.push({
    description: addField.value,
    completed: false,
    index,
  });
  ShowList();
  UpdateStorage();
  addField.value = '';
  addField.focus();
  dragFun();
});

addField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    enterIcon.click();
  }
});

clearBtn.addEventListener('click', () => {
  toDoList = toDoList.filter((item) => item.completed === false);
  UpdateStorage();
  ShowList();
  dragFun();
});

dragFun = () => {
  let fromIndex;
  let toIndex;
  let items = listContainer.querySelectorAll('.item');
  items.forEach((item) => {
    item.draggable = true;
    item.addEventListener('dragstart', (e) => {
      setTimeout(() => item.classList.add('dragging'), 0);
      fromIndex = Array.from(items).indexOf(e.target);
    });
    item.addEventListener('dragend', (e) => {
      item.classList.remove('dragging');
      items = listContainer.querySelectorAll('.item');
      toIndex = Array.from(items).indexOf(e.target);
      const dragedItem = toDoList[fromIndex];
      dragedItem.index = toIndex;
      toDoList.splice(fromIndex, 1);
      toDoList.splice(toIndex, 0, dragedItem);
      UpdateIndex(0);
      ListenToBtns();
      dragFun();
    });
  });

  const initlistContainer = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');
    const siblings = [...listContainer.querySelectorAll('.item:not(.dragging)')];
    const nextSib = siblings.find((sib) => e.clientY <= sib.offsetTop + sib.offsetHeight / 2);
    listContainer.insertBefore(draggingItem, nextSib);
  };

  listContainer.addEventListener('dragover', initlistContainer);
  listContainer.addEventListener('dragenter', (e) => e.preventDefault());
};
dragFun();

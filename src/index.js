import './style.css';
import Dots from './dots.png';
import Enter from './enter.png';
import Refresh from './refresh.png';

const toDoList = [
  {
    description: 'Reset my PC',
    completed: true,
    index: 0,
  },
  {
    description: 'Call my family',
    completed: true,
    index: 1,
  },
  {
    description: 'Call my fasadasmily',
    completed: true,
    index: 2,
  },
  {
    description: 'Call my family',
    completed: false,
    index: 3,
  },
  {
    description: 'Call my family',
    completed: true,
    index: 4,
  },
];

const refreshIcon = document.getElementById('refresh-icon');
refreshIcon.src = Refresh;
const enterIcon = document.getElementById('enter-icon');
enterIcon.src = Enter;

const listContainer = document.getElementById('list-container');
const ShowList = () => {
  listContainer.innerHTML = '';
  for (let i = 0; i < toDoList.length; i += 1) {
    const listItem = document.createElement('li');
    const checkIcon = document.createElement('input');
    const span = document.createElement('span');
    const dotsIcon = document.createElement('img');

    listItem.id = `task${toDoList[i].index}`;
    checkIcon.type = 'checkbox';
    checkIcon.checked = toDoList[i].completed;
    span.innerHTML = toDoList[i].description;
    dotsIcon.src = Dots;

    listItem.appendChild(checkIcon);
    listItem.appendChild(span);
    listItem.appendChild(dotsIcon);
    listContainer.appendChild(listItem);
  }
};
ShowList();
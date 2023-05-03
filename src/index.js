import './style.css';
import Dots from './dots.png';
import Enter from './enter.png';
import Refresh from './refresh.png';

const toDoList = [];

const refreshIcon = document.getElementById('refresh-icon');
refreshIcon.src = Refresh;
const enterIcon = document.getElementById('enter-icon');
enterIcon.src = Enter;
const addField = document.getElementById('add-field');

enterIcon.addEventListener('click', () => {
if (toDoList.length !== 0) {
  toDoList.push(  {
    description: addField.value,
    completed: false,
    index: toDoList[toDoList.length-1].index + 1,
  },)
}else{
  toDoList.push(  {
    description: addField.value,
    completed: false,
    index: 0,
  },)
}
ShowList();
localStorage.setItem('to_do_list', JSON.stringify(toDoList));
})

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
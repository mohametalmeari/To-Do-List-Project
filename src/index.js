import './style.css';
import Enter from './enter.png';
import Refresh from './refresh.png';
import Del from './del.png';
import Edit from './edit.png';
import Ok from './ok.png';
import Exit from './exit.png';
import Dots from './dots.png';


let toDoList = [];
const refreshIcon = document.getElementById('refresh-icon');
const enterIcon = document.getElementById('enter-icon');
const addField = document.getElementById('add-field');
const cleanBtn = document.getElementById('clean-btn');

cleanBtn.addEventListener('click', () => {
  toDoList = toDoList.filter(item => item.completed === false);
  localStorage.setItem('to_do_list', JSON.stringify(toDoList));
  ShowList();
})

if (localStorage.getItem('to_do_list') !== null) {
  toDoList = JSON.parse(localStorage.getItem('to_do_list'));
}


refreshIcon.src = Refresh;
enterIcon.src = Enter;
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
addField.value ="";
addField.focus();
})

const listContainer = document.getElementById('list-container');
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

    listItem.id = `task${toDoList[i].index}`;
    const x = toDoList[i].index;
    const taskValue = toDoList[i].description;
    checkIcon.type = 'checkbox';
    checkIcon.checked = toDoList[i].completed;
    span.innerHTML = toDoList[i].description;
    editField.style.flexGrow = 1;

    delIcon.src =Del;
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

    editField.style.display = 'none';
    delIcon.style.display = 'none';
    editIcon.style.display = 'none';
    okIcon.style.display = 'none';
    xIcon.style.display = 'none';
    
    listContainer.appendChild(listItem);

    checkIcon.addEventListener("change", function() {
        toDoList[i].completed=this.checked;
        localStorage.setItem('to_do_list', JSON.stringify(toDoList));
    });
    dotsIcon.addEventListener('click', () => {
      checkIcon.style.display = 'block';
      span.style.display = 'block';
      editField.style.display = 'none';
      delIcon.style.display = 'block';
      editIcon.style.display = 'block';
      okIcon.style.display = 'none';
      xIcon.style.display = 'block';
      dotsIcon.style.display = 'none';
    })

    xIcon.addEventListener('click', () => {
      checkIcon.style.display = 'block';
      span.style.display = 'block';
      editField.style.display = 'none';
      delIcon.style.display = 'none';
      editIcon.style.display = 'none';
      okIcon.style.display = 'none';
      xIcon.style.display = 'none';
      dotsIcon.style.display = 'block';
    })

    editIcon.addEventListener('click', () => {
      let editArrItem = toDoList.filter(item => item.index === x);
      
      editField.value =editArrItem[0].description;
      checkIcon.style.display = 'none';
      span.style.display = 'none';
      editField.style.display = 'block';
      delIcon.style.display = 'none';
      editIcon.style.display = 'none';
      okIcon.style.display = 'block';
      xIcon.style.display = 'block';
      dotsIcon.style.display = 'none';
    })

    delIcon.addEventListener('click', () => {
      listItem.remove();
      toDoList = toDoList.filter(item => item.index !== x);
      localStorage.setItem('to_do_list', JSON.stringify(toDoList));
    })

    okIcon.addEventListener('click', () => {
      toDoList = toDoList.filter(item => {
        if (item.index === x) {
          item.description = editField.value;;
        }
        return true;
      });
      localStorage.setItem('to_do_list', JSON.stringify(toDoList));
      span.innerHTML= editField.value;

      checkIcon.style.display = 'block';
      span.style.display = 'block';
      editField.style.display = 'none';
      delIcon.style.display = 'none';
      editIcon.style.display = 'none';
      okIcon.style.display = 'none';
      xIcon.style.display = 'none';
      dotsIcon.style.display = 'block';
    })
  }
};
ShowList();
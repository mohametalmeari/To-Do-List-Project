import {
  DelFun, AddFun, copyList, EditFun, OkFun, ClearFun, checkFun, resetSrorage,
} from './util.js';

jest.mock('./storage.js');
const fillPage = () => {
  resetSrorage();
  document.body.innerHTML = `
<div class="main-container">
    <div>
        <h1>Today's To Do</h1>
        <img id="refresh-icon" alt="" src="http://localhost:8080/5c3f0cd636350fc9537f.png">
    </div>
    <div>
        <input id="add-field" type="text" placeholder="Add to your list...">
        <img id="enter-icon" alt="" src="http://localhost:8080/a6be7477364f2b104fba.png">
    </div>
    
    <ul id="list-container">
      <li class="item" draggable="true"><img class="drag-icon" src="http://localhost:8080/50f11f989deb97e7e1fa.png"><input class="check-icon" type="checkbox"><span class="task-text">Task 1</span><input class="edit-field" style="flex-grow: 1; display: none;"><img class="del-icon" src="http://localhost:8080/ee4b58337bd3477db466.png" style="display: none;"><img class="edit-icon" src="http://localhost:8080/6f6481dd783e4c5d194e.png" style="display: none;"><img class="ok-icon" src="http://localhost:8080/852ad271cd73ed3f901c.png" style="display: none;"><img class="x-icon" src="http://localhost:8080/cfbc2abb610e7e0ca089.png" style="display: none;"><img class="dots-icon" src="http://localhost:8080/3a9493a080887ddaef77.png"></li>
      <li class="item" draggable="true"><img class="drag-icon" src="http://localhost:8080/50f11f989deb97e7e1fa.png"><input class="check-icon" type="checkbox"><span class="task-text">Task 2</span><input class="edit-field" style="flex-grow: 1; display: none;"><img class="del-icon" src="http://localhost:8080/ee4b58337bd3477db466.png" style="display: none;"><img class="edit-icon" src="http://localhost:8080/6f6481dd783e4c5d194e.png" style="display: none;"><img class="ok-icon" src="http://localhost:8080/852ad271cd73ed3f901c.png" style="display: none;"><img class="x-icon" src="http://localhost:8080/cfbc2abb610e7e0ca089.png" style="display: none;"><img class="dots-icon" src="http://localhost:8080/3a9493a080887ddaef77.png"></li>
      <li class="item" draggable="true"><img class="drag-icon" src="http://localhost:8080/50f11f989deb97e7e1fa.png"><input class="check-icon" type="checkbox"><span class="task-text">Task 3</span><input class="edit-field" style="flex-grow: 1; display: none;"><img class="del-icon" src="http://localhost:8080/ee4b58337bd3477db466.png" style="display: none;"><img class="edit-icon" src="http://localhost:8080/6f6481dd783e4c5d194e.png" style="display: none;"><img class="ok-icon" src="http://localhost:8080/852ad271cd73ed3f901c.png" style="display: none;"><img class="x-icon" src="http://localhost:8080/cfbc2abb610e7e0ca089.png" style="display: none;"><img class="dots-icon" src="http://localhost:8080/3a9493a080887ddaef77.png"></li>
    </ul>
    <button id="clear-btn" href="">Clear All Completed</button>
</div>

`;
};

describe('Delete Functionality', () => {
  test('HTML List Length Test', () => {
    fillPage();
    DelFun(0);
    const listItem = document.querySelectorAll('.item');
    expect(listItem.length).toBe(2);
  });
  test('List Array Length Test', () => {
    fillPage();
    DelFun(1);
    expect(copyList().length).toBe(2);
  });
  test('HTML List Item Position Test', () => {
    fillPage();
    DelFun(0);
    const listItem = document.querySelectorAll('.item span');
    expect(listItem[0].innerHTML).toBe('Task 2');
  });
});

describe('Add Functionality', () => {
  test('List Item Index', () => {
    AddFun();
    expect(copyList()[copyList().length - 1].index).toBe(3);
  });

  test('List Length', () => {
    AddFun();
    expect(copyList().length).toBe(4);
  });
});

describe('Edit Functionality', () => {
  test('EditField Content Test', () => {
    fillPage();
    const editField = document.querySelectorAll('.edit-field');
    EditFun(0);

    expect(editField[0].value).toBe('Task 1');
  });

  test('Edit Array Test', () => {
    fillPage();
    const editField = document.querySelectorAll('.edit-field');
    EditFun(0);
    editField[0].value = 'New Task';
    OkFun(0);
    expect(copyList()[0].description).toBe('New Task');
  });

  test('Edit List Item Test', () => {
    fillPage();
    const editField = document.querySelectorAll('.edit-field');
    const span = document.querySelectorAll('.task-text');
    EditFun(0);
    editField[0].value = 'New Task';
    OkFun(0);
    expect(span[0].innerHTML).toBe('New Task');
  });
});

describe('Completed Status Functionality', () => {
  test('Completed Test', () => {
    fillPage();
    const checkIcon = document.querySelectorAll('.check-icon');
    checkIcon[0].checked = true;
    checkFun(0);
    expect(copyList()[0].completed).toBe(true);
  });
});

describe('Clear Completed Functionality', () => {
  test('Clear Test', () => {
    fillPage();
    const checkIcon = document.querySelectorAll('.check-icon');
    checkIcon[0].checked = true;
    checkFun(0);
    checkIcon[1].checked = true;
    checkFun(1);
    ClearFun();
    expect(copyList().length).toBe(1);
  });
});

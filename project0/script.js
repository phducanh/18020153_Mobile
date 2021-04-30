const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    var a = document.getElementById('add-td').value;
    var node = "<li> <input type= 'checkbox'> " + a + "</li>";
    list.innerHTML =  list.innerHTML + node;
    itemCountSpan.innerHTML = list.getElementsByTagName('li').length;
}

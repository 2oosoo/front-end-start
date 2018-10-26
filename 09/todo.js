//start

//input 입력 받기

var input = document.getElementById('memo');
var form = document.querySelector('.new-task');
var list = document.getElementById('list'); //document.querySeletor('#list')
var html = '';
// debugger; // 코드를 멈추게 함

function addTodo(event) {
    var todo = input.value;
    console.log(todo);
    insertTodo(todo);
    input.value = '';

    event.preventDefault();
}

function insertTodo(todo) {
    html = `<li>
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked">
    <span class="text">${todo}</span>
    </li>`;
    list.innerHTML += html;
}


// function addTodo(event) {   //
//     if(event.keyCode === 13) {
//         var todo = input.value;
//         console.log(event);
//     }
// }

// input.addEventListener('keydown', addTodo);

form.addEventListener('submit', addTodo);

// btn 클릭 이벤트 만들어 놓기
function deleteTodo(event) {
    if(event.target.classList.value === 'delete') {
        console.log('deleteTodo');
        event.target.parentNode.remove();
    }
}

list.addEventListener('click', deleteTodo);

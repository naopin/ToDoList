const todos = [];
const inputBox = document.getElementById('input');
const addButton = document.getElementById('add-button');
const tBody = document.getElementById('todo-list');
// 追加するとtodoにテキスト格納
addButton.addEventListener('click', (event) => {
    const todo = inputBox.value;
    //  入力後にテキストを空にする
    inputBox.value = '';
    //  配列にテキスト格納
    todos.push(todo);
    showTodos();
});

function showTodos() {
    // tbodyの中身を空にする
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    todos.forEach((todo, index) => {
        const tr = document.createElement('tr');
        const td0 = document.createElement('td');
        td0.textContent = index + 1;
        tr.appendChild(td0);

        const td = document.createElement('td');
        td.textContent = todo;
        tr.appendChild(td);

        const td2 = document.createElement('td');
        const progressButton = document.createElement('button');
        progressButton.textContent = '作業中';
        td2.appendChild(progressButton);
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';

        td3.appendChild(deleteButton);
        tr.appendChild(td3)
           
      
        

        tBody.appendChild(tr);
    });


}

  
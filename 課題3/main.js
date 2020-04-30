const todos = [];
const inputBox = document.getElementById('input');
const addButton = document.getElementById('add-button');
const tBody = document.getElementById('todo-list');
// 追加するとtodoにテキスト格納
addButton.addEventListener('click', () => {
    const todo = inputBox.value;
    //  入力後にテキストを空にする
    inputBox.value = '';
    //  配列にテキスト格納
    todos.push(getTodoTdDict(todo));
    showTodos();
});
//配列を出力:テーブルに追加
function showTodos() {
    // tbodyの中身を空にする
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    todos.forEach((todoDict, index) => {
        const tr = document.createElement('tr');
        const td0 = document.createElement('td');
        td0.textContent = index + 1;
        tr.appendChild(td0);
        for (key in todoDict) {
            tr.appendChild(todoDict[key]);          
        }
        tBody.appendChild(tr);
    });
}
// todoの連想配列を作って返す関数
function getTodoTdDict(todo) {
        const td = document.createElement('td');
        td.textContent = todo;
        const td2 = document.createElement('td');
        const progressButton = document.createElement('button');
        progressButton.textContent = '作業中';
        td2.appendChild(progressButton);
        const td3 = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        td3.appendChild(deleteButton);
         // todoDict["todo"](or todoDict.todo)でtodoの値=tdTodoにアクセスできる
    const todoDict = {todo:td, progressButton:td2, deleteButton:td3};
    return todoDict;
}

  
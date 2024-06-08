document.addEventListener('DOMContentLoaded',loadTodos);

interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

const todos: TodoItem[] = [];

const $yearDisplay = document.querySelector('.year');
const $monthDisplay = document.querySelector('.month');
const $dayDisplay = document.querySelector('.day');
const $hourDisplay = document.querySelector('.hr');
const $minuteDisplay = document.querySelector('.mm');
const $secondDisplay = document.querySelector('.sec');

function getTime(): void {
  const date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();
  let hour: number = date.getHours();
  const minute: number = date.getMinutes();
  const second: number = date.getSeconds();

  hour = (hour % 12) === 0 ? 12 : hour;

  if ($yearDisplay) $yearDisplay.textContent = year.toString();
  if ($monthDisplay) $monthDisplay.textContent = month.toString().padStart(2, '0');
  if ($dayDisplay) $dayDisplay.textContent = day.toString().padStart(2, '0');
  if ($hourDisplay) $hourDisplay.textContent = hour.toString().padStart(2, '0');
  if ($minuteDisplay) $minuteDisplay.textContent = minute.toString().padStart(2, '0');
  if ($secondDisplay) $secondDisplay.textContent = second.toString().padStart(2, '0');
}

getTime();
setInterval(getTime, 1000);

function AddTodo():void {
  const todoInput = document.getElementById('todoInput') as HTMLInputElement;
  const todoText = todoInput.value.trim();

  if(todoText === ''){
    alert('Please enter a todo');
    return;
  }

  const todoList = document.getElementById('todoList') as HTMLUListElement;

  const li = document.createElement('li');

  li.textContent = todoText;

  const deleteButton = document.createElement('button');

  deleteButton.textContent = 'X';

  deleteButton.onclick = () => {
    todoList.removeChild(li);
    saveTodos();
  }

  li.appendChild(deleteButton);
  todoList.appendChild(li);

  todoInput.value = '';
  saveTodos();
}

function saveTodos(): void {
  const todos: string[] = [];
  document.querySelectorAll('#todoList li').forEach(li => {
      todos.push((li.firstChild as Text).textContent || ''); // Text로 타입 단언
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos(): void {
    const savedTodos: string[] = JSON.parse(localStorage.getItem('todos') || '[]');
    const todoList = document.getElementById('todoList') as HTMLUListElement; // HTMLUListElement로 타입 단언
    savedTodos.forEach(todoText => {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.onclick = () => {
            todoList.removeChild(li);
            saveTodos();
        };

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

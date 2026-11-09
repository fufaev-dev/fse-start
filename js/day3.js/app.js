const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('#clearBtn');
const taskList = document.querySelector('#taskList');

// Обработчик кнопки "Добавить"
addBtn.addEventListener('click', function () {
    const text = taskInput.value.trim();

    if (text === '') return;

    // Создаём <li>
    const li = document.createElement('li');

    // Создаём текст задачи (отдельно, чтобы не затереть кнопку через textContent)
    const span = document.createElement('span');
    span.textContent = text;
    span.classList.add('task-text');

    // Создаём кнопку удаления
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '✖';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.title = 'Удалить задачу';

    // Собираем <li>: сначала текст, потом крестик
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = '';
});

// Обработчик кнопки "Очистить всё"
clearBtn.addEventListener('click', function () {
    taskList.innerHTML = '';
});

// Один общий обработчик на весь список (делегирование)
taskList.addEventListener('click', function (event) {
    // 1. Проверка: клик по крестику?
    const deleteBtn = event.target.closest('.delete-btn');
    if (deleteBtn) {
        // Удаляем родительский <li>
        deleteBtn.parentElement.remove();
        return; // важно: выходим, чтобы не сработало зачёркивание
    }

    // 2. Иначе — клик по самой задаче: зачёркиваем
    const li = event.target.closest('li');
    if (li) {
        li.classList.toggle('done');
    }
});
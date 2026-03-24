/* JavaScript - язык программирования для добавления интерактивности на веб-страницы.
   JS позволяет манипулировать DOM (Document Object Model), обрабатывать события,
   выполнять асинхронные операции, валидировать данные и многое другое.
   Здесь мы продемонстрируем базовые возможности JS. */

// Функция для изменения цвета заголовка - демонстрация манипуляции DOM
function changeHeaderColor() {
  const header = document.querySelector('h1'); // Находим элемент h1
  const colors = ['lightsalmon', 'lightcoral', '#ff6b6b', '#ffa07a']; // Массив цветов
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Случайный цвет
  header.style.color = randomColor; // Изменяем цвет
  console.log('Цвет заголовка изменен на:', randomColor); // Вывод в консоль браузера
}

// Функция для добавления нового пункта в список - демонстрация создания элементов
function addListItem() {
  const list = document.getElementById('myList'); // Находим список
  const newItem = document.createElement('li'); // Создаем новый элемент li
  newItem.textContent = `Новый пункт №${list.children.length + 1}: Добавлен динамически`; // Текст
  newItem.style.color = 'lightgreen'; // Зеленый цвет для отличия
  list.appendChild(newItem); // Добавляем в список
  console.log('Добавлен новый пункт в список'); // Лог
}

// Функция валидации формы - демонстрация работы с формами и событиями
function validateForm(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  const name = document.getElementById('input').value.trim(); // Получаем значение поля имени
  const surname = document.getElementById('textarea').value.trim(); // Фамилии
  const email = document.getElementById('email').value.trim(); // Email
  const gender = document.getElementById('select').value; // Пол

  // Проверяем, заполнены ли поля
  if (!name || !surname || !email) {
    alert('Пожалуйста, заполните все обязательные поля!'); // Предупреждение
    return false;
  }

  // Проверяем email с помощью регулярного выражения
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Пожалуйста, введите корректный email!'); // Предупреждение
    return false;
  }

  // Если все ок, показываем данные
  alert(`Форма отправлена!\nИмя: ${name}\nФамилия: ${surname}\nEmail: ${email}\nПол: ${gender}`);
  console.log('Форма валидирована и "отправлена"'); // Лог
  return true;
}

// Функция для обработки клика по пунктам списка - демонстрация обработчиков событий
function handleListItemClick(event) {
  if (event.target.tagName === 'LI') { // Проверяем, что кликнули на li
    event.target.style.textDecoration = event.target.style.textDecoration === 'line-through' ? 'none' : 'line-through'; // Зачеркиваем/раззачеркиваем
    console.log('Пункт списка кликнут:', event.target.textContent); // Лог
  }
}

// Добавляем обработчики событий после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
  console.log('Страница загружена, JS инициализирован'); // Лог загрузки

  // Обработчик для кнопки изменения цвета
  document.getElementById('changeColorBtn').addEventListener('click', changeHeaderColor);

  // Обработчик для кнопки добавления пункта
  document.getElementById('addItemBtn').addEventListener('click', addListItem);

  // Обработчик для формы
  document.getElementById('myForm').addEventListener('submit', validateForm);

  // Обработчик для кликов по списку
  document.getElementById('myList').addEventListener('click', handleListItemClick);

  // Демонстрация таймера - автоматическое изменение цвета каждые 5 секунд
  setInterval(function() {
    const header = document.querySelector('h1');
    header.style.color = header.style.color === 'lightsalmon' ? 'lightcoral' : 'lightsalmon';
  }, 5000); // Каждые 5 секунд
});
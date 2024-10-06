// Открытие и закрытие модального окна
document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
}

// Логика для входа
document.getElementById('loginSubmit').onclick = function() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('accountName').innerText = username; // Обновляем имя пользователя
        document.getElementById('loginModal').style.display = 'none'; // Закрываем модалку
    } else {
        alert("Пожалуйста, введите логин."); // Сообщение, если логин не введён
    }
}

let currentSlide = 0; // Индекс текущего слайда
const slides = document.querySelectorAll('.review-card'); // Получаем все карточки отзывов
const totalSlides = slides.length; // Общее количество слайдов

// Функция для обновления слайдера
function updateSlider() {
    const reviewContainer = document.querySelector('.review-container');
    const offset = -currentSlide * (300 + 100); // Ширина карточки + расстояние между карточками
    reviewContainer.style.transform = `translateX(${offset}px)`; // Применяем смещение
}

// Функция для автоматической смены слайдов
function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Переходим к следующему слайду, возвращаемся к первому, если достигли конца
    updateSlider(); // Обновляем слайдер
}

// Запускаем автоматическую смену слайдов каждые 5 секунд
setInterval(autoSlide, 5000);


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        const targetId = this.getAttribute('href'); // Получаем ID цели
        const targetElement = document.querySelector(targetId); // Находим элемент с этим ID

        // Плавный скроллинг к цели
        targetElement.scrollIntoView({
            behavior: 'smooth', // Плавный переход
            block: 'start' // Позиционируем элемент вверху экрана
        });
    });
});

// Получаем все кнопки для открытия модалей
const buttons = document.querySelectorAll('.btn');

// Проходим по каждой кнопке и добавляем обработчик события
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal'); // Получаем id модалки из атрибута data-modal
        const modal = document.getElementById(modalId); // Находим модалку по id
        modal.style.display = 'block'; // Показываем модалку
    });
});

// Получаем все элементы закрытия
const closeButtons = document.querySelectorAll('.close');

// Проходим по каждой кнопке закрытия и добавляем обработчик события
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const modal = this.closest('.modal'); // Находим родительскую модалку
        modal.style.display = 'none'; // Скрываем модалку
    });
});

// Закрытие модалки при клике вне её содержимого
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal'); // Получаем все модалки
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Скрываем модалку
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Коли користувач натискає Enter
    document.getElementById("user-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

// Функція для відправки повідомлення
function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userText = input.value.trim();

    // Якщо поле вводу порожнє, нічого не робимо
    if (userText === "") return;

    // Відправка повідомлення користувача в чат
    chatBox.innerHTML += `<p class="user-message">🧑‍💻 Ви: ${userText}</p>`;

    // Очистка поля вводу
    input.value = "";

    // Завжди прокручуємо чат до нижньої частини
    chatBox.scrollTop = chatBox.scrollHeight;

    // Затримка для відповіді бота
    setTimeout(() => {
        const responses = {
            "Привіт": "Привіт! Як справи?",
            "Добрий день": "Доброго дня! Чим допомогти?",
            "Хто такий Бодя?": "Бодя — це легенда, головний по Mercedes! 😎🏎",
            "Що ти знаєш про Mercedes?": "Mercedes — це стиль, комфорт і швидкість! 🚗💨",
            "Як тебе звати?": "Я Бодя AI, твій персональний бот! 🤖",
            "Що таке HTML?": "HTML - це мова гіпертекстової розмітки, основа веб-сторінок! 📄",
            "Що таке CSS?": "CSS - це стилі для HTML, робить сайти красивими! 🎨",
            "Що таке JavaScript?": "JavaScript - це мова програмування для взаємодії на сайтах! 💻",
            "Скільки буде 2+2?": "Це просто! Буде 4! 😉",
            "Який сьогодні день?": new Date().toLocaleDateString(),
            "Хто такий Артем Куліш?": "Артем Куліш — це той, хто завжди сперечається, але Богдан завжди перемагає! 😂",
            "Що таке VPN?": "VPN – це безпечне з'єднання з інтернетом! 🛡",
            "Хто такий Ілон Маск?": "Бізнесмен, творець Tesla, SpaceX і ще купи всього! 🚀",
            // Додати більше запитів та відповідей тут...
        };

        // Вибір відповіді на основі тексту користувача
        let botMessage = responses[userText] || "🤖 Бодя AI: Це цікаве питання! Спробуй ще раз!";

        // Виведення повідомлення бота
        chatBox.innerHTML += `<p class="bot-message">${botMessage}</p>`;

        // Автоскрол
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000); // Затримка для відповіді бота
}

// Функція для відправки швидкого повідомлення
function sendQuickMessage(message) {
    document.getElementById("user-input").value = message;
    sendMessage();
}
// Функція для повернення наверх
document.getElementById('scrollTopButton').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

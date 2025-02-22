// Функція для відправки повідомлень
const sendMessage = () => {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');
    
    if (userInput) {
        // Додаємо повідомлення користувача в чат
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);

        // Очищаємо поле вводу
        document.getElementById('user-input').value = '';

        // Імітація відповіді від AI (для прикладу)
        const aiResponse = 'Я отримав твоє повідомлення: ' + userInput;
        
        // Додаємо відповідь "AI" в чат
        const aiMessage = document.createElement('div');
        aiMessage.classList.add('message', 'ai-message');
        aiMessage.textContent = aiResponse;
        chatBox.appendChild(aiMessage);
        
        // Прокручуємо чат вниз
        chatBox.scrollTop = chatBox.scrollHeight;
    }
};

// Обробка швидких повідомлень
const funnyResponses = {
    'Привіт': 'Привіт! Я Бодя AI! Як я можу допомогти? 😊',
    'Добрий день': 'Добрий день! Як твої справи? ☕️',
    'Як тебе звати?': 'Мене звуть Бодя AI! Але можеш називати мене "Геній". 😎'
};

// Функція для відправки швидких повідомлень
const sendQuickMessage = (message) => {
    const userInput = message;
    const chatBox = document.getElementById('chat-box');
    
    // Додаємо повідомлення користувача в чат
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);
    
    // Додаємо смішну відповідь в залежності від повідомлення
    const aiResponse = funnyResponses[userInput] || 'Я не знаю, що відповісти на це... 🤔';
    
    // Додаємо відповідь "AI" в чат
    const aiMessage = document.createElement('div');
    aiMessage.classList.add('message', 'ai-message');
    aiMessage.textContent = aiResponse;
    chatBox.appendChild(aiMessage);
    
    // Прокручуємо чат вниз
    chatBox.scrollTop = chatBox.scrollHeight;
};

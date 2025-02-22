const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Настройка для обслуживания статических файлов (например, HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html header', 'AIbodyachep.html'));
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

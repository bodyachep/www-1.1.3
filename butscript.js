// Кнопка "Вернутися наверх"
const scrollTopButton = document.getElementById("scrollTopButton");
const shareButton = document.getElementById("shareButton");
const voteButton = document.getElementById("voteButton");

// Показуємо/ховаємо кнопку "Вернутися наверх" при прокручуванні сторінки
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollTopButton.style.display = "block"; // Показуємо кнопку
    } else {
        scrollTopButton.style.display = "none"; // Ховаємо кнопку
    }
};

// Функція для прокручування до верху сторінки
scrollTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавна прокрутка
    });
};

// Приклад функціоналу для кнопки "Поділитися"
shareButton.onclick = function() {
    // Текст для поділитися
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert("URL скопійовано до буфера обміну!");
    }).catch(err => {
        alert("Помилка при копіюванні URL: " + err);
    });
};

// Приклад функціоналу для кнопки "Голосувати"
voteButton.onclick = function() {
    alert("Ваша голос було враховано! Дякуємо за участь!");
};

// Дизайн кнопки Бодя AI
const bodiaButton = document.querySelector(".bodia-ai-button");
if (bodiaButton) {
    bodiaButton.style.backgroundColor = "red";
    bodiaButton.style.color = "white";
    bodiaButton.style.fontWeight = "bold";
    bodiaButton.style.padding = "10px 20px";
    bodiaButton.style.borderRadius = "5px";
    bodiaButton.style.cursor = "pointer";
    bodiaButton.style.transition = "0.3s";

    bodiaButton.addEventListener("mouseover", () => {
        bodiaButton.style.backgroundColor = "darkred";
    });

    bodiaButton.addEventListener("mouseout", () => {
        bodiaButton.style.backgroundColor = "red";
    });
}

// Стилізація футера
const footer = document.querySelector("footer");
if (footer) {
    footer.style.background = "linear-gradient(45deg, #333, #666)";
    footer.style.color = "white";
    footer.style.padding = "15px";
    footer.style.textAlign = "center";
}

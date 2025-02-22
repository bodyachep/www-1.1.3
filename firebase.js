// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

// Конфигурация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDxZ9Ia97McQw4ExdKAtks2_HPiSq2e57Y",
    authDomain: "bodyachep-website.firebaseapp.com",
    databaseURL: "https://bodyachep-website-default-rtdb.firebaseio.com",
    projectId: "bodyachep-website",
    storageBucket: "bodyachep-website.firebasestorage.app",
    messagingSenderId: "961578354614",
    appId: "1:961578354614:web:282d82fa125b8586cda317"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);

// Инициализация Realtime Database
const database = getDatabase(app);
console.log("Realtime Database initialized:", database);

// Инициализация аутентификации
const auth = getAuth(app);

// Анонимная аутентификация
signInAnonymously(auth)
    .then(() => {
        console.log("User is signed in anonymously");
    })
    .catch((error) => {
        console.error("Error during anonymous sign-in:", error);
    });

// Проверка состояния аутентификации
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is authenticated:", user.uid);
    } else {
        console.error("No user is authenticated");
    }
});

// Функция для сохранения имени пользователя в Firebase
export async function saveUserData(userName) {
    try {
        console.log("Starting saveUserData function...");
        const usersRef = ref(database, "users");
        console.log("Reference to 'users' created:", usersRef);

        const newUserData = {
            name: userName,
            date: new Date().toLocaleString(),
        };
        console.log("Data to be saved:", newUserData);

        console.log("Attempting to push data to Firebase...");
        const result = await push(usersRef, newUserData);
        console.log("Data saved successfully:", result);
    } catch (error) {
        console.error("Error saving user data:", error.message || error);
    }
}if (userName) {
    console.log("User entered a valid name:", userName);

    // Сохраняем имя в Firebase
    saveUserData(userName)
        .then(() => {
            console.log("saveUserData completed successfully.");
            chatBox.innerHTML += `<div class="message bot-message"><span class="message-icon">🤖</span><p class="message-text">Приємно познайомитись, ${userName}!</p></div>`;
            chatBox.scrollTo({
                top: chatBox.scrollHeight,
                behavior: "smooth"
            });
        })
        .catch((error) => {
            console.error("Error in saveUserData:", error.message || error);
        });
}
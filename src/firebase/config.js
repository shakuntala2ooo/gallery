// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYAbl2EJw7zWLEXLkeGY611vfg7xYT_To",
    authDomain: "ninja-firegram-e8e48.firebaseapp.com",
    projectId: "ninja-firegram-e8e48",
    storageBucket: "ninja-firegram-e8e48.appspot.com",
    messagingSenderId: "874277608681",
    appId: "1:874277608681:web:021baba6401fd20ce6e478",
    measurementId: "G-WWJ930J45L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
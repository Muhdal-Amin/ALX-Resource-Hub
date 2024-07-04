// auth.js

// Reference to HTML elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const loginEmail = document.querySelector('#login input[type="text"]');
const loginPassword = document.querySelector('#login input[type="password"]');
const registerEmail = document.querySelector('#register input[placeholder="Email"]');
const registerPassword = document.querySelector('#register input[placeholder="Password"]');

// Firebase Auth references
const auth = firebase.auth();

// Login function
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            window.location.href = "../index.html"; // Redirect to home page
        })
        .catch((error) => {
            console.error(error.message);
        });
});

// Register function
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerEmail.value;
    const password = registerPassword.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered
            window.location.href = "../index.html"; // Redirect to home page
        })
        .catch((error) => {
            console.error(error.message);
        });
});

// Listen to auth state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        // Optionally show a logout button
    } else {
        // No user is signed in
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
    }
});

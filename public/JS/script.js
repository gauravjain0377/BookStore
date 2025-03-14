document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    let password = document.getElementById("reg-password").value;
    let confirmPassword = document.getElementById("reg-confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Validation
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("reg-username").value.trim();
            const email = document.getElementById("reg-email").value.trim();
            const password = document.getElementById("reg-password").value;
            const confirmPassword = document.getElementById("reg-confirm-password").value;

            if (username.length < 3) {
                alert("Username must be at least 3 characters long.");
                return;
            }
            if (!validateEmail(email)) {
                alert("Invalid email format.");
                return;
            }
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // Store user data in localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            alert("Registration successful! Redirecting to login...");
            window.location.href = "login.html";
        });
    }

    // Login Form Validation
    const loginForm = document.querySelector(".form-container form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.querySelector("input[type='text']").value.trim();
            const password = document.querySelector("input[type='password']").value;

            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (username === storedUsername && password === storedPassword) {
                alert("Login successful!");
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "profile.html";
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    // Check if user is logged in (for profile page)
    if (window.location.pathname.includes("profile.html")) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            alert("Please login first.");
            window.location.href = "login.html";
        }
    }

    // Logout functionality
    const logoutButton = document.querySelector(".logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            alert("Logged out successfully.");
            window.location.href = "login.html";
        });
    }

    // Payment Page Validation
    const paymentForm = document.getElementById("paymentForm");
    if (paymentForm) {
        paymentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const cardNumber = document.getElementById("card-number").value.trim();
            const expiryDate = document.getElementById("expiry-date").value.trim();
            const cvv = document.getElementById("cvv").value.trim();

            if (!validateCardNumber(cardNumber)) {
                alert("Invalid card number.");
                return;
            }
            if (!validateExpiryDate(expiryDate)) {
                alert("Invalid expiry date.");
                return;
            }
            if (!/^\d{3}$/.test(cvv)) {
                alert("CVV must be a 3-digit number.");
                return;
            }

            alert("Payment successful! Redirecting...");
            window.location.href = "profile.html";
        });
    }

    // Helper Functions
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateCardNumber(cardNumber) {
        return /^\d{16}$/.test(cardNumber);
    }

    function validateExpiryDate(expiryDate) {
        return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiryDate);
    }
});



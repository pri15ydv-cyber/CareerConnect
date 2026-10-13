const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Login successful!");

    window.location.href = "dashboard.html";
});
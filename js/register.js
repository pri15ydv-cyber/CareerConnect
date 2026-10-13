const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Registration successful!");

    window.location.href = "login.html";
});
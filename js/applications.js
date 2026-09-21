const detailButtons = document.querySelectorAll(".card button");

detailButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        window.location.href = "application-details.html";
    });
});
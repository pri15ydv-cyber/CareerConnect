const detailButtons = document.querySelectorAll(".card button");

detailButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Application details will be shown here.");
    });
});
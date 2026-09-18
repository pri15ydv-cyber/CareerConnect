const searchInput = document.getElementById("jobSearch");
const jobCards = document.querySelectorAll(".job-card");

searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase();

    jobCards.forEach(function(card) {

        const jobText = card.textContent.toLowerCase();

        if (jobText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
const saveButtons = document.querySelectorAll(".save-job-btn");

saveButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.textContent = "💚 Saved";

    });

});
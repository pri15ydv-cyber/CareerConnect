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
const applyButtons = document.querySelectorAll(".apply-job-btn");

applyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        window.location.href = "apply.html";

    });

});
const detailsButtons = document.querySelectorAll(".view-details-btn");
const jobFilter = document.getElementById("jobFilter");

jobFilter.addEventListener("change", function() {

    const selectedType = jobFilter.value;

    jobCards.forEach(function(card) {

        if (selectedType === "all" || card.dataset.type === selectedType) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

detailsButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        window.location.href = "job-details.html";

    });

});
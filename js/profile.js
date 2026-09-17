const profileForm = document.querySelector("form");

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Profile saved successfully!");
});
const notificationButtons = document.querySelectorAll(".card button");

notificationButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (button.textContent === "View Jobs") {
            window.location.href = "jobs.html";
        }

        else if (button.textContent === "View Application") {
            window.location.href = "applications.html";
        }

        else if (button.textContent === "Update Profile") {
            window.location.href = "profile.html";
        }

    });
});
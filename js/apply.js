const applicationForm = document.querySelector("form");

applicationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Application submitted successfully!");

});
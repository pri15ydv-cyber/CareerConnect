const jobForm = document.getElementById("jobForm");

jobForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const jobTitle = document.getElementById("jobTitle").value.trim();
    const company = document.getElementById("company").value.trim();

    if (jobTitle === "" || company === "") {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Job details submitted successfully!");

    jobForm.reset();
});
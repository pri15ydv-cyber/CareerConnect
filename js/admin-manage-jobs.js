function editJob(jobId) {
    const jobCard = document.getElementById(jobId);
    const jobTitle = jobCard.querySelector("h3").textContent;

    alert("Edit feature selected for: " + jobTitle);

    // Actual editing functionality will be added later.
}

function deleteJob(jobId) {
    const jobCard = document.getElementById(jobId);
    const jobTitle = jobCard.querySelector("h3").textContent;

    const confirmDelete = confirm(
        "Are you sure you want to delete " + jobTitle + "?"
    );

    if (confirmDelete) {
        jobCard.remove();
        alert("Job removed from this page.");
    }
}

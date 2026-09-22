const removeJobBtn = document.getElementById("removeJobBtn");

removeJobBtn.addEventListener("click", function() {

    const jobCard = removeJobBtn.closest(".card");

    jobCard.remove();

    alert("Job removed from Saved Jobs.");

});
const savedJobDetailsBtn = document.getElementById("savedJobDetailsBtn");

savedJobDetailsBtn.addEventListener("click", function() {

    window.location.href = "job-details.html";

});
const savedJobApplyBtn = document.getElementById("savedJobApplyBtn");

savedJobApplyBtn.addEventListener("click", function() {
    window.location.href = "apply.html";
});
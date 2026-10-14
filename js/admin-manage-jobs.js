let currentEditingJobId = null;

// Load jobs from browser storage
function loadJobs() {
    let jobs = getSavedJobs();

    if (jobs.length === 0) {
        jobs = [
            {
                id: "job1",
                title: "Software Developer Intern",
                company: "ABC Technologies",
                location: "Noida",
                type: "Internship",
                stipend: "₹15,000/month"
            },
            {
                id: "job2",
                title: "Web Development Intern",
                company: "XYZ Solutions",
                location: "Delhi",
                type: "Internship",
                stipend: "To be announced"
            }
        ];

        saveJobs(jobs);
    }

    displayJobs(jobs);
}

// Display saved jobs on the page
function displayJobs(jobs) {
    const section = document.querySelector("section");

    document.querySelectorAll(".managed-job").forEach(function(card) {
        card.remove();
    });

    jobs.forEach(function(job) {
        const card = document.createElement("div");
        card.className = "card managed-job";
        card.id = job.id;

        const title = document.createElement("h3");
        title.textContent = job.title;
        card.appendChild(title);

        addDetail(card, "Company:", job.company);
        addDetail(card, "Location:", job.location);
        addDetail(card, "Type:", job.type);
        addDetail(card, "Stipend:", job.stipend);

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
            editJob(job.id);
        });
        card.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            deleteJob(job.id);
        });
        card.appendChild(deleteButton);

        section.appendChild(card);
    });
}

function addDetail(card, label, value) {
    const paragraph = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = label;
    paragraph.append(strong, " " + value);
    card.appendChild(paragraph);
}

function editJob(jobId) {
    const jobs = getSavedJobs();
    const job = jobs.find(function(item) {
        return item.id === jobId;
    });

    if (!job) return;

    currentEditingJobId = jobId;

    document.getElementById("editTitle").value = job.title;
    document.getElementById("editCompany").value = job.company;
    document.getElementById("editLocation").value = job.location;
    document.getElementById("editType").value = job.type;
    document.getElementById("editStipend").value = job.stipend;

    document.getElementById("editJobForm").style.display = "block";

    document.getElementById("editJobForm").scrollIntoView({
        behavior: "smooth"
    });
}

function saveJobChanges() {
    if (currentEditingJobId === null) return;

    const title = document.getElementById("editTitle").value.trim();
    const company = document.getElementById("editCompany").value.trim();
    const location = document.getElementById("editLocation").value.trim();
    const type = document.getElementById("editType").value;
    const stipend = document.getElementById("editStipend").value.trim();

    if (!title || !company || !location || !stipend) {
        alert("Please fill in all fields.");
        return;
    }

    const jobs = getSavedJobs();
    const job = jobs.find(function(item) {
        return item.id === currentEditingJobId;
    });

    if (!job) return;

    job.title = title;
    job.company = company;
    job.location = location;
    job.type = type;
    job.stipend = stipend;

    saveJobs(jobs);
    displayJobs(jobs);

    document.getElementById("editJobForm").style.display = "none";
    document.getElementById("editJobForm").querySelectorAll("input").forEach(function(input) {
        input.value = "";
    });

    currentEditingJobId = null;

    alert("Job details updated and saved successfully!");
}

function cancelEdit() {
    document.getElementById("editJobForm").style.display = "none";
    document.getElementById("editJobForm").querySelectorAll("input").forEach(function(input) {
        input.value = "";
    });

    currentEditingJobId = null;
}

function deleteJob(jobId) {
    const jobs = getSavedJobs();
    const job = jobs.find(function(item) {
        return item.id === jobId;
    });

    if (!job) return;

    const confirmDelete = confirm(
        "Are you sure you want to delete " + job.title + "?"
    );

    if (confirmDelete) {
        const updatedJobs = jobs.filter(function(item) {
            return item.id !== jobId;
        });

        saveJobs(updatedJobs);
        displayJobs(updatedJobs);

        alert("Job deleted successfully!");
    }
}

// Show saved jobs when the page opens
loadJobs();

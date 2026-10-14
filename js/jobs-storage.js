const STORAGE_KEY = "careerConnectJobs";

function getSavedJobs() {
    const savedJobs = localStorage.getItem(STORAGE_KEY);

    if (savedJobs) {
        return JSON.parse(savedJobs);
    }

    return [];
}

function saveJobs(jobs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}

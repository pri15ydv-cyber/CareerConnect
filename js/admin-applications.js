function updateStatus(statusId) {
    const statusSelect = document.getElementById(statusId);
    const selectedStatus = statusSelect.value;

    const messageId = statusId === "status1"
        ? "message1"
        : "message2";

    const message = document.getElementById(messageId);

    message.textContent =
        "Application status changed to: " + selectedStatus;
}
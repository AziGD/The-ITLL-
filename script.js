document.getElementById("submissionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let levelName = document.getElementById("levelName").value;
    let creatorName = document.getElementById("creatorName").value;
    let videoLink = document.getElementById("videoLink").value;

    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${levelName}</strong> by ${creatorName} - <a href="${videoLink}" target="_blank">Watch</a>`;

    document.getElementById("levelList").appendChild(listItem);

    document.getElementById("submissionForm").reset();
});

document.addEventListener("DOMContentLoaded", () => {
    fetch('live_scores.php')
        .then(response => response.json())
        .then(data => {
            const scoresDiv = document.getElementById("live-scores");
            if (data.response.length > 0) {
                scoresDiv.innerHTML = data.response.map(match => `
                    <p>${match.teams.home.name} ${match.goals.home} - ${match.goals.away} ${match.teams.away.name}</p>
                `).join("");
            } else {
                scoresDiv.innerHTML = "<p>No live matches currently.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching live scores:", error);
        });
});

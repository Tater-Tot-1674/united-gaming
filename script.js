// Fetch bracket JSON and render it
fetch("./data/bracket.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("round").textContent = data.round;

    const container = document.getElementById("bracket");
    container.innerHTML = "";

    data.matches.forEach(match => {
      const div = document.createElement("div");
      div.className = "match";

      const score =
        match.score1 !== null
          ? `${match.score1} – ${match.score2}`
          : "—";

      div.innerHTML = `
        <strong>Match ${match.id}</strong><br>
        ${match.team1} vs ${match.team2}<br>
        Score: ${score}
      `;

      container.appendChild(div);
    });
  });

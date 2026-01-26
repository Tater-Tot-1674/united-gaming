fetch("./data/bracket.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("bracket");
    container.innerHTML = "";

    document.getElementById("round").textContent = data.round;

    function renderMatch(match) {
      const div = document.createElement("div");
      div.className = "match";

      const score =
        match.score1 !== null
          ? `${match.score1} – ${match.score2}`
          : "—";

      div.innerHTML = `
        <strong>Match ${match.id}</strong><br>
        ${match.team1 || "TBD"} vs ${match.team2 || "TBD"}<br>
        Score: ${score}
      `;
      container.appendChild(div);
    }

    container.innerHTML += "<h2>Quarterfinals</h2>";
    data.matches.forEach(renderMatch);

    container.innerHTML += "<h2>Semifinals</h2>";
    data.next_round.forEach(renderMatch);

    container.innerHTML += "<h2>Final</h2>";
    renderMatch(data.final);
  });

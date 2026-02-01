const bracketContainer = document.getElementById('bracket');

async function fetchBracket() {
  try {
    const res = await fetch('/data/bracket.json', { cache: 'no-store' });
    const data = await res.json();
    renderBracket(data);
  } catch (err) {
    console.error('Bracket load error:', err);
  }
}

function renderBracket(data) {
  bracketContainer.innerHTML = '';

  data.forEach(match => {
    const div = document.createElement('div');
    div.className = 'bracket-match';
    div.innerHTML = `
      <strong>${match.player1}</strong> vs <strong>${match.player2}</strong>
      <br>Winner: ${match.winner || 'TBD'}
    `;
    bracketContainer.appendChild(div);
  });
}

fetchBracket();
setInterval(fetchBracket, 5000);


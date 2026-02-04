const bracketContainer = document.getElementById('bracket');

async function fetchBracket() {
  try {
    const res = await fetch('data/bracket.json', { cache: 'no-store' });
    const data = await res.json();
    updateBracket(data);
  } catch (err) {
    console.error('Failed to fetch bracket:', err);
  }
}

function updateBracket(data) {
  bracketContainer.innerHTML = '';

  if (!data.rounds || !data.rounds.length) return;

  const firstRound = data.rounds[0];

  firstRound.forEach(match => {
    const div = document.createElement('div');
    div.className = 'match';

    const p1 = match.player1 || 'BYE';
    const p2 = match.player2 || 'BYE';
    const winner = match.winner ? ` 🏆 ${match.winner}` : '';

    div.textContent = `${p1} vs ${p2}${winner}`;
    bracketContainer.appendChild(div);
  });
}

fetchBracket();
setInterval(fetchBracket, 5000);


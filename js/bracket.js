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
  data.forEach(match => {
    const div = document.createElement('div');
    div.className = 'match';
    div.textContent = `${match.player1} vs ${match.player2}`;
    bracketContainer.appendChild(div);
  });
}

fetchBracket();
setInterval(fetchBracket, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('bracket');
  if (!container) return; // prevents crash

  async function loadBracket() {
    try {
      const res = await fetch('/data/bracket.json', { cache: 'no-store' });
      const matches = await res.json();

      container.innerHTML = '';

      if (!matches.length) {
        container.innerHTML = '<p>No bracket generated yet.</p>';
        return;
      }

      matches.forEach(match => {
        const div = document.createElement('div');
        div.className = 'bracket-match';
        div.innerHTML = `
          <strong>${match.player1 || 'TBD'}</strong>
          vs
          <strong>${match.player2 || 'TBD'}</strong>
        `;
        container.appendChild(div);
      });

    } catch (err) {
      console.error(err);
      container.innerHTML = '<p>Error loading bracket.</p>';
    }
  }

  loadBracket();
  setInterval(loadBracket, 5000);
});


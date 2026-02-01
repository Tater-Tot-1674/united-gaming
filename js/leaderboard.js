const container = document.getElementById('leaderboard');

async function loadLeaderboard() {
  try {
    const res = await fetch('/data/leaderboard_weekly.json', { cache: 'no-store' });
    const data = await res.json();

    container.innerHTML = '';

    if (!data.length) {
      container.innerHTML = '<p>No matches yet.</p>';
      return;
    }

    data.forEach((p, i) => {
      const row = document.createElement('div');
      row.className = 'player-row';
      row.innerHTML = `
        <span>#${i + 1}</span>
        <span>${p.name}</span>
        <span>${p.points} pts</span>
      `;
      container.appendChild(row);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = '<p>Error loading leaderboard.</p>';
  }
}

loadLeaderboard();
setInterval(loadLeaderboard, 5000);


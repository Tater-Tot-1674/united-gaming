const container = document.getElementById('profiles');

async function loadProfiles() {
  try {
    const res = await fetch('data/players.json', { cache: 'no-store' });
    const players = await res.json();

    container.innerHTML = '';

    if (!players.length) {
      container.innerHTML = '<p>No players registered yet.</p>';
      return;
    }

    players.forEach(p => {
      const card = document.createElement('div');
      card.className = 'profile-card';
      card.innerHTML = `
        <h3>${p.name}</h3>
        <p>Rank: ${p.rank || 'Unranked'}</p>
        <p>XP: ${p.xp || 0}</p>
        <p>Team: ${p.team || 'None'}</p>
      `;
      container.appendChild(card);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = '<p>Error loading players.</p>';
  }
}

loadProfiles();
setInterval(loadProfiles, 5000);

const container = document.getElementById('announcements');

async function fetchAnnouncements() {
  try {
    const res = await fetch('/data/announcements.json', { cache: 'no-store' });
    const data = await res.json();
    renderAnnouncements(data.reverse());
  } catch (err) {
    console.error(err);
  }
}

function renderAnnouncements(data) {
  container.innerHTML = '';

  data.forEach(a => {
    const div = document.createElement('div');
    div.className = 'announcement';
    div.innerHTML = `
      <strong>${a.author}</strong> • ${new Date(a.date).toLocaleString()}<br>
      ${a.content}
    `;
    container.appendChild(div);
  });
}

fetchAnnouncements();
setInterval(fetchAnnouncements, 5000);


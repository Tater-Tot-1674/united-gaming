const announcementsContainer = document.getElementById('announcements');

async function fetchAnnouncements() {
  try {
    const res = await fetch('data/announcements.json', { cache: 'no-store' });
    const data = await res.json();
    updateAnnouncements(data);
  } catch (err) {
    console.error('Failed to fetch announcements:', err);
  }
}

function updateAnnouncements(data) {
  announcementsContainer.innerHTML = '';

  if (!Array.isArray(data)) return;

  data.forEach(post => {
    const div = document.createElement('div');
    div.className = 'announcement';

    div.innerHTML = `
      <h3>${post.author || 'Unknown'}</h3>
      <p>${post.content || ''}</p>
      <small>${post.date ? new Date(post.date).toLocaleString() : ''}</small>
    `;

    announcementsContainer.appendChild(div);
  });
}

fetchAnnouncements();
setInterval(fetchAnnouncements, 5000);


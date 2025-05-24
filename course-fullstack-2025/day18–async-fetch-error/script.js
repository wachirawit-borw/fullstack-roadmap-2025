function showSkeleton(count = 5) {
  const listEl = document.getElementById('user-list');
  listEl.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.className = 'skeleton';
    listEl.appendChild(li);
  }
  document.getElementById('spinner').classList.remove('hidden');
}

function hideSkeleton() {
  document.getElementById('spinner').classList.add('hidden');
}

async function loadUsers() {
  const statusEl = document.getElementById('status');
  const listEl = document.getElementById('user-list');
  const retryBtn = document.getElementById('retry-btn');

  statusEl.textContent = '⏳ กำลังโหลด...';
  retryBtn.style.display = 'none';
  showSkeleton();

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    hideSkeleton();

    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

    const users = await res.json();
    statusEl.textContent = `✅ โหลด ${users.length} คนสำเร็จ`;

    listEl.innerHTML = '';
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email})`;
      listEl.appendChild(li);
    });

  } catch (err) {
    hideSkeleton();
    if (err.name === 'AbortError') {
      statusEl.textContent = '❌ โหลดนานเกินไป (timeout)';
    } else {
      statusEl.textContent = '❌ โหลดข้อมูลไม่สำเร็จ';
    }
    retryBtn.style.display = 'inline-block';
    console.error(err.message);
  }
}

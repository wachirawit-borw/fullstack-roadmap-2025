const listEl = document.getElementById('user-list');

function showSkeleton(count = 5) {
  listEl.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.className = 'skeleton';
    listEl.appendChild(li);
  }
}

// จำลอง API ด้วย setTimeout (Macrotask)
function fetchUsersMock() {
  return new Promise(resolve => {
    setTimeout(() => {
      const users = Array.from({ length: 5 }, (_, i) => ({
        name: `User ${i + 1}`,
        img: `https://i.pravatar.cc/150?img=${i + 10}`
      }));
      resolve(users);
    }, 1500); // simulate 1.5s delay
  });
}

function renderUsers(users) {
  listEl.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.className = 'user-card';
    li.innerHTML = `
      <img data-src="${user.img}" alt="${user.name}" />
      <strong>${user.name}</strong>
    `;
    listEl.appendChild(li);
  });

  lazyLoadImages();
}

function lazyLoadImages() {
  const imgs = document.querySelectorAll('img[data-src]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });
  imgs.forEach(img => observer.observe(img));
}

// เริ่มต้นโหลด
showSkeleton();

// ทำแบบ async: โหลด API → render → lazy image
fetchUsersMock().then(users => {
  // Microtask
  Promise.resolve().then(() => {
    console.log('✔️ Microtask: API fetch resolved');
  });

  renderUsers(users);

  // Macrotask เสริม
  setTimeout(() => {
    console.log('⏱️ Macrotask: post-render check');
  }, 0);
});

console.log('📦 Synchronous: script end');

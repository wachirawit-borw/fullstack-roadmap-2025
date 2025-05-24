async function loadUsers() {
  const statusEl = document.getElementById('status');   // element สำหรับบอกสถานะ
  const listEl = document.getElementById('user-list');  // element สำหรับแสดงชื่อผู้ใช้
  const retryBtn = document.getElementById('retry-btn'); // ปุ่ม retry

  listEl.innerHTML = ''; // ล้างข้อมูลเก่าออกก่อนโหลดใหม่
  statusEl.textContent = '⏳ กำลังโหลด...';
  retryBtn.style.display = 'none'; // ซ่อนปุ่ม Retry ก่อนเริ่มโหลดใหม่

  // 1. สร้าง AbortController เพื่อรองรับ timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // ถ้าเกิน 5 วิ ให้ abort

  try {
    // 2. เรียก API พร้อมส่ง signal ไปกับ fetch
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    });

    clearTimeout(timeoutId); // ถ้า fetch เสร็จก่อน timeout → เคลียร์ timer

    // 3. ตรวจ HTTP status
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    // 4. ดึงข้อมูลและแสดงผล
    const users = await res.json();
    statusEl.textContent = `✅ โหลด ${users.length} คนสำเร็จ`;

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email})`;
      listEl.appendChild(li);
    });

  } catch (err) {
    // 5. ถ้าเกิด error
    if (err.name === 'AbortError') {
      statusEl.textContent = '❌ โหลดนานเกินไป (timeout)';
    } else {
      statusEl.textContent = '❌ โหลดข้อมูลไม่สำเร็จ';
    }

    // แสดงปุ่ม retry ให้กดใหม่ได้
    retryBtn.style.display = 'inline-block';

    console.error('Fetch Error:', err.message);
  }
}

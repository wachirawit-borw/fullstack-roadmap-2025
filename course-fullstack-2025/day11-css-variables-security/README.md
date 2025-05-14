# Day 11 – CSS Variables & Security

📅 วันที่เรียน: Day 11  
📚 ครอบคลุมเนื้อหาจาก Roadmap: CSS-08 และ SEC-00 → SEC-02

---

## 🔖 หัวข้อที่เรียน

| รหัสบท | เนื้อหา |
|--------|---------|
| CSS-08 | CSS Variables (Custom Properties), การกำหนดค่ากลางด้วย `:root`, การสืบทอด, การ fallback, การคำนวณด้วย `calc()`, การสร้าง theme |
| SEC-00 | แนวคิดหลักด้านความมั่นคงปลอดภัย (CIA: Confidentiality, Integrity, Availability) |
| SEC-01 | เทคนิคป้องกันบนฝั่งเบราว์เซอร์: HTTPS, HSTS, CSP, SameSite Cookies, CORS |
| SEC-02 | ช่องโหว่เว็บยอดฮิต: XSS, CSRF, Clickjacking, และวิธีป้องกันเบื้องต้น |

---

## 🧠 สิ่งที่เรียนรู้

### ✅ CSS Variables (Custom Properties)
- CSS Variables คือค่าที่เรากำหนดเอง และนำไปใช้ซ้ำได้ทั้งไฟล์ เช่น สีหลัก, ระยะห่าง, ขนาดตัวอักษร
- กำหนดตัวแปรโดยใช้ `--ชื่อ` เช่น `--main-color: #3498db;`
- ใช้งานผ่าน `var(--main-color)`
- ประกาศใน `:root` เพื่อให้ทุก element เข้าถึงได้ (Global Scope)
- ใช้ `data-theme` บน `<body>` เพื่อเปลี่ยน theme (light/dark) โดย override ตัวแปรที่กำหนดไว้
- ใช้ร่วมกับ `calc()` เพื่อคำนวณค่าที่เปลี่ยนได้ตามเงื่อนไข เช่น `padding: calc(var(--gap) / 2);`
- เปรียบเทียบ `:root` vs `*` แล้วเลือกใช้แบบมีประสิทธิภาพ

### ✅ Web Security for Frontend
- เข้าใจแนวคิด **CIA Triad**:
  - **Confidentiality**: ข้อมูลลับ → ต้องใช้ HTTPS
  - **Integrity**: ข้อมูลถูกต้อง → ป้องกัน script แฝง
  - **Availability**: เข้าถึงได้เสมอ → กันโดน DDoS
- รู้จักแนวทางป้องกันฝั่ง browser:
  - เปิด HTTPS + HSTS เพื่อให้ทุกการสื่อสารปลอดภัย
  - ใช้ SameSite Cookie เพื่อป้องกัน CSRF
  - ตั้ง Content-Security-Policy (CSP) เพื่อ block inline script
- ช่องโหว่ที่ควรรู้:
  - **XSS**: hacker inject script → ป้องกันด้วย CSP และไม่ใช้ `innerHTML`
  - **CSRF**: ปลอม form จากเว็บอื่น → ป้องกันด้วย SameSite หรือ CSRF token
  - **Clickjacking**: แฝงเว็บใน iframe → ป้องกันด้วย `X-Frame-Options: DENY`

---

## 💻 Code ตัวอย่าง (ที่ทดลองแล้ว)

### 🌗 CSS Variables ใช้สร้างระบบ Theme
```css
:root {
  --bg-color: white;
  --text-color: black;
}
[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #eeeeee;
}
body {
  background: var(--bg-color);
  color: var(--text-color);
}

---

### 🌗 ป้องกัน XSS ด้วย Content-Security-Policy
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' https://cdn.jsdelivr.net;">

<!-- inline script ด้านล่างจะถูก block โดย CSP -->
<script>alert("This alert should be blocked by CSP!");</script>

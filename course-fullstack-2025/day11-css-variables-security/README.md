# Day 11 – CSS Variables & Security

📅 วันที่เรียน: Day 11  
📚 ครอบคลุมเนื้อหาจาก Roadmap: **CSS-08** และ **SEC-00 → SEC-02**

---

## 🔖 หัวข้อที่เรียน

| รหัสบท | เนื้อหา |
|--------|---------|
| **CSS-08** | CSS Variables (Custom Properties), การกำหนดค่ากลางด้วย `:root`, การสืบทอด, การ fallback, การคำนวณด้วย `calc()`, การสร้าง theme |
| **SEC-00** | แนวคิดหลักด้านความมั่นคงปลอดภัย (CIA Triad: Confidentiality, Integrity, Availability) |
| **SEC-01** | เทคนิคป้องกันฝั่งเบราว์เซอร์ — HTTPS, HSTS, CSP, SameSite Cookies, CORS |
| **SEC-02** | ช่องโหว่เว็บยอดฮิต — XSS, CSRF, Clickjacking และวิธีป้องกันเบื้องต้น |

---

## 🧠 สิ่งที่เรียนรู้

### ✅ CSS Variables (Custom Properties)

* กำหนดตัวแปรด้วย `--ชื่อ` เช่น `--primary: #007bff;`
* เรียกใช้ผ่าน `var(--ชื่อ)`
* ประกาศใน `:root` เพื่อให้ทุก element เข้าถึง (Global Scope)
* เปลี่ยน theme ด้วย `data-theme` บน `<body>`
* ใช้ร่วม `calc()` คำนวณค่าที่แปรผันได้
* เปรียบเทียบ `:root` vs `*` แล้วเลือกใช้แบบมีประสิทธิภาพ

### ✅ Web Security for Frontend

* เข้าใจ CIA Triad  
  * **Confidentiality** → ใช้ HTTPS  
  * **Integrity** → ป้องกัน script แปลก (CSP, SRI)  
  * **Availability** → ลดความเสี่ยง DDoS
* เครื่องมือฝั่ง browser  
  * HTTPS + HSTS, SameSite Cookie, CSP
* ช่องโหว่สำคัญและแนวทางป้องกัน  
  * **XSS** → ใช้ CSP, หลีกเลี่ยง `innerHTML`  
  * **CSRF** → SameSite=Lax/Strict, CSRF token  
  * **Clickjacking** → `X-Frame-Options: DENY`

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
```

### 💠 ตัวอย่าง Global Variable (--primary)

```css
:root {
  --primary: #007bff;
  --secondary: #6c757d;
}
.button {
  background: var(--primary);
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-radius: .25rem;
}

```

### 🔐 ป้องกัน XSS ด้วย Content-Security-Policy

```css
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' https://cdn.jsdelivr.net;">
<!-- inline script ด้านล่างจะถูกบล็อก -->
<script>alert('Blocked by CSP');</script>

```

### 🛡️ Subresource Integrity (SRI) – โค้ดที่ผ่านจริง

```css
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
  integrity="sha512-t4GWSVZO1eC8BM339Xd7Uphw5s17a86tIZIj8qRxhnKub6WoyhnrxeCIMeAqBPgdZGlCcG2PrZjMc+Wr78+5Xg=="
  crossorigin="anonymous">

```

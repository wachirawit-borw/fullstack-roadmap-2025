# Day 03: HTML-05 — SEO & Accessibility (A11y)

เนื้อหาวันนี้เน้นการพัฒนาเว็บไซต์ให้ค้นเจอได้ง่าย (SEO) และเข้าถึงได้สำหรับผู้ใช้ทุกคน (Accessibility หรือ A11y)

---

## 🔍 สิ่งที่ได้เรียนรู้

### 1. Meta Tags ที่จำเป็น

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="robots" content="index, follow" />
```

✅ รองรับอุปกรณ์มือถือ (responsive)
✅ อธิบายเว็บไซต์ให้ Google เข้าใจ
✅ ช่วยเพิ่มโอกาสติดอันดับ SEO

---

### 2. Open Graph (OG Tags)

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:type" content="website" />
```

✅ ใช้ตอนแชร์ลิงก์ใน Facebook, LINE, etc.
✅ ทำให้มี preview สวย ๆ ดึงดูดคนคลิก

---

### 3. การใช้ Semantic HTML เพื่อ SEO & A11y

```html
<header>, <nav>, <main>, <section>, <article>, <footer>
```

✅ แบ่งโครงสร้างหน้าเว็บให้ชัดเจน
✅ ทั้ง Google และเครื่องอ่านหน้าจอเข้าใจเว็บเราดีขึ้น

---

### 4. การใส่ alt, label, form attributes

```html
<img src="..." alt="..." />
<label for="email">อีเมล</label>
<input type="email" id="email" required />
```

✅ `alt` ช่วยให้ภาพสื่อความหมาย
✅ `<label>` ผูกกับ `<input>` → ใช้งานง่าย
✅ มี `required` และ `type` สำหรับ validation

---

### 5. ARIA Attributes เพื่อ A11y ที่ลึกขึ้น

```html
<nav role="navigation" aria-label="เมนูหลัก">...</nav>
<form aria-labelledby="contact-form">...</form>
```

✅ `role` ช่วยให้ระบุหน้าที่ element ได้ชัดเจน
✅ `aria-label` อธิบาย element ที่ไม่มี text
✅ เสริมประสบการณ์ให้กับผู้ใช้ screen reader

---

### 6. Lighthouse SEO & A11y ≥ 90

* ใช้ DevTools > Lighthouse
* ตรวจสอบคุณภาพเว็บจริงผ่าน Chrome
* ได้คะแนน: Performance 100 / Accessibility 100 / SEO 100 / Best Practice 96
* ผลลัพธ์สมบูรณ์: ✅ ทุกหมวดผ่านเกณฑ์มาตรฐาน

---

## ✅ สถานะเนื้อหา

| หมวด                                          | สถานะ              |
| --------------------------------------------- | ------------------ |
| Meta Tags (`viewport`, `description`, etc.)   | ✅                  |
| OG Tags (`og:title`, `og:desc`, etc.)         | ✅                  |
| Semantic Tags (`header`, `nav`, `main`, etc.) | ✅                  |
| Accessibility (`alt`, `label`, `required`)    | ✅                  |
| ARIA Attributes (`aria-*`, `role`)            | ✅                  |
| Lighthouse Audit                              | ✅ ผ่านทุกหมวด ≥ 90 |

---

## 📁 ไฟล์ที่เกี่ยวข้อง

* `index.html` — โครงสร้าง HTML พร้อม meta, semantic และ aria
* `styles.css` — ตกแต่ง UI เพื่อความชัดเจน + readability

---

## 🎯 Next Step: HTML-06 — DevTools & Accessibility Tree

เตรียมพร้อมสำหรับการตรวจสอบโค้ดจริงด้วย DevTools, Accessibility Tree และการ Debug อย่างมืออาชีพ

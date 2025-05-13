# 📚 Full-Stack Learning Template `day09-responsive-design/`

## 🗓️ วันที่เรียน

13 พฤษภาคม 2025

---

## 🔍 หัวข้อที่เรียน

| ลำดับ | หัวข้อย่อย                     | คำอธิบาย                                             |
|-------|----------------------------------|------------------------------------------------------|
| 1     | What is Responsive Design?      | แนวคิดการออกแบบเว็บให้รองรับทุกหน้าจอ              |
| 2     | Viewport & Meta Tag             | ใช้ `<meta>` ควบคุมการย่อ/ขยายของ browser บนอุปกรณ์ต่าง ๆ |
| 3     | Fluid Layouts                   | ใช้หน่วย `%`, `vw`, `vh` แทน `px` เพื่อให้ layout ยืดหยุ่น |
| 4     | Media Queries                   | ใช้ CSS เงื่อนไขเฉพาะตามขนาดหน้าจอที่กำหนดไว้     |
| 5     | Responsive Images               | โหลดภาพให้เหมาะสมตามอุปกรณ์ เช่น `<picture>`, `srcset` |
| 6     | Mobile First Approach           | เขียน CSS โดยเริ่มจาก mobile เป็นหลัก              |
| 7     | Breakpoints                     | รู้จักจุดที่ควรปรับ layout เช่น 480px, 768px, 1024px |

---

## 🧠 สิ่งที่ได้เรียนรู้ (What & Why)

### ✅ What:
Responsive Design คือแนวทางการเขียนเว็บไซต์ให้สามารถปรับเปลี่ยน layout และการแสดงผลได้อย่างเหมาะสมกับทุกขนาดหน้าจอ ไม่ว่าจะเปิดจากมือถือ แท็บเล็ต หรือหน้าจอ desktop

### 💡 Why:
- เพื่อให้ผู้ใช้งานได้ประสบการณ์ที่ดี
- ป้องกันปัญหา layout เพี้ยน
- รองรับ SEO เพราะ Google ให้ความสำคัญกับ mobile usability
- เพิ่มประสิทธิภาพโหลด เช่น โหลดรูปเล็กลงบนมือถือ

---

## 🧪 Code Examples

### 🔹 Meta Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

### 🔹 Media Query

```css
@media (min-width: 768px) {
  body {
    background-color: #e0f7fa;
  }
}
```

---

### 🔹 Responsive Image ด้วย `<picture>`

```html
<picture>
  <source media="(min-width: 768px)" srcset="img/large.jpg">
  <img src="img/small.jpg" alt="ตัวอย่างภาพ Responsive">
</picture>
```

---

### 🔹 Mobile First CSS

```css
/* Mobile default */
.container {
  padding: 1rem;
  text-align: center;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
}
```

---

## 🔗 Resources เพิ่มเติม

- [MDN – Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS Tricks – Media Queries Guide](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Responsive Design Checker](https://www.responsivedesignchecker.com/)

---

## 📁 ไฟล์ที่เกี่ยวข้อง

| ชื่อไฟล์         | คำอธิบาย                                      |
|------------------|-----------------------------------------------|
| `index.html`     | โค้ดหน้าเว็บพร้อม responsive layout + image |
| `styles.css`     | CSS แยกไฟล์ แสดงผลแบบ mobile-first           |
| `img/`           | โฟลเดอร์ภาพ มี `small.jpg` และ `large.jpg` สำหรับ responsive |

---

## ✅ เช็กลิสต์การเรียนรู้

- [x] เข้าใจแนวคิด Responsive Design
- [x] ใช้ Meta Viewport ได้
- [x] เขียน Media Queries ได้
- [x] ใช้ภาพแบบ responsive
- [x] ทดสอบผ่าน DevTools / Device Toolbar
- [x] ฝึก Mobile First Approach

---

## 📝 Homework

### 🔧 สิ่งที่ทำ:
- สร้างหน้าเว็บ HTML พร้อม Responsive Layout
- เพิ่ม `<meta viewport>`
- ปรับ layout เป็น fluid + responsive image
- ใช้ media query เปลี่ยน background และ layout
- ทดสอบผ่าน DevTools บนอุปกรณ์จำลอง mobile และ tablet

### 🖼️ ไฟล์รูป:
- `small.jpg` สำหรับมือถือ
- `large.jpg` สำหรับ desktop

---

## 🧠 สิ่งที่เข้าใจผิดมาก่อน (Misconceptions)

- คิดว่า responsive คือการย่อขนาดแบบอัตโนมัติ ไม่ต้องเขียน media query เอง
- ไม่รู้ว่าต้องใช้ `<meta name="viewport">` จึงจะแสดงผลถูกบนมือถือ
- ใช้รูปใหญ่ตลอด ทำให้โหลดช้าโดยไม่รู้ว่า `srcset` ช่วยได้

---

## 🤔 คำถามที่ยังมีอยู่ (Questions Remaining)

- ควรกำหนด breakpoints เองหรือมีมาตรฐานกลางไหม?
- responsive grid layout แบบ CSS Grid ใช้แทน Flex ได้เลยหรือเปล่า?
- การใช้ container queries เหมาะกับเคสแบบไหน?

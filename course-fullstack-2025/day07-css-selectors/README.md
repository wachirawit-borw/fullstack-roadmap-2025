# Day 07 – CSS-01: Selectors

📅 วันที่เรียน: Day 07  
📚 หัวข้อจาก Roadmap: CSS-01 (CSS Selectors)

---

## 🔍 CSS Selectors คืออะไร?

**Selectors** คือส่วนสำคัญของ CSS ที่ใช้ในการ "เลือก" HTML elements เพื่อกำหนด style ให้กับสิ่งเหล่านั้นได้อย่างแม่นยำ เช่น เปลี่ยนสี ขนาด ระยะห่าง ฯลฯ

---

## 🧱 ประเภทของ Selectors

### 1. Basic Selectors (พื้นฐาน)
- `*` เลือกทุก element บนหน้า
- `element` เลือกตามชื่อ tag เช่น `p`, `div`, `h1`
- `.class` เลือกตามชื่อ class ที่กำหนดใน HTML
- `#id` เลือก element ที่มี id เฉพาะ

---

### 2. Grouping Selectors
- ใช้ `,` เพื่อเลือกหลายๆ element พร้อมกัน เช่น `h1, p, a`

---

### 3. Combinators (ตัวเชื่อมความสัมพันธ์)
- (space) → เลือกลูกหลานของ element เช่น `div p`
- `>` → เลือกลูกโดยตรง
- `+` → เลือก element ถัดไปทันที
- `~` → เลือกพี่น้องที่อยู่ถัดไปทั้งหมด

---

### 4. Attribute Selectors
- `[attr]` → เลือก element ที่มี attribute นั้น
- `[attr="value"]` → มีค่า attribute ตรงกับ value
- `[attr^="start"]`, `[attr$="end"]`, `[attr*="contains"]` → ใช้กำหนดรูปแบบของค่า attribute

---

### 5. Pseudo-classes
- ใช้เลือกตาม "สถานะ" เช่น  
  - `:hover` → ตอนเอาเมาส์ชี้
  - `:first-child`, `:last-child`, `:nth-child(n)` → ตามลำดับการอยู่ใน DOM

---

### 6. Pseudo-elements
- ใช้เพื่อเลือกส่วนของ element เช่น  
  - `::before`, `::after` → แทรกเนื้อหาหน้าหลัง
  - `::first-letter`, `::first-line` → สำหรับจัดการเฉพาะบางส่วนของข้อความ

---

## 🎯 จุดประสงค์ของบทเรียนนี้

- เข้าใจพื้นฐานของ Selectors
- สามารถเลือก element ใน HTML ได้แม่นยำ
- รู้จักการใช้งานแบบมีเงื่อนไข เช่น ความสัมพันธ์, สถานะ, และ attribute
- เป็นพื้นฐานสำหรับเขียน CSS ที่ซับซ้อนและ maintain ง่าย

---

## 📌 หมายเหตุเพิ่มเติม

- ควรใช้ Selectors อย่างมีประสิทธิภาพ โดยหลีกเลี่ยงการใช้ `*` มากเกินไป
- การใช้ combinators จะช่วยให้เลือกเฉพาะเป้าหมายได้อย่างแม่นยำ ลดความผิดพลาด

# 📘 Day 12 – CSS Theory Review (CSS-00 to CSS-19)

📅 วันที่เรียน: Day 12
📚 ครอบคลุมเนื้อหาทบทวนตั้งแต่ CSS-00 ถึง CSS-19 ตาม Roadmap 2025

---

## 🎯 เป้าหมาย

- ทบทวนความเข้าใจเชิงทฤษฎีของ CSS ตั้งแต่พื้นฐานจนถึงระดับกลาง-สูง
- เตรียมพร้อมสำหรับการเข้าสู่หัวข้อ Tailwind CSS และ Component-Based Development
- ตรวจสอบความเข้าใจด้วยแบบฝึกหัดอัตนัย 100 ข้อ (แยกบทละ 5 ข้อ)

---

## 🧠 หัวข้อที่ครอบคลุม

| ลำดับ | รหัสบท | หัวข้อ                         |
| ----- | ------ | ------------------------------ |
| 1     | CSS-00 | Intro to CSS                   |
| 2     | CSS-01 | Selectors                      |
| 3     | CSS-02 | Colors & Units                 |
| 4     | CSS-03 | Box Model                      |
| 5     | CSS-04 | Typography                     |
| 6     | CSS-05 | Display & Position             |
| 7     | CSS-06 | Specificity & Inheritance      |
| 8     | CSS-07 | Pseudo-classes                 |
| 9     | CSS-08 | Combinators                    |
| 10    | CSS-09 | Responsive Design              |
| 11    | CSS-10 | Figma to HTML/CSS              |
| 12    | CSS-11 | Variables & CSP Security       |
| 13    | CSS-12 | Responsive Layout with Flexbox |
| 14    | CSS-13 | Responsive Layout with Grid    |
| 15    | CSS-14 | Transitions & Animations       |
| 16    | CSS-15 | Layering & Z-index             |
| 17    | CSS-16 | Responsive Component Practice  |
| 18    | CSS-17 | Dark Mode & Theme Switching    |
| 19    | CSS-18 | Component Design Pattern       |
| 20    | CSS-19 | CSS Architecture               |

---

## 🔍 สาระสำคัญแต่ละบท

### CSS-00: Intro to CSS

- CSS ใช้กำหนดลักษณะการแสดงผลของ HTML
- เขียนได้ 3 แบบ: inline, internal, external
- เหตุผลที่นิยมใช้ external: แยกโค้ดชัดเจน, reuse ได้หลายหน้า, แก้ไขง่าย

### CSS-01: Selectors

- เลือก element ที่จะใช้ style ด้วย selector
- ประเภท: universal, type, class, ID, descendant, child, sibling, attribute
- ใช้ combinator เพื่อเลือกความสัมพันธ์ระหว่าง element

### CSS-02: Colors & Units

- สีมีหลายรูปแบบ: ชื่อ, HEX, RGB(A), HSL(A)
- หน่วยมีแบบ absolute (px) และ relative (%, em, rem, vw/vh)
- การใช้ relative units เหมาะกับ responsive

### CSS-03: Box Model

- ทุก element เป็นกล่อง: content > padding > border > margin
- `box-sizing: border-box;` ทำให้ padding/border รวมอยู่ใน width/height ที่กำหนด

### CSS-04: Typography

- กำหนด font-family, font-size, font-weight, line-height, text-align, text-decoration
- ใช้ `text-transform` ปรับเป็น uppercase/lowercase/capitalize

### CSS-05: Display & Position

- `display`: inline, block, inline-block, none
- `position`: static, relative, absolute, fixed, sticky
- `z-index` ใช้ควบคุมลำดับการซ้อน

### CSS-06: Specificity & Inheritance

- ลำดับความสำคัญ: inline > ID > class > tag
- `!important` จะ override ทุกอย่าง
- ค่าที่สามารถสืบทอด: color, font-family, line-height เป็นต้น

### CSS-07: Pseudo-classes

- เลือก element ตามสถานะ เช่น `:hover`, `:focus`, `:first-child`, `:nth-child()`
- ใช้ `:not()` เพื่อยกเว้นบาง selector

### CSS-08: Combinators

- ใช้เชื่อมระหว่าง selectors:

  - `A B`: descendant
  - `A > B`: child
  - `A + B`: adjacent sibling
  - `A ~ B`: general sibling

### CSS-09: Responsive Design

- ออกแบบให้ใช้งานได้ทุกขนาดหน้าจอ
- ใช้ media query, units แบบ responsive (%, vw, rem)
- ใช้ `<picture>` และ `srcset` เพื่อเปลี่ยนภาพตามขนาดจอ

### CSS-10: Figma to HTML/CSS

- Figma คือเครื่องมือออกแบบ UI
- นักพัฒนาใช้ inspect mode ดูค่า spacing, สี, ฟอนต์
- นำ design แปลงเป็น HTML/CSS โดยแบ่ง section, ตั้งชื่อ class ให้ชัดเจน

### CSS-11: Variables & CSP

- CSS Variables: ประกาศใน `:root` แล้วใช้ด้วย `var(--name)`
- ใช้สำหรับ theme, reuse ค่า เช่น สี, spacing
- Content-Security-Policy (CSP) ใช้ป้องกัน XSS โดย block inline script

### CSS-12: Flexbox

- Layout แบบ 1 มิติ: แนวเดียว (row/column)
- `justify-content` จัดใน main axis, `align-items` จัดใน cross axis
- `flex-wrap` ช่วยให้ขึ้นบรรทัดใหม่

### CSS-13: Grid

- Layout แบบ 2 มิติ: row + column
- ใช้ `grid-template-columns`, `grid-template-rows`
- `repeat()`, `minmax()` ใช้จัด column ที่ยืดหยุ่น

### CSS-14: Transitions & Animations

- `transition`: เปลี่ยนจากสถานะหนึ่งไปอีกสถานะ
- `animation`: ทำงานต่อเนื่องหลายเฟรม ใช้ร่วมกับ `@keyframes`
- ควบคุมด้วย timing-function, delay, iteration-count

### CSS-15: Layering & Z-index

- ซ้อน element ด้วย z-index (ค่ามากอยู่บน)
- ต้องใช้ร่วมกับ position
- อย่าใช้ z-index สูงเกินจำเป็น

### CSS-16: Responsive Component Practice

- ออกแบบ component เช่น card, navbar, layout ให้ responsive
- ใช้ Flex/Grid + media query
- ตั้งชื่อ class ให้อ่านง่ายและแยกหน้าที่ชัดเจน

### CSS-17: Dark Mode & Theme Switching

- ใช้ CSS Variables เปลี่ยน theme
- จัดการผ่าน `data-theme`, class หรือ `prefers-color-scheme`
- ตัวแปรควรตั้งใน `:root` แล้ว override ใน theme แต่ละแบบ

### CSS-18: Component Design Pattern

- ใช้แนวคิด BEM (block\_\_element--modifier)
- แนวทาง utility-first (เช่น Tailwind)
- ตั้งชื่อ class ให้บ่งบอกหน้าที่ แยก layout กับ style

### CSS-19: CSS Architecture

- แบ่งโครงสร้าง CSS: base, layout, components, utilities
- ITCSS: แบ่ง style เป็นชั้น – settings, tools, generic, elements, objects, components, utilities
- ใช้ preprocessor เช่น SCSS เพื่อจัดการ style อย่างเป็นระบบ

---

## 📝 แบบทดสอบทบทวน (100 ข้อ)

> คำถามอัตนัยเชิงแนวคิด 5 ข้อต่อบท รวมทั้งหมด 100 ข้อ

---

## ✅ สิ่งที่ควรทำหลังทบทวน

- ฝึกเขียนอธิบายด้วยภาษาของตัวเองในแต่ละหัวข้อ
- เลือก 3–5 บทที่ยังไม่มั่นใจแล้วทบทวนเฉพาะจุด
- เตรียมเข้าสู่ CSS-20: Utility-First Frameworks (Tailwind CSS)

---

## 🧩 โฟลเดอร์ที่เกี่ยวข้อง

```painttext

course-fullstack-2025/
└── day12-css-theory-exam/
    ├── README.md                  ← ไฟล์สรุปเนื้อหา
    ├── css-theory-questions.md   ← แบบทดสอบอัตนัย 100 ข้อ
    ├── css-theory-answers.md     ← คำตอบของฉัน 100 ข้อ
    └── css-theory-qa-review.md   ← คำถาม + คำตอบ + ผลตรวจสอบ
```

---

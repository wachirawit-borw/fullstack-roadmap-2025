# Day 08 – CSS Flexbox & Grid Layout

📅 วันที่เรียน: Day 08  
📚 ครอบคลุมหัวข้อ CSS-01 (Flexbox) และ CSS-02 (Grid) จาก Roadmap

---

## 🔹 CSS Flexbox

**Flexbox** คือระบบ layout ที่จัดเรียง item ได้แบบยืดหยุ่นในแนวเดียว (แนวนอนหรือแนวตั้ง)

### คำสั่งสำคัญ:
| Property | ค่าแนะนำ | คำอธิบาย |
|----------|----------|----------|
| `display` | `flex` | เริ่มต้นใช้งาน Flex |
| `flex-direction` | `row` / `column` | แนวการวางกล่อง |
| `justify-content` | `center` / `space-between` | จัดตำแหน่งตามแนวนอน |
| `align-items` | `center` / `stretch` | จัดตำแหน่งแนวตั้ง |
| `gap` | `20px` | เว้นระยะห่างระหว่างกล่อง |
| `flex-wrap` | `wrap` | ให้ item ขึ้นบรรทัดใหม่ได้ |
| `flex` | `1 1 150px` | ขยาย/หด/ขนาดเริ่มต้นของกล่อง |

### ตัวอย่าง:
ดูไฟล์ `flex-html.html`

---

## 🔸 CSS Grid

**Grid** คือระบบ layout แบบ 2 มิติที่จัดเรียงกล่องเป็นตาราง (row + column)

### คำสั่งสำคัญ:
| Property | ค่าแนะนำ | คำอธิบาย |
|----------|----------|----------|
| `display` | `grid` | เริ่มต้นใช้งาน Grid |
| `grid-template-columns` | `repeat(3, 1fr)` | สร้าง 3 คอลัมน์เท่ากัน |
| `grid-template-rows` | `100px 100px` | (ถ้าใช้) กำหนดแถว |
| `gap` | `20px` | ระยะห่าง grid |
| `grid-column` | `1 / 3` | วางกล่องข้ามหลายคอลัมน์ |
| `grid-row` | `1 / 2` | วางกล่องข้ามหลายแถว |

### ตัวอย่าง:
ดูไฟล์ `grid-html.html`

---

## 🔁 Flex vs Grid

| ประเด็น | Flexbox | Grid |
|---------|---------|------|
| Layout | แนวเดียว | ตาราง 2 มิติ |
| เหมาะกับ | Navbar, Card | Gallery, Layout หลัก |
| ความยืดหยุ่น | ปรับขนาดได้ง่าย | ควบคุมตำแหน่งแม่นยำ |
| Responsive | ดี | ดีมาก |

# 📘 Day 06 – CSS-00: CSS Introduction

## 📅 วันที่เรียน: Day 06  
## 🗂 โฟลเดอร์: `day06-css-introduction/`  
## 📚 หัวข้อใน Roadmap: CSS-00 – Introduction to CSS

---

## 🎯 เป้าหมายของบทเรียน
- เข้าใจว่า CSS คืออะไร และใช้ทำอะไร
- เชื่อมโยง CSS ภายนอกกับ HTML ได้ถูกต้อง
- เขียน CSS ได้ด้วยตัวเอง
- ใช้ Selector พื้นฐาน (`element`, `.class`, `#id`)
- ทดสอบเอฟเฟกต์ `:hover` และโหลดฟอนต์จาก Google Fonts

---

## 🔍 สรุปเนื้อหาที่เรียน

### ✅ CSS คืออะไร?
- CSS (Cascading Style Sheets) ใช้ในการกำหนดรูปลักษณ์ของเว็บไซต์
- ใช้ตกแต่ง HTML เช่น สี ขนาด ขอบ พื้นหลัง ระยะห่าง ฯลฯ
- แยกโครงสร้าง (HTML) ออกจากการตกแต่ง (CSS)

---

### ✅ การเชื่อมโยง CSS กับ HTML

#### 1. External CSS (แนะนำที่สุด)
```html
<link rel="stylesheet" href="styles.css">
```

#### 2. Internal CSS
```html
<style>
  p {
    color: red;
  }
</style>
```

#### 3. Inline CSS
```html
<p style="color: red;">Hello</p>
```

---

### ✅ โครงสร้างของ CSS

```css
selector {
  property: value;
}
```

ตัวอย่าง:
```css
h1 {
  color: darkslateblue;
  font-size: 2.5rem;
}

---

## 🧠 สิ่งที่ได้ฝึก

| ทักษะ | รายละเอียด |
|-------|-------------|
| External CSS | ใช้ `<link>` เชื่อมกับไฟล์ภายนอก |
| Google Fonts | โหลดและใช้งานฟอนต์ Roboto |
| Class Selector | `.highlight` ใช้กับ `<p>` พร้อมเอฟเฟกต์ hover |
| ID Selector | `#footernote` ใช้จัดตำแหน่งข้อความเฉพาะจุด |
| Box Model | ใช้ `box-sizing: border-box` ปรับ layout |
| Reset CSS | เคลียร์ค่าพื้นฐานด้วย `*` |

---

## ✅ สถานะ: เรียนจบบท CSS-00
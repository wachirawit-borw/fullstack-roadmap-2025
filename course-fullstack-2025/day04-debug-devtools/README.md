# Day 04: Debug & DevTools

## หัวข้อที่เรียนวันนี้

### 🔧 DevTools Inspect
- ใช้เปิดดูและแก้ไขโค้ด HTML/CSS บนหน้าเว็บแบบเรียลไทม์
- เครื่องมือสำคัญสำหรับนักพัฒนาเว็บ
- ใช้ icon 🔍 เพื่อเลือกองค์ประกอบในหน้าเว็บแล้วดูโค้ดในแท็บ Elements

### ♿️ Accessibility Tree
- แสดงว่า Screen Reader หรือผู้ใช้งานที่มีข้อจำกัดจะ "เห็น" อะไรจากหน้าเว็บ
- ช่วยตรวจสอบ `role`, `name`, `state` ของ element ว่าถูกต้องไหม
- ใช้ได้ในแท็บ Elements → แถบ Accessibility

### 🚦 Lighthouse (เดิมชื่อ Audit Tab)
- ตรวจสอบคุณภาพเว็บไซต์ เช่น:
  - Performance (ความเร็ว)
  - Accessibility (การเข้าถึง)
  - Best Practices (แนวทางที่ดี)
  - SEO (การทำให้ติดอันดับบน Google)
- ได้คะแนนและคำแนะนำปรับปรุงเว็บอัตโนมัติ

---

## 🧪 แบบฝึกหัดที่ทำ

1. เข้าเว็บไซต์ [https://example.com](https://example.com)
2. เปิด DevTools (`F12`)
3. Inspect องค์ประกอบ `<h1>` แล้วลองแก้ไขข้อความ
4. เปิด Accessibility Tree ตรวจสอบ `Role` ขององค์ประกอบ
5. ใช้ Lighthouse วิเคราะห์หน้าเว็บ และจดคะแนนแต่ละหมวด

---

## ✅ แบบฝึก DevTools (ขั้นสูง)

- [x] เปลี่ยนข้อความ `<h1>` เป็น "HELLO TEST"
- [x] เปลี่ยนลิงก์ `<img>` ให้โหลดจาก `https://placehold.co/`
- [x] ลบ `alt` แล้วสังเกต Accessibility Tree ว่ารูปไม่มี name
- [x] ลองเพิ่ม HTML จาก Console:
  ```js
  document.body.innerHTML += "<p style='color:blue'>จาก Console</p>";

# Day 22 - Call Stack & Event Loop

## ✅ สรุปหัวข้อที่เรียน

- ✅ เข้าใจการทำงานของ Call Stack และ Event Loop
- ✅ เปรียบเทียบความต่างระหว่าง synchronous และ asynchronous อย่างชัดเจน
- ✅ เข้าใจลำดับการทำงาน Microtask และ Macrotask
- ✅ ทดลองใช้งาน `Promise`, `setTimeout`, และ `IntersectionObserver`
- ✅ สร้าง Skeleton UI + Lazy Load แบบ Progressive Rendering

---

## 🧠 สาระสำคัญ

### 🔁 Event Loop

- JavaScript ทำงานแบบ Single-threaded
- Event Loop จะคอยเช็กว่า Call Stack ว่างหรือไม่
- Microtask (Promise) จะถูกทำก่อน Macrotask (setTimeout)

### 📊 ลำดับการทำงาน (Synchronous → Microtask → Macrotask)

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

```

## ผลลัพธ์

```css
A
D
C
B
```

---

💻 สิ่งที่ทดลองทำ
✔️ Progressive Rendering
แสดง Skeleton ก่อน

ใช้ fetchUsersMock() จำลองการดึงข้อมูลแบบ async

เมื่อข้อมูลมา → render รายชื่อพร้อมรูป

ใช้ IntersectionObserver โหลดรูปเฉพาะที่แสดงใน viewport

✔️ เทคนิคร่วม
ใช้ setTimeout เป็น Macrotask จำลอง network delay

ใช้ Promise.resolve().then(...) เป็น Microtask

ใช้ DOM API ตรวจ element (getElementById, innerHTML)

ใช้ Lazy Load รูปภาพผ่าน data-src

📂 โครงสร้างไฟล์

day22-callstack-eventloop/
├── index.html         # โครงสร้างหน้าเว็บ
├── app.js             # Logic ทั้งหมด (render, async, lazy load)
└── README.md          # สรุปเนื้อหาบทเรียน

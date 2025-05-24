# 📘 Day 18 – JS-02: Async, Fetch & Error Handling

## ✅ Checklist

- [x] เข้าใจพื้นฐานของ `Promise` และการใช้งาน
- [x] ใช้ `async/await` เพื่อจัดการกับ asynchronous code
- [x] เรียกใช้งาน API ด้วย `fetch()`
- [x] จัดการข้อผิดพลาดด้วย `try...catch`
- [x] จัดการสถานะ UI: Loading, Success, Error
- [x] ใช้ `AbortController` เพื่อยกเลิกการเรียก API ที่ใช้เวลานานเกินไป

---

## 📂 สารบัญ

- 🎯 เป้าหมายการเรียนรู้  
- 📘 เนื้อหาที่เรียนรู้  
- 🧪 ตัวอย่างโค้ด  
- 🧠 แนวคิดสำคัญ  
- 🧩 การจัดการสถานะ UI  
- 🔗 แหล่งข้อมูลเพิ่มเติม  

---

## 🎯 เป้าหมายการเรียนรู้

- เข้าใจและใช้งาน `Promise` และ `async/await` เพื่อจัดการกับ asynchronous code
- เรียกใช้งาน API ด้วย `fetch()` และจัดการกับข้อมูลที่ได้รับ
- จัดการข้อผิดพลาดที่อาจเกิดขึ้นระหว่างการเรียก API
- จัดการสถานะของ UI ขณะรอข้อมูล เช่น แสดงข้อความ "กำลังโหลด..." หรือ "เกิดข้อผิดพลาด"
- ใช้ `AbortController` เพื่อยกเลิกการเรียก API ที่ใช้เวลานานเกินไป

---

## 📘 เนื้อหาที่เรียนรู้

### 🔹 Promise

- การสร้างและใช้งาน `Promise`
- การใช้ `Promise.all()` และ `Promise.allSettled()` เพื่อจัดการกับหลายๆ Promise พร้อมกัน

### 🔹 async/await

- การใช้ `async` และ `await` เพื่อเขียน asynchronous code ที่อ่านง่ายขึ้น
- การจัดการข้อผิดพลาดด้วย `try...catch` ร่วมกับ `async/await`

### 🔹 fetch()

- การเรียกใช้งาน API ด้วย `fetch()`
- การจัดการกับ response และการแปลงข้อมูลเป็น JSON
- การตรวจสอบสถานะของ response ด้วย `response.ok`

### 🔹 Error Handling

- การใช้ `try...catch` เพื่อจับข้อผิดพลาดที่อาจเกิดขึ้นระหว่างการเรียก API
- การแสดงข้อความข้อผิดพลาดให้ผู้ใช้ทราบ

### 🔹 Loading/UI State Management

- การแสดงข้อความหรือสัญลักษณ์ขณะรอข้อมูลจาก API
- การแสดงข้อมูลเมื่อโหลดสำเร็จ
- การแสดงข้อความข้อผิดพลาดเมื่อเกิดปัญหาในการโหลดข้อมูล
- การใช้ `AbortController` เพื่อยกเลิกการเรียก API ที่ใช้เวลานานเกินไป

---

## 🛠 เสริมทักษะ Dev: Debug & UI Loader

### 🎨 Skeleton & Spinner 101  

| ประเด็น | สรุปสั้น | โค้ดตัวอย่าง |
|---------|---------|---------------|
| **Skeleton** | กล่องเทาใช้หลอกตาก่อนข้อมูลจริงมา | `<li class="skeleton"></li>` + CSS `@keyframes pulse` |
| **Spinner** | วงกลมหมุนบอกว่าระบบยังทำงาน | `<div class="spinner hidden"></div>` + CSS `@keyframes spin` |
| **โชว์ / ซ่อน** | `showSkeleton()` สร้าง & เอา spinner ออก `.hidden`\n\n`hideSkeleton()` ใส่ `.hidden` แล้วเคลียร์ list | ดูฟังก์ชันใน `script.js` |

---

### 🐞 Debug เร็วด้วย DevTools  

1. **Console** – หา ReferenceError / SyntaxError  
2. **Network** – ดูว่า fetch วิ่งหรือถูก CORS/timeout  
3. **Sources ▶︎ pretty print** – วาง breakpoint ไล่ทีละบรรทัด

> **Shortcut**  
>
> - เปิด DevTools: `F12`  
> - Hard-Reload แบบไม่ใช้ cache: `Ctrl + Shift + R`  

---

### 🔍 เปรียบเทียบโค้ด (Diff)  

| เครื่องมือ            | จุดเด่น                                       | ลิงก์               |
|-----------------------|-----------------------------------------------|---------------------|
| **VS Code Compare**   | click-ขวา **Select for Compare → Compare**    | –                   |
| **Diffchecker**       | เร็ว, ไม่ต้องติดตั้ง                           | `diffchecker.com`   |
| **Mergely**           | Live-diff                                     | `mergely.com`       |

---

### ✅ Checklist เสริม

- [x] Skeleton/Spinner ทำงานครบ 3 สถานะ (Loading | Success | Error)
- [x] `showSkeleton()` & `hideSkeleton()` ถูก import ก่อน `loadUsers()`
- [x] DevTools ไม่มี error แดงเมื่อกด “โหลดข้อมูล”
- [x] ใช้ VS Code หรือ Diffchecker เพื่อตรวจโค้ดก่อน commit
- [x] ใช้ `Ctrl + Shift + R` เมื่อต้องการทดสอบไฟล์ล่าสุด

---

### 🔗 แหล่งศึกษาเพิ่ม  

- MDN **Loading UX** Pattern – *mdn.dev/loading-ui*  
- Google Chrome Docs: **Disable Cache** ใน DevTools  
- Blog: “Designing Skeleton Screens” by **Smashing Magazine**

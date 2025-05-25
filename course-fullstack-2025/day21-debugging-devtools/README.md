# Day 21 - JS-05: Debugging & DevTools

## ✅ รายละเอียด

### หัวข้อ: Debugging & DevTools  

เรียนรู้การดีบักโค้ด JavaScript ด้วยเครื่องมือ Chrome DevTools เพื่อช่วยตรวจสอบ แก้ไข และวิเคราะห์การทำงานของโค้ดได้อย่างแม่นยำ

---

## ✅ วัตถุประสงค์การเรียนรู้ (Learning Objectives)

- ✅ เข้าใจแนวคิดพื้นฐานของการดีบักโค้ด JavaScript
- ✅ ใช้งาน Chrome DevTools เพื่อตรวจสอบและแก้ไขข้อผิดพลาด
- ✅ ใช้เครื่องมือต่าง ๆ เช่น Console, Sources, Network และ Application panels
- ✅ ตั้งค่าและใช้งาน breakpoints เพื่อหยุดการทำงานของโค้ด
- ✅ วิเคราะห์ call stack และตรวจสอบค่าของตัวแปรในขณะรันไทม์

---

## ✅ สิ่งที่ต้องมี (Prerequisites)

- ✅ ความรู้พื้นฐานเกี่ยวกับ JavaScript
- ✅ รู้จัก DOM และการจัดการ input/output พื้นฐาน
- ✅ ใช้งานเบื้องต้นกับ Google Chrome และ DevTools ได้

---

## ✅ เนื้อหา

### 🔧 console.log วิวัฒน์

- `console.log()` แสดงค่าข้อมูล
- `console.table()` แสดงข้อมูล array/object แบบตาราง
- `console.group()` และ `console.time()` สำหรับจัดกลุ่มและวัดเวลา
- `console.assert()` สำหรับทดสอบเงื่อนไข
- ทดลองจริงผ่าน DevTools Console Panel

### 🎯 Breakpoints & Watch Expressions

- เปิด Sources Panel → ตั้ง breakpoint โดยคลิกเลขบรรทัด
- ใช้ `Step Over`, `Step Into`, `Step Out` เพื่อควบคุม flow
- เพิ่ม watch expressions เพื่อตรวจค่าตัวแปรแบบสด

### 🌐 Network & Call Stack Inspection

- ใช้ Network Panel ตรวจสอบ requests, responses, status code
- ใช้ Call Stack Panel วิเคราะห์เส้นทางการเรียกฟังก์ชัน
- ตรวจสอบ Scope Panel เพื่อดูค่าตัวแปรในแต่ละบริบท

---

## ✅ กิจกรรม

### 🧪 กิจกรรมที่ 1: Debug บั๊ก string+string

```html
<!-- index.html -->
<input id="num1">
<input id="num2">
<button id="calculate">คำนวณ</button>
<p id="result"></p>
```

```js
// script.js
document.getElementById('calculate').addEventListener('click', function() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const sum = num1 + num2;
  document.getElementById('result').textContent = `ผลรวม: ${sum}`;
});
```

ผลลัพธ์ผิด: "54" + "42" = "5442"
แก้ไข: ใช้ parseInt() เพื่อแปลง string เป็น number

```js
const num1 = parseInt(document.getElementById('num1').value);
const num2 = parseInt(document.getElementById('num2').value);

```

จากนั้นดีบักผ่าน DevTools → ใส่ breakpoint → ตรวจค่าตัวแปรใน Scope

---

### 🧪 กิจกรรมที่ 2: ฝึกใช้ DevTools (F12) อย่างเต็มรูปแบบ

```js
console.log("ทดสอบ log");
console.table([{name: "FRANK", score:100}, {name: "BOT", score:90}]);
console.time("loop"); for(let i = 0; i < 1000000; i++) {}; console.timeEnd("loop");

```

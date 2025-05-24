# Day 17 – JS-01: DOM & Events

## 🛠️ Step-by-Step Tasks

1. สร้างโฟลเดอร์ `day17-dom-events/` และไฟล์พื้นฐาน 3 ไฟล์:
    - `index.html`
    - `style.css`
    - `script.js`

2. เขียน HTML เบื้องต้นประกอบด้วยปุ่ม `<button>` และ input field:

    ```html
    <button id="clickMe">Click Me</button>
    <input type="text" id="nameInput" placeholder="Type your name" />
    <p id="greeting"></p>
    ```

3. เขียน JavaScript เพื่อเชื่อมโยงกับ HTML และจัดการ Events:

    ```js
    const button = document.getElementById('clickMe');
    const nameInput = document.getElementById('nameInput');
    const greeting = document.getElementById('greeting');

    button.addEventListener('click', () => {
      const name = nameInput.value.trim();
      if (name === '') {
        greeting.innerText = 'Please enter your name.';
        greeting.style.color = 'red';
        return;
      }
      greeting.innerText = `Hello, ${name}!`;
      greeting.style.color = 'green';
      nameInput.value = '';
    });
    ```

4. เพิ่มปุ่ม Reset และ event listener:

    ```html
    <button id="resetBtn">Reset</button>
    ```

    ```js
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
      nameInput.value = '';
      greeting.innerText = '';
    });
    ```

5. เพิ่ม event แสดงผลแบบ real-time:

    ```js
    nameInput.addEventListener('input', () => {
      const name = nameInput.value.trim();
      greeting.innerText = name ? `Hello, ${name}!` : '';
    });
    ```

6. สไตล์เบื้องต้นใน style.css:

    ```css
    button {
      padding: 10px 20px;
      margin: 5px;
      background-color: teal;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    input {
      padding: 8px;
      margin-left: 10px;
    }
    ```

---

## 📦 Expected Output

เมื่อผู้ใช้พิมพ์ชื่อในกล่อง input แล้วคลิกปุ่ม "Click Me":

- ถ้าช่องว่าง → แสดง "Please enter your name." (สีแดง)
- ถ้ากรอกชื่อ → แสดง "Hello, {name}!" (สีเขียว)
- กด Reset → ล้างข้อความทั้ง input และ greeting
- พิมพ์แล้วแสดงผลแบบ real-time ทันที

---

## 💡 Key Concepts Explained

### DOM

DOM คือโครงสร้างต้นไม้ของ HTML ที่ JavaScript สามารถเข้าถึงและควบคุมได้ เช่นเพิ่ม ลบ หรือเปลี่ยนแปลง element ต่าง ๆ บนหน้าเว็บ

### DOM Methods

- `getElementById()` — เข้าถึง element จาก id
- `querySelector()` — ใช้ selector แบบ CSS
- `innerText` — เปลี่ยนข้อความ
- `innerHTML` — เปลี่ยน HTML (หลีกเลี่ยงถ้าไม่จำเป็น)
- `style.property` — จัดการ CSS
- `classList` — จัดการ class

### Event Listener

- ใช้ `addEventListener('click', callback)`
- Event ต่าง ๆ เช่น `click`, `mouseover`, `keydown`, `submit`
- `event.target` คือ element ที่เกิด event
- `preventDefault()` ป้องกันพฤติกรรม default เช่น reload หน้า
- `stopPropagation()` ป้องกันการส่ง event ต่อไปยัง parent

### addEventListener vs onclick

- `onclick` → เขียน event handler ได้แค่ตัวเดียว
- `addEventListener` → เพิ่ม handler ได้หลายตัว และแยก logic ได้ดี

---

## ✅ Best Practices

- ใช้ `addEventListener` แทน `onclick`
- ใช้ `event.target` แทนการ hard-code id
- ไม่ใช้ `innerHTML` ถ้าไม่จำเป็น
- ใส่ `<script defer>` หรือไว้ท้าย `<body>`
- แยกไฟล์ JS / CSS ออกจาก HTML

---

## 🌍 Real-World Examples

- แบบฟอร์มที่ต้อง validate ข้อมูลก่อนส่ง
- แสดงผลข้อความหรือปุ่มแบบ dynamic
- คอนโทรล visibility เช่น ซ่อน/แสดงกล่องข้อความ
- ทำ interactive UI เช่น สลับ tab, gallery, pop-up

---

## 🔁 Event Delegation (เพิ่มเติม)

แทนที่จะผูก event กับแต่ละปุ่ม เราสามารถผูกกับ parent เพียงตัวเดียว แล้วตรวจว่าใครเป็นคนคลิก โดยใช้ `event.target` และ `.matches()` ดังตัวอย่าง:

```html
<div id="buttonPanel">
  <button class="action">Save</button>
  <button class="action">Edit</button>
  <button class="action">Delete</button>
</div>

```

```JS
document.getElementById('buttonPanel').addEventListener('click', (event) => {
  if (event.target.matches('.action')) {
    alert(`You clicked: ${event.target.innerText}`);
  }
});

```

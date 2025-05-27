# ✅ Quiz Review answer: JavaScript Foundation (JS00 – JS06)

รวมคำตอบและคำอธิบายอย่างละเอียดสำหรับคำถาม Q1–Q70  
ครอบคลุมเนื้อหาตั้งแต่ Day 16 ถึง Day 22  
เขียนในรูปแบบ “ติวเข้ม”: คำตอบชัด + แนวคิดลึก + ตัดกับดักในตัวเลือก

---

## 🧠 คำอธิบาย Q1–Q10: JS-00 (Syntax & Variables)

```plaintext
Q01. ข้อใดกล่าวถูกต้องที่สุดเกี่ยวกับ Hoisting?
A) let และ const จะถูก hoist พร้อมค่า undefined เหมือน var
B) var จะถูก hoist แต่ค่าจะเป็น undefined จนกว่าจะกำหนด
C) function declaration ไม่ถูก hoist
D) class declaration ใช้งานได้ก่อนประกาศเสมอ

✅ คำตอบ: B
🧠 อธิบาย:

var ถูก hoist พร้อมค่า undefined → ใช้ก่อนประกาศได้ (แต่ได้ undefined)

let / const ถูก hoist แต่เข้าสู่ TDZ (Temporal Dead Zone) → ใช้ก่อนประกาศ = error

function declaration ถูก hoist เต็มรูปแบบ

class declaration ไม่สามารถเรียกใช้ก่อนประกาศ → TDZ เช่นกัน

Q02. ผลลัพธ์ของ typeof null คือข้อใด?
A) null
B) undefined
C) object
D) boolean

✅ คำตอบ: C
🧠 อธิบาย:

เป็น bug ดั้งเดิมใน JavaScript → typeof null === "object"

จริง ๆ แล้ว null คือ primitive

อย่าสับสน: แม้ typeof null เป็น "object" แต่ null ไม่ใช่ object จริง ๆ

Q03. คำสั่งใดสร้างตัวแปรที่มี block scope อย่างแท้จริง?
A) var
B) let
C) with
D) การประกาศตัวแปรใน function

✅ คำตอบ: B
🧠 อธิบาย:

let และ const มี block scope → ใช้งานได้เฉพาะใน { }

var มี function scope เท่านั้น

with ถูก deprecated แล้ว

การประกาศใน function คือ function scope ไม่ใช่ block scope

Q04. การใช้ const กับ array หมายถึงอะไร?
A) ไม่สามารถเพิ่ม/ลบสมาชิกใน array ได้
B) ไม่สามารถกำหนด reference ใหม่ให้ตัวแปรนั้นได้
C) ไม่สามารถใช้ array method เช่น push() ได้
D) จะถูกแปลงเป็น read-only deep freeze

✅ คำตอบ: B
🧠 อธิบาย:

const หมายถึง "ไม่สามารถ reassign ตัวแปรได้"

แต่เนื้อหาภายใน object/array ยังสามารถเปลี่ยนได้

เช่น const arr = [1]; arr.push(2); ใช้ได้ แต่ arr = [] จะ error

Q05. ตัวดำเนินการใดตรวจสอบ strict equality ของทั้งค่าและชนิดข้อมูล?
A) ==
B) ===
C) !=
D) =>

✅ คำตอบ: B
🧠 อธิบาย:

=== → strict equality → เทียบทั้ง type และ value

== → loose equality → แปลง type ก่อนเทียบ

ตัวอื่นไม่ใช่ตัวดำเนินการเปรียบเทียบค่าโดยตรง

Q06. อธิบายความแตกต่างระหว่าง var, let, และ const พร้อมตัวอย่างการใช้งาน
✅ คำตอบ:

keyword Scope Reassign ได้ไหม Hoisting
var Function ✅ ได้ ✅ พร้อม undefined
let Block ✅ ได้ ✅ แต่มี TDZ
const Block ❌ ไม่ได้ ✅ แต่มี TDZ

🧠 ใช้ let กับค่าที่เปลี่ยนได้ → เช่น counter
ใช้ const กับค่าคงที่ หรือ reference ที่ไม่ควรเปลี่ยน

Q07. ยกตัวอย่าง Hoisting ที่อาจทำให้เกิดบั๊ก และวิธีหลีกเลี่ยง
✅ คำตอบ:

js
Copy
Edit
console.log(x); // undefined
var x = 5;
🧠 อธิบาย:

var x ถูก hoist ขึ้นไปด้านบนพร้อม undefined

ทำให้เข้าใจผิดว่าค่ามาจากไหน
✅ ใช้ let/const → ถ้าใช้ก่อนประกาศ = error ทันที → ป้องกันบั๊กได้

Q08. Primitive กับ Reference ต่างกันอย่างไรในเรื่องการเก็บและส่งค่า
✅ คำตอบ:

Primitive: เก็บเป็นค่าโดยตรง → ส่งแบบ copy

Reference: เก็บเป็น address → ส่งแบบ reference
🧠 ส่ง object ไปแก้ในฟังก์ชัน = กระทบต้นฉบับ
ส่ง string/number ไป = ไม่กระทบ

Q09. อธิบายการทำงานของ Symbol และ use-case จริง
✅ คำตอบ:

Symbol() สร้างค่าไม่ซ้ำกันเสมอ

ใช้สร้าง property ซ่อน เช่น obj[Symbol('secret')] = 1
🧠 เหมาะกับ use-case เช่น key ที่ไม่ให้ loop เจอ, ใช้ใน iterator protocol

Q10. ถ้าโค้ดส่งค่ากลับ NaN คุณจะวินิจฉัยและแก้ปัญหาอย่างไร
✅ คำตอบ:

ใช้ Number.isNaN(val) ตรวจค่า

ตรวจ input ว่าเป็น string ที่แปลงไม่ได้หรือไม่

อย่าใช้ == NaN (ไม่เคยเป็น true)

Debug flow → ตรวจว่าตัวแปรใดอาจเป็น NaN

```

---

## 🧠 คำอธิบาย Q11–Q20: JS-01 (DOM & Events)

```plaintext

Q11. เมธอดใดเร็วที่สุดในการเลือก element เดียวตาม ID?
A) document.querySelector()
B) document.getElementById()
C) document.getElementsByName()
D) document.querySelectorAll()

✅ คำตอบ: B – document.getElementById()
🧠 อธิบาย:

เป็นเมธอดเฉพาะทางสำหรับเลือก element ตาม id โดยตรง

เร็วกว่าการใช้ CSS selector (querySelector)

คืนค่าเป็น HTMLElement ตัวเดียว (หรือ null ถ้าไม่พบ)

Q12. ข้อใด ไม่ใช่ ขั้นตอนของ Event Propagation?
A) Capturing
B) Target
C) Delegation
D) Bubbling

✅ คำตอบ: C – Delegation
🧠 อธิบาย:

ขั้นตอนของ propagation:

Capturing → 2. Target → 3. Bubbling

Delegation คือ “เทคนิค” ไม่ใช่ขั้นตอน → เราผูก event กับ parent แล้วตรวจ event.target ภายหลัง

Q13. ถ้า <ul> มี <li> เพิ่ม/ลบตลอด ควรผูก listener กับ element ใด?
A) ทุก <li>
B) <ul> เอง
C) <body>
D) <html>

✅ คำตอบ: B – <ul> เอง
🧠 อธิบาย:

Event Delegation = ผูก listener กับ parent ที่คงที่

เมื่อ <li> ถูกเพิ่ม/ลบ runtime → ul.addEventListener(...) ยืดหยุ่นและประหยัด resource

Q14. การตั้ง { passive: true } มีผลใดต่อ performance บน mobile?
A) ยกเลิกการ scroll default
B) ทำให้ event listener ไม่สามารถเรียก preventDefault() ได้
C) Browser scroll ได้ทันทีไม่ต้องรอ callback
D) ไม่มีผลใด ๆ

✅ คำตอบ: C – Browser scroll ได้ทันทีไม่ต้องรอ callback
🧠 อธิบาย:

passive: true บอก browser ว่า event handler จะ “ไม่รบกวน scroll”

Browser จึงไม่ต้องรอเผื่อเรา call preventDefault() → ทำให้ scroll ลื่นไหล

Q15. Node ประเภทใด ไม่ นับเป็น Element node ใน DOM?
A) <div>
B) Comment <!-- cmt -->
C) <span>
D) <img>

✅ คำตอบ: B – Comment <!-- cmt -->
🧠 อธิบาย:

DOM Node มีหลายประเภท:

Element → <div>, <span>, <img>

Text → ตัวอักษรหรือช่องว่าง

Comment → ไม่ใช่ element

Q16. อธิบายขั้นตอน DOM Rendering Pipeline ตั้งแต่ HTML จนถึง Repaint
✅ คำตอบ:

Parse HTML → DOM Tree

Parse CSS → CSSOM Tree

Combine → Render Tree

Layout (Reflow) – คำนวณตำแหน่ง

Painting – วาดแต่ละ pixel

Composite Layers & Repaint – browser แสดงผล

🧠 JS แทรกได้ตอน:

สร้าง DOM (innerHTML, createElement)

เปลี่ยน style → กระทบ layout, reflow

Q17. เปรียบเทียบ onclick="..." กับ addEventListener()
✅ คำตอบ:

แบบ ข้อดี ข้อเสีย
onclick เขียนง่ายใน HTML มีได้เพียง 1 ตัว / ปน logic กับ markup
addEventListener รองรับหลาย callback / separation of concerns ต้องเขียน JS แยก

🧠 Best Practice = ใช้ addEventListener() เสมอ

Q18. อธิบาย Event Delegation และยก use-case จริง
✅ คำตอบ:

Event Delegation คือการผูก listener กับ parent แล้วใช้ event.target ตรวจว่า element ใด trigger

ใช้กับ list ที่ <li> เพิ่ม/ลด runtime เช่น comment system, shopping cart

Q19. ถ้า click แล้วช้า ควรใช้ DevTools ตรวจอะไร?
✅ คำตอบ:

Performance panel – ดู scripting, long task

Network tab – API ช้าหรือไม่

Console – error?

Sources – breakpoint ตรวจว่า logic ติด loop?

🧠 ร่วมกันช่วยวิเคราะห์ root cause ได้แม่นยำ

Q20. จัดการ memory leak จาก event listener ใน SPA ยังไง?
✅ คำตอบ:

ถอด addEventListener ด้วย removeEventListener ทุกครั้งที่ component unmount

ใช้ delegation เพื่อลดจำนวน listener

ตรวจด้วย Memory Snapshot หา object ที่ยังอยู่ใน heap โดยไม่ควรอยู่

```

---

## 🧠 คำอธิบาย Q21–Q30: JS-02 (Async, Fetch & Error)

```plaintext

Q21. สถานะใดของ Promise ที่ไม่สามารถเปลี่ยนเป็นสถานะอื่นได้อีก?
A) Pending
B) Fulfilled
C) Rejected
D) ทั้ง B และ C

✅ คำตอบ: D – ทั้ง B และ C
🧠 อธิบาย:

Promise มี 3 สถานะ:

pending: กำลังรอผล

fulfilled: สำเร็จแล้ว

rejected: ล้มเหลว

ถ้าเข้า fulfilled หรือ rejected แล้วจะ settled และ เปลี่ยนไม่ได้อีก

Q22. คำสั่งใดใช้ยกเลิก fetch request อย่างสุภาพ?
A) controller.abort()
B) fetch.cancel()
C) Abort.fetch()
D) promise.reject()

✅ คำตอบ: A – controller.abort()
🧠 อธิบาย:

ใช้ AbortController คู่กับ fetch:

js
Copy
Edit
const controller = new AbortController();
fetch(url, { signal: controller.signal });
controller.abort(); // → ยกเลิกได้
รองรับใน browser สมัยใหม่

Q23. ถ้าไม่เช็ก response.ok แล้ว API ตอบ 404 โค้ดจะเป็นอย่างไร?
A) จะ throw error อัตโนมัติ
B) จะเข้า .then() ปกติแต่ต้องเช็กเอง
C) จะ reject Promise ทันที
D) จะ retry อัตโนมัติ

✅ คำตอบ: B – จะเข้า .then() ปกติแต่ต้องเช็กเอง
🧠 อธิบาย:

fetch ไม่ถือว่า 404 เป็น error → จะเข้า .then()

ต้องเช็ก response.ok หรือ response.status

Q24. ตัวเลือกใด ไม่ใช่ Microtask?
A) Promise.then
B) queueMicrotask
C) setTimeout(fn,0)
D) การ resolve ของ async function

✅ คำตอบ: C – setTimeout(fn,0)
🧠 อธิบาย:

Microtask: รันทันทีหลัง call stack ว่าง

Macrotask: ต้องรอรอบใหม่ของ event loop

setTimeout = macrotask → มักช้ากว่า Promise

Q25. ข้อใดคือข้อดีสำคัญของ async/await เทียบกับ .then() chain ยาว ๆ?
A) ทำงานเร็วกว่าเดิมเสมอ
B) โค้ดอ่านง่าย ใกล้เคียง synchronous flow
C) ไม่ต้องใช้ try/catch
D) ทำให้ browser render ไวขึ้น

✅ คำตอบ: B – โค้ดอ่านง่าย ใกล้เคียง synchronous flow
🧠 อธิบาย:

async/await ช่วยเขียนโค้ด async แบบ step-by-step

แก้ปัญหา callback hell และ then-chain ที่ซ้อนลึก

Q26. อธิบายลำดับ Event Loop เมื่อมี fetch, setTimeout, และ Promise
✅ คำตอบ:

รัน synchronous code → เข้า call stack

setTimeout → ไป macrotask queue

fetch → ไป Web API รอ

Promise.then → เข้าคิว microtask

Stack ว่าง → รัน microtask → แล้วค่อย macrotask

💡 Microtask มาก่อน macrotask เสมอ

Q27. แนวทางออกแบบ error message ที่ user-friendly เมื่อ fetch ล้มเหลว
✅ คำตอบ:

หลีกเลี่ยง error message ทางเทคนิค เช่น ECONNRESET

ใช้ข้อความอย่าง: “เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้ง”

มี action รองรับ เช่น retry, กลับหน้าเดิม

บันทึก log ไว้ background (เช่น console, Sentry)

Q28. ตัวอย่างการใช้ AbortController กับ input ที่พิมพ์เร็ว
✅ คำตอบ:

js
Copy
Edit
let controller;
input.addEventListener('input', () => {
  if (controller) controller.abort();
  controller = new AbortController();

  fetch(`/search?q=${input.value}`, { signal: controller.signal })
    .then(...).catch(err => {
      if (err.name === 'AbortError') return;
    });
});
🧠 ถ้ามีคำใหม่ → ยกเลิกอันเก่า → ไม่โหลดซ้อน

Q29. อธิบาย retry with exponential backoff และประโยชน์
✅ คำตอบ:

retry โดยเพิ่มเวลา เช่น 1s → 2s → 4s → 8s

ลดโอกาส overload server

เหมาะกับ network ชั่วคราว เช่น offline หรือ server down

Q30. ถ้า API ตอบช้าเกิน 10 วินาที จะปรับ UX อย่างไร?
✅ คำตอบ:

แสดง spinner/skeleton

แจ้ง user ว่า “กำลังโหลด กรุณารอสักครู่”

ถ้าช้าเกิน timeout → แจ้งเตือนหรือแสดงปุ่ม retry

อย่าให้ user รู้สึกว่าเว็บค้าง

```

---

## 🧠 คำอธิบาย Q31–Q40: JS-03 (Module & Bundler)

```plaintext

Q31. ข้อใดถูกต้องเกี่ยวกับ Tree-shaking
A) รวมไฟล์ JS ทุกไฟล์เป็นไฟล์เดียว
B) เอาโค้ดที่ไม่ถูก import ออกตอน build
C) ทดแทนการ minify
D) ทำเฉพาะใน dev mode

✅ คำตอบ: B – เอาโค้ดที่ไม่ถูก import ออกตอน build
🧠 อธิบาย:

Tree-shaking คือการลบ “dead code” (code ที่ไม่ถูกใช้) ออกจาก bundle

ทำงานเฉพาะกับ ESModule (import/export) เท่านั้น

ใช้ได้ตอน build เท่านั้น (production mode)

ไม่ใช่ minify → คนละเรื่องกัน

Q32. ฟิลด์ใดใน package.json ระบุ entry สำหรับ ESM build
A) main
B) module
C) browser
D) types

✅ คำตอบ: B – module
🧠 อธิบาย:

field ใช้ใน context
main CommonJS
module ESModule
browser สำหรับ browser-specific entry
types ใช้ใน TypeScript เพื่อหา .d.ts

Q33. หากใช้ export default แล้ว import ผิดชื่อจะเกิดอะไร?
A) Compile error
B) ได้ค่า undefined
C) ได้ alias อัตโนมัติ
D) ไม่มีผลเพราะชื่อไม่สำคัญ

✅ คำตอบ: D – ไม่มีผลเพราะชื่อไม่สำคัญ
🧠 อธิบาย:

default export import ได้ด้วยชื่อใดก็ได้:

js
Copy
Edit
export default function fn() {}
// import x from './mod' → OK
ไม่ต้องใช้ชื่อเดียวกับของเดิม

Q34. Rollup เด่นเรื่องใดเทียบกับ Webpack ในงาน library?
A) Code-splitting routing
B) Output bundle ESModule ขนาดเล็ก
C) Built-in dev server
D) Hot Module Replacement

✅ คำตอบ: B – Output bundle ESModule ขนาดเล็ก
🧠 อธิบาย:

Rollup เหมาะกับ bundling library → bundle สะอาด, รองรับ tree-shaking

Webpack เหมาะกับ SPA/web app ที่ซับซ้อนมากกว่า

Rollup ใช้เป็น backend engine ของ Vite

Q35. การใช้ dynamic import() ส่งผลดีใดต่อ performance SPA?
A) ลด bundle หลัก ทำให้อัปโหลดเร็วขึ้น
B) เพิ่มขนาดไฟล์ HTML
C) จำเป็นเสมอสำหรับ React
D) ใช้ได้เฉพาะ Node.js เท่านั้น

✅ คำตอบ: A – ลด bundle หลัก ทำให้อัปโหลดเร็วขึ้น
🧠 อธิบาย:

import() = dynamic import → load module ตอนเรียก

ใช้กับ component ที่ไม่ต้องโหลดตั้งแต่แรก เช่น modal, chart

ช่วยลดเวลาโหลด initial page

Q36. ความแตกต่าง CommonJS กับ ESModule ใน Node.js รุ่นใหม่
✅ คำตอบ:

Feature CommonJS (require) ESModule (import)
Syntax require / module.exports import / export
Load แบบ synchronous asynchronous
ใช้กับไฟล์ .cjs / default.mjs หรือ "type": "module"
Tree-shaking❌ ไม่ได้✅ ได้

🧠 ในยุคปัจจุบัน ESModule กลายเป็นมาตรฐานใหม่ แม้ใน Node.js

Q37. เมื่อไหร่ควรใช้ default export แทน named export?
✅ คำตอบ:

ถ้า module มีของสำคัญเพียง 1 อย่าง → ใช้ default
เช่น React Component, API function เดี่ยว

ถ้า module มีหลาย function → ใช้ named export
🧠 DX: named export ช่วยให้ editor autocomplete, ตรวจชื่อผิดได้

Q38. ยกตัวอย่าง real-world ในการแยก vendor bundle และประโยชน์
✅ คำตอบ:

Vendor bundle = รวม library เช่น react, lodash, axios แยกจาก code เรา

ประโยชน์:

✅ cache ได้นาน

✅ โหลดเร็วขึ้นถ้า user เคยใช้ lib นี้จากเว็บอื่น

🧠 ใช้กับ Webpack (splitChunks), Vite (optimizeDeps)

Q39. อธิบายขั้นตอนของ Vite ตั้งแต่รับไฟล์ .js จนออก bundle
✅ คำตอบ:

อ่าน entry (index.html, main.js)

ใช้ plugin เช่น PostCSS, Babel

resolve import → รวม dep

ใน dev → ใช้ native ESModule + HMR

ใน build → ใช้ Rollup → minify → สร้าง output bundle

Q40. ถ้า bundle ปลายทางยังใหญ่ จะลดขนาดได้อย่างไร?
✅ คำตอบ:

✅ Dynamic import → โหลดเฉพาะเมื่อใช้จริง

✅ Split chunk → แยก component ใหญ่ (admin, dashboard)

✅ ใช้ CDN สำหรับ lib ใหญ่

✅ ตรวจด้วย bundle analyzer หรือ vite build --report

```

---

## 🧠 คำอธิบาย Q41–Q50: JS-04 (Unit Testing)

```plaintext

Q41. แนวคิด Arrange–Act–Assert อยู่ในขั้นตอนใดของ Unit Test
A) เฉพาะ Arrange
B) ทุกขั้นตอนของ test case
C) ใช้ใน integration เท่านั้น
D) เฉพาะ Act

✅ คำตอบ: B – ทุกขั้นตอนของ test case
🧠 อธิบาย:
รูปแบบ AAA (Arrange – Act – Assert) คือโครงสร้างพื้นฐานในการเขียน test:

Arrange – เตรียมตัวแปร, mock, environment

Act – เรียก function ที่ต้องการทดสอบ

Assert – ตรวจว่าผลลัพธ์ถูกต้องไหม

✅ ทำให้โค้ด test อ่านง่ายและ maintain ได้ดี

Q42. ถ้าฟังก์ชันพึ่งพา fetch() ควรทำอย่างไรใน Unit Test
A) เรียก API จริงเสมอ
B) Mock ด้วย library เช่น msw
C) ปิดการทดสอบลง
D) ใช้ console.log ตรวจค่า

✅ คำตอบ: B – Mock ด้วย library เช่น msw
🧠 อธิบาย:

ไม่ควรทดสอบ API จริงใน unit test

ใช้ mock หรือ stub เช่น:

js
Copy
Edit
vi.stubGlobal('fetch', () => Promise.resolve({ json: () => ... }));
หรือใช้ msw mock server → ทดสอบแบบ realistic แต่ควบคุมได้

Q43. คำสั่งใดรัน Vitest แบบดูผลทันทีพร้อม watch
A) vitest run --coverage
B) vitest watch
C) vitest ui
D) vite --test

✅ คำตอบ: B – vitest watch
🧠 อธิบาย:

watch mode = rerun เทสต์อัตโนมัติเมื่อไฟล์เปลี่ยน

สะดวกมากตอนเขียนเทสต์ไปพร้อมกับเขียนฟีเจอร์

Q44. Assertion ใดบ่งบอกถึงการทดสอบค่าที่ primitive เท่านั้น
A) toBe
B) toEqual
C) toContain
D) toHaveLength

✅ คำตอบ: A – toBe
🧠 อธิบาย:

toBe ใช้ === → strict compare

เหมาะกับ number, string, boolean

toEqual ใช้กับ object, array (deep compare)

js
Copy
Edit
expect(1).toBe(1); // ✅
expect({ a: 1 }).toBe({ a: 1 }); // ❌ ต้องใช้ toEqual
Q45. ประโยชน์ของ Snapshot Testing คือข้อใด
A) เร็วกว่าการเทียบค่า primitive
B) ตรวจ regression UI / output เชิงโครงสร้างได้ง่าย
C) ใช้แทนทุก test type ได้เลย
D) บังคับ minify

✅ คำตอบ: B – ตรวจ regression UI / output เชิงโครงสร้างได้ง่าย
🧠 อธิบาย:

ใช้เก็บ “ภาพ” ของ output แล้วเทียบกับตอนรันเทสต์ในอนาคต

ช่วยจับข้อผิดพลาดที่เปลี่ยน UI หรือ structure โดยไม่ตั้งใจ

js
Copy
Edit
expect(component).toMatchSnapshot();
Q46. วิธีออกแบบ test case ที่ทนต่อการ refactor โดยไม่ต้องแก้ snapshot บ่อย
✅ คำตอบ:

อย่า snapshot ทั้ง DOM ใหญ่ → ใช้เฉพาะบาง element

ใช้ toHaveTextContent, toHaveAttribute แทน snapshot

Split test เป็นหลาย describe block เพื่อให้แยกปรับง่าย

✅ หลักการ: เทสต์เฉพาะ logic สำคัญ ไม่จับ dynamic เช่น timestamp

Q47. เปรียบเทียบ mock function กับ stub object พร้อมตัวอย่าง
✅ คำตอบ:

แนวทาง ใช้กับ ตัวอย่าง
mock function ฟังก์ชันเดี่ยว เช่น callback vi.fn()
stub object ระบบย่อย เช่น database { save: vi.fn(), load: vi.fn() }

🧠 mock ใช้ง่าย → ใช้กับ callback, event, handler
stub → สร้าง system จำลองขนาดเล็ก

Q48. ข้อควรระวังในการทดสอบ async ด้วย vi.useFakeTimers()
✅ คำตอบ:

ต้อง vi.advanceTimersByTime(ms) เพื่อ simulate เวลา

ถ้าใช้ await → ต้องใช้ vi.runAllTimersAsync()

ต้อง reset timer (vi.useRealTimers()) หลังแต่ละเทสต์

🧠 ถ้าไม่ทำ → test อาจ hang หรือหลอกว่าทำงานถูก

Q49. ถ้า test suite เริ่มช้าขึ้นเรื่อย ๆ กลยุทธ์ optimize คือ?
✅ คำตอบ:

ลบ snapshot ที่ไม่ใช้

run แบบ parallel / shard

รันเฉพาะไฟล์ที่เปลี่ยน (vitest run file.test.js)

ตรวจหา test ที่ทำ side-effect / share state โดยไม่ตั้งใจ

Q50. นอกจาก unit test ควรมี test ประเภทใดอีกใน frontend?
✅ คำตอบ:

Integration test → หลาย module ทำงานร่วมกัน

E2E test → simulate ผู้ใช้จริง (เช่น Cypress, Playwright)

Accessibility test → ตรวจว่าใช้กับ screen reader ได้ไหม

Visual Regression → เปรียบเทียบหน้าจอแบบ pixel level

🧠 Unit test = “จิ๊กซอว์เล็ก” → ยังต้องประกอบเป็นภาพใหญ่

```

---

## 🧠 คำอธิบาย Q51–Q60: JS-05 (Debugging & DevTools)

```plaintext

Q51. เมนูใดใน Chrome DevTools ใช้วัดเวลาการโหลด asset รายไฟล์?
A) Elements
B) Performance
C) Network
D) Memory

✅ คำตอบ: C – Network
🧠 อธิบาย:

ใช้ดูเวลาโหลด asset เช่น CSS, JS, Image

สามารถดู Timing, Size, Header ได้

เหมาะกับการตรวจ API ช้า / asset โหลดนาน

Q52. ถ้าต้องหยุดโค้ดเฉพาะเมื่อค่า count > 100 ควรใช้ breakpoint ชนิดใด?
A) URL breakpoint
B) DOM breakpoint
C) Conditional breakpoint
D) Line breakpoint

✅ คำตอบ: C – Conditional breakpoint
🧠 อธิบาย:

กำหนดเงื่อนไขให้หยุดเมื่อค่าตรงตามเงื่อนไข

เช่น count > 100 → หยุดเฉพาะตอนมีปัญหา

js
Copy
Edit
// คลิกขวาที่บรรทัด → Add conditional breakpoint
Q53. console.group() มีประโยชน์หลักใด?
A) จัดกลุ่ม log ให้อ่านง่ายและพับได้
B) วัด performance statement
C) ลบ log อัตโนมัติหลัง process
D) บังคับ log เป็นสีแดง

✅ คำตอบ: A – จัดกลุ่ม log ให้อ่านง่ายและพับได้
🧠 อธิบาย:

ใช้จัดกลุ่ม log หลายอัน เช่น ใน loop หรือหลาย user

ใช้ console.group() และ console.groupEnd()

js
Copy
Edit
console.group("User A");
console.log("Name");
console.log("Email");
console.groupEnd();
Q54. ถ้าพบ memory leak ใน SPA ควรเริ่มตรวจจาก panel ใด?
A) Sources
B) Network
C) Memory
D) Application

✅ คำตอบ: C – Memory
🧠 อธิบาย:

ใช้ snapshot เทียบก่อน-หลัง interaction

ตรวจหา object ที่ยังอยู่ใน heap ทั้งที่ DOM ถูกลบไปแล้ว

ช่วยหา detached DOM และ reference ที่ยังไม่ถูก release

Q55. Breakpoint ชนิด XHR/fetch หยุดโค้ดเมื่อใด?
A) เมื่อมี request ส่งออก
B) เมื่อ response status เป็น 4xx
C) เมื่อ request หรือ response header ตรงเงื่อนไข
D) เมื่อ JSON body ตรง pattern

✅ คำตอบ: C – เมื่อ request หรือ response header ตรงเงื่อนไข
🧠 อธิบาย:

ใน DevTools > Sources > XHR Breakpoints

ใช้ตั้งเงื่อนไขตาม header (เช่น Authorization) หรือ URL

Q56. สรุปขั้นตอน Debug Critical Rendering Path ด้วย Performance panel
✅ คำตอบ:

เปิด Performance tab

กด Record แล้วทำ action

ดู Flame chart → หาจุด spike

ตรวจ Recalculate Style, Layout, Paint

ดู Long Task ที่เกิน 50ms

ตรวจ JS blocking, โหลด asset ช้า

Q57. อธิบายการใช้ Live Expression เพื่อติดตาม state ที่เปลี่ยนตลอดใน React app
✅ คำตอบ:

เปิด DevTools → Console → Live Expression

ใส่ตัวแปรที่ต้องการดู เช่น store.user.name

DevTools จะแสดงค่าล่าสุดทุกเฟรมแบบ real-time
✅ ใช้ดีมากกับ state management เช่น Redux, Signals

Q58. หากพบ CPU spike ขณะ scroll ใน mobile วิเคราะห์อย่างไรด้วย DevTools
✅ คำตอบ:

Record ด้วย Performance tab

ดูงาน scripting, layout หรือ paint

ตรวจว่าใช้ CSS หนักเกินไปหรือมี JS ใน event scroll

ลองเปิด Layers panel เพื่อดู rendering และ compositing

Q59. ยกตัวอย่างการใช้ console.table() เพื่อแสดงข้อมูลให้ทีม product เข้าใจง่าย
✅ คำตอบ:

js
Copy
Edit
console.table([
  { name: "Frank", role: "Admin" },
  { name: "Mint", role: "User" }
]);
✅ ช่วยให้คนที่ไม่เขียนโค้ด อ่านข้อมูลเป็นตารางชัดเจน
ดีมากตอน debug หรือ present result

Q60. อธิบาย workflow ที่ดีในการลบ console.log ก่อน deploy production
✅ คำตอบ:

ใช้ custom logger เช่น logger.debug() แทน console.log()

Config Vite/Webpack ให้ลบ console.* ตอน build

ใช้ ESLint rule แจ้งเตือน console ใน production

ใช้ debug lib เพื่อเปิด/ปิด log ตาม env

```

---

## 🧠 คำอธิบาย Q61–Q70: JS-06 (Call Stack & Event Loop)

```plaintext

Q61. ถ้าเกิด error Maximum call stack size exceeded สาเหตุส่วนใหญ่คืออะไร?
A) async/await ซ้อนกัน
B) Promise chain ยาวเกิน
C) Recursive function ไม่มี base case
D) setTimeout ถูกใช้งานผิดวิธี

✅ คำตอบ: C – Recursive function ไม่มี base case
🧠 อธิบาย:

เกิดจากฟังก์ชันเรียกตัวเองไม่หยุด → stack เต็ม

เช่น:

js
Copy
Edit
function recurse() { return recurse(); }
✅ วิธีแก้ = ตั้ง base case ให้ recursion จบลงได้

Q62. ลำดับใดถูกต้องในการประมวลผล Event Loop?
A) Call Stack → Macrotask → Microtask
B) Call Stack → Microtask → Macrotask
C) Microtask → Call Stack → Macrotask
D) Macrotask → Call Stack → Microtask

✅ คำตอบ: B – Call Stack → Microtask → Macrotask
🧠 อธิบาย:

JS รัน call stack ก่อน → ถ้าว่าง → microtask (เช่น Promise)

หลังจากนั้นค่อยทำ macrotask เช่น setTimeout

Q63. งานใดจัดเป็น Macrotask?
A) Promise.resolve().then()
B) DOM Mutation Observer
C) setTimeout
D) queueMicrotask

✅ คำตอบ: C – setTimeout
🧠 อธิบาย:

Macrotask = setTimeout, setInterval, fetch callback

Microtask = Promise.then, queueMicrotask, async/await

Q64. ถ้า Microtask queue ไม่ว่าง Event Loop จะทำอย่างไร?
A) ข้ามไปทำ Macrotask แล้วกลับมา
B) ทำ Microtask ทั้งหมดก่อนทุกครั้ง
C) สลับทำทีละหนึ่ง Macrotask–Microtask
D) ล้างคิว Microtask ทันที

✅ คำตอบ: B – ทำ Microtask ทั้งหมดก่อนทุกครั้ง
🧠 อธิบาย:

Microtask ควรจบให้เร็ว → ถ้ามีเยอะ จะ block macrotask

ถ้ามี .then() ซ้อนกันเรื่อย ๆ → UI ค้างได้ (ดู Q68)

Q65. เหตุผลที่ setTimeout(fn,0) ยังไม่รันทันที?
A) Browser ปรับเป็นขั้นต่ำ 4 ms เสมอ
B) ต้องรอ Call Stack ว่างและ Microtask หมดก่อน
C) JavaScript ไม่รองรับเวลา 0 ms จริง ๆ
D) Web API จำกัดไว้

✅ คำตอบ: B – ต้องรอ Call Stack ว่างและ Microtask หมดก่อน
🧠 อธิบาย:

setTimeout(fn, 0) → ใส่เข้า macrotask queue

แต่จะทำก็ต่อเมื่อ call stack และ microtask ว่าง

Q66. อธิบาย interaction ระหว่าง Web API, Callback Queue, และ Call Stack
✅ คำตอบ:

JS รันฟังก์ชัน → call stack

ถ้าเจอ async เช่น setTimeout, fetch → ไป Web API

เมื่อเสร็จ → ส่ง callback ไป macrotask queue

Event Loop ตรวจว่า stack ว่าง → นำ callback เข้า stack

✅ Microtask เช่น .then() จะเข้า queue พิเศษที่วิ่งก่อน macrotask

Q67. ทำไม Microtask queue ต้องเสร็จก่อน Macrotask ถึงช่วยให้ UI responsive?
✅ คำตอบ:

Microtask = logic สำคัญที่ต่อเนื่อง เช่น .then()

ถ้าปล่อยให้ macrotask มาก่อน → จะตัดการรัน promise ที่ยังค้าง

ช่วยให้ logic async ดูเหมือน sync

Q68. กรณี Microtask จำนวนมากทำให้เว็บค้าง และแนวทางแก้
✅ คำตอบ:

js
Copy
Edit
for (let i = 0; i < 1_000_000; i++) {
  Promise.resolve().then(() => doSomething());
}
จะทำให้ UI freeze เพราะ microtask ไม่จบ
แนวทางแก้:

ใช้ batching → รันครั้งละ 1000

ใช้ setTimeout แทรกเป็น batch → ตัด flow ให้อยู่ใน macrotask

Q69. แนวคิด Backpressure ใน real-time stream และ Event Loop เกี่ยวข้องกันอย่างไร?
✅ คำตอบ:

Backpressure = sender ส่ง data เร็วกว่าที่ receiver จัดการทัน

Event Loop มีบทบาทตัดสินใจว่าจะ buffer, pause หรือ drop
🧠 ใช้ในระบบ Video, Chat, Realtime data เช่น stock price

Q70. ถ้าเว็บ Streaming กระตุกเป็นจังหวะ ๆ คุณจะวิเคราะห์อย่างไรว่าเกิดจาก Network, Decoding หรือ Event Loop?
✅ คำตอบ:

Network → DevTools > Network: preload, buffer เพียงพอไหม

Decoding → Performance flame chart ดู scripting, decoding CPU spike

Event Loop → ตรวจ long task, microtask blocking paint

✅ แยกสาเหตุโดยใช้ DevTools หลาย tab ร่วมกัน

```

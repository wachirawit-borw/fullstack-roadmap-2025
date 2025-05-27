# Quiz Review: JavaScript Foundation (JS00 – JS06)

> แบบทดสอบนี้รวม 70 คำถามต่อเนื่องเรียงลำดับเดียว (Q1 – Q70) ครอบคลุมทฤษฎี Day 16 ถึง Day 22 เพื่อป้องกันความสับสนเวลาตอบ กรุณาอ้างอิงหมายเลขคำถาม (เช่น **Q17**)

---

## Day 16 – JS‑00 (Syntax & Variables)

**Q1.** ข้อใดกล่าวถูกต้องที่สุดเกี่ยวกับ *Hoisting*?

* A) `let` และ `const` จะถูก hoist พร้อมค่า `undefined` เหมือน `var`
* B) `var` จะถูก hoist แต่ค่าจะเป็น `undefined` จนกว่าจะกำหนด
* C) `function` declaration ไม่ถูก hoist
* D) `class` declaration ใช้งานได้ก่อนประกาศเสมอ

**Q2.** ผลลัพธ์ของ `typeof null` คือข้อใด

* A) `null`
* B) `undefined`
* C) `object`
* D) `boolean`

**Q3.** คำสั่งใดสร้างตัวแปรที่มี *block scope* อย่างแท้จริง

* A) `var`
* B) `let`
* C) `with`
* D) การประกาศตัวแปรใน `function`

**Q4.** การใช้ `const` กับ array หมายถึงอะไร

* A) ไม่สามารถเพิ่ม/ลบสมาชิกใน array ได้
* B) ไม่สามารถกำหนด reference ใหม่ให้ตัวแปรนั้นได้
* C) ไม่สามารถใช้ array method เช่น `push()` ได้
* D) จะถูกแปลงเป็น *read-only deep freeze*

**Q5.** ตัวดำเนินการใดตรวจสอบ *strict equality* ของทั้งค่าและชนิดข้อมูล

* A) `==`
* B) `===`
* C) `!=`
* D) `=>`

**Q6.** อธิบายความแตกต่างหลักระหว่าง `var`, `let`, และ `const` พร้อมตัวอย่างสถานการณ์การใช้งานที่เหมาะสม

**Q7.** ยกตัวอย่าง *Hoisting* ที่อาจทำให้เกิดบั๊ก และวิธีหลีกเลี่ยง

**Q8.** Primitive type และ Reference type ต่างกันอย่างไรในแง่การเก็บค่าและการส่งผ่านไปยังฟังก์ชัน

**Q9.** อธิบายการทำงานของ `Symbol` และ use‑case ที่ใช้จริงในโปรเจกต์โปรดักชัน

**Q10.** ถ้าโค้ดส่งค่ากลับ `NaN` คุณจะวินิจฉัยและแก้ปัญหาเบื้องต้นอย่างไร

---

## Day 17 – JS‑01 (DOM & Events)

**Q11.** เมธอดใดเร็วที่สุดในการเลือก element เดียวตาม ID

* A) `document.querySelector()`
* B) `document.getElementById()`
* C) `document.getElementsByName()`
* D) `document.querySelectorAll()`

**Q12.** ข้อใด *ไม่ใช่* ขั้นตอนของ Event Propagation

* A) Capturing
* B) Target
* C) Delegation
* D) Bubbling

**Q13.** เมื่อใช้ Event Delegation เราควรผูก listener กับ element ใดในรายการ `<ul>` ที่มี `<li>` สร้างเพิ่ม‑ลบตลอดเวลา

* A) ทุก `<li>`
* B) `<ul>` เอง
* C) `<body>`
* D) `<html>`

**Q14.** การตั้ง `{ passive: true }` มีผลใดต่อ performance บน mobile

* A) ยกเลิกการ scroll default
* B) ทำให้ event listener ไม่สามารถเรียก `preventDefault()` ได้
* C) Browser สามารถ scroll ได้ทันทีไม่ต้องรอ callback
* D) ไม่มีผลใด ๆ

**Q15.** Node ประเภทใด *ไม่* นับเป็น *Element node* ใน DOM

* A) `<div>`
* B) Comment `<!-- cmt -->`
* C) `<span>`
* D) `<img>`

**Q16.** อธิบายขั้นตอน DOM Rendering Pipeline ตั้งแต่วิเคราะห์ HTML จนถึง Repaint พร้อมระบุจุดที่ JS สามารถแทรกแซงได้

**Q17.** เปรียบเทียบข้อดี‑ข้อเสียของการใช้ inline listener (`onclick="…"`) กับการใช้ `addEventListener()`

**Q18.** อธิบายกลไก *Event Delegation* และยกกรณีจริงที่จำเป็นต้องใช้

**Q19.** ถ้าหน้าเว็บมีปัญหากดปุ่มแล้วหน่วงหลายวินาที คุณจะใช้ DevTools ตรวจอะไรบ้าง

**Q20.** ใน SPA ขนาดใหญ่ การจัดการ memory leak ที่เกิดจาก event listener ทำอย่างไร

---

## Day 18 – JS‑02 (Async, Fetch & Error)

**Q21.** สถานะใดของ Promise ที่ไม่สามารถเปลี่ยนเป็นสถานะอื่นได้อีก

* A) Pending
* B) Fulfilled
* C) Rejected
* D) ทั้ง B และ C

**Q22.** คำสั่งใดใช้ยกเลิก fetch request อย่างสุภาพ

* A) `controller.abort()`
* B) `fetch.cancel()`
* C) `Abort.fetch()`
* D) `promise.reject()`

**Q23.** ถ้าไม่ได้เช็ก `response.ok` แล้ว API ตอบ `404` โค้ด fetch จะให้ผลอย่างไร

* A) จะ throw error อัตโนมัติ
* B) จะเข้า `.then()` ปกติแต่ต้องเช็กเอง
* C) จะ reject Promise ทันที
* D) จะ retry อัตโนมัติ

**Q24.** ตัวเลือกใด *ไม่ใช่* Microtask

* A) `Promise.then`
* B) `queueMicrotask`
* C) `setTimeout(fn,0)`
* D) การ Resolve ของ `async` function

**Q25.** ข้อใดคือข้อดีสำคัญของ `async/await` เทียบกับการใช้ `.then()` chain ยาว ๆ

* A) ทำงานเร็วกว่าเดิมเสมอ
* B) โค้ดอ่านง่าย ใกล้เคียง synchronous flow
* C) ไม่ต้องใช้ `try/catch`
* D) ทำให้ browser render ไวขึ้น

**Q26.** อธิบายลำดับงานของ Event Loop เมื่อมีทั้ง fetch, setTimeout, และ Promise

**Q27.** สร้าง guideline สำหรับการออกแบบ error message ที่ user‑friendly เมื่อ fetch ล้มเหลว

**Q28.** ยกตัวอย่างการใช้ `AbortController` ใน input search ที่พิมพ์เร็ว

**Q29.** อธิบายแนวทาง *retry with exponential backoff* และประโยชน์

**Q30.** หาก API ตอบช้าเกิน 10 วินาที คุณจะปรับ UX อย่างไรให้ผู้ใช้ยังรู้สึกแอป “ไม่ค้าง”

---

## Day 19 – JS‑03 (Module & Bundler)

**Q31.** ข้อใดถูกต้องเกี่ยวกับ *Tree‑shaking*

* A) รวมไฟล์ JS ทุกไฟล์เป็นไฟล์เดียว
* B) เอาโค้ดที่ไม่ถูก import ออกตอน build
* C) ทดแทนการ minify
* D) ทำเฉพาะใน dev mode

**Q32.** ฟิลด์ใดใน `package.json` ระบุ entry สำหรับ ESM build

* A) `main`
* B) `module`
* C) `browser`
* D) `types`

**Q33.** หากใช้ `export default` แล้ว import ผิดชื่อจะเกิดอะไร

* A) Compile error
* B) ได้ค่า `undefined`
* C) ได้ alias อัตโนมัติ
* D) ไม่มีผลเพราะชื่อไม่สำคัญ

**Q34.** Rollup เด่นเรื่องใดเทียบกับ Webpack ในงาน library

* A) Code‑splitting routing
* B) Output bundle ESModule ขนาดเล็ก
* C) Built‑in dev server
* D) Hot Module Replacement

**Q35.** การใช้ `dynamic import()` ส่งผลดีใดต่อ performance SPA

* A) ลด bundle หลัก ทำให้อัปโหลดเร็วขึ้น
* B) เพิ่มขนาดไฟล์ HTML
* C) จำเป็นเสมอสำหรับ React
* D) ใช้ได้เฉพาะ Node.js เท่านั้น

**Q36.** อธิบายข้อแตกต่างระหว่าง CommonJS กับ ESModule ใน Node.js รุ่นใหม่

**Q37.** เมื่อไหร่ควรใช้ `default export` แทน `named export` ในแง่ DX และ API design

**Q38.** ยกตัวอย่าง real‑world ในการแยก vendor bundle และประโยชน์ที่ได้รับ

**Q39.** อธิบายขั้นตอนของ Vite ตั้งแต่รับไฟล์ `.js` จนออก bundle พร้อม HMR ใน dev mode

**Q40.** ถ้าบันเดิลปลายทางยังใหญ่ คุณจะใช้เทคนิคใดเพื่อลดขนาดเพิ่มเติมนอกเหนือจาก tree‑shaking

---

## Day 20 – JS‑04 (Unit Testing (Vitest))

**Q41.** แนวคิด **Arrange‑Act‑Assert** อยู่ในขั้นตอนใดของ Unit Test

* A) เฉพาะ Arrange
* B) ทุกขั้นตอนของ test case
* C) ใช้ใน integration เท่านั้น
* D) เฉพาะ Act

**Q42.** ถ้าฟังก์ชันพึ่งพา `fetch()` ควรทำอย่างไรใน Unit Test

* A) เรียก API จริงเสมอ
* B) Mock ด้วย library เช่น `msw`
* C) ปิดการทดสอบลง
* D) ใช้ `console.log` ตรวจค่า

**Q43.** คำสั่งใดรัน Vitest แบบดูผลทันทีพร้อม watch

* A) `vitest run --coverage`
* B) `vitest watch`
* C) `vitest ui`
* D) `vite --test`

**Q44.** Assertion ใดบ่งบอกถึงการทดสอบค่าที่ *primitive* เท่านั้น

* A) `toBe`
* B) `toEqual`
* C) `toContain`
* D) `toHaveLength`

**Q45.** ประโยชน์ของ *Snapshot Testing* คือข้อใด

* A) เร็วกว่าการเทียบค่า primitive
* B) ตรวจ regression UI / output เชิงโครงสร้างได้ง่าย
* C) ใช้แทนทุก test type ได้เลย
* D) บังคับ minify ### Open-Ended (อัตนัย)
  **Q46.** อธิบายวิธีออกแบบ test case ที่ “ทน” ต่อ refactor โดยไม่ต้องแก้ snapshot บ่อย

**Q47.** เปรียบเทียบการใช้ mock function กับ stub object พร้อมยกตัวอย่าง

**Q48.** ข้อควรระวังในการทดสอบ async code ด้วย Vitest และการใช้ `vi.useFakeTimers()`

**Q49.** ถ้า test suite เริ่มช้าขึ้นเรื่อย ๆ คุณจะวางกลยุทธ์ optimize อย่างไร

**Q50.** นอกจาก unit test โปรเจกต์ควรมี test ประเภทใดบ้างเพื่อครอบคลุมความเสี่ยงเชิง frontend

---

## Day 21 – JS-05 (Debugging & DevTools)

**Q51.** เมนูใดใน Chrome DevTools ใช้วัดเวลาการโหลด asset รายไฟล์

* A) Elements
* B) Performance
* C) Network
* D) Memory

**Q52.** ถ้าต้องหยุดโค้ดเฉพาะเมื่อค่า `count > 100` ควรใช้ breakpoint ชนิดใด

* A) URL breakpoint
* B) DOM breakpoint
* C) Conditional breakpoint
* D) Line breakpoint

**Q53.** `console.group()` มีประโยชน์หลักใด

* A) จัดกลุ่ม log ให้อ่านง่ายและพับได้
* B) วัด performance statement
* C) ลบ log อัตโนมัติหลัง process
* D) บังคับ log เป็นสีแดง

**Q54.** ถ้าพบ memory leak ใน SPA เราควรเริ่มตรวจจาก panel ใด

* A) Sources
* B) Network
* C) Memory
* D) Application

**Q55.** Breakpoint ชนิด *XHR/fetch* หยุดโค้ดเมื่อใด

* A) เมื่อมี request ส่งออก
* B) เมื่อ response status เป็น 4xx
* C) เมื่อ request หรือ response header ตรงเงื่อนไขที่กำหนด
* D) เมื่อ JSON body ตรง pattern

**Q56.** สรุปขั้นตอน Debug Critical Rendering Path ด้วย Performance panel

**Q57.** อธิบายวิธีใช้ *Live Expression* เพื่อติดตาม state ที่เปลี่ยนตลอดใน React app

**Q58.** หากพบ CPU spike ขณะ scroll ใน mobile คุณจะวิเคราะห์สาเหตุด้วย DevTools อย่างไร

**Q59.** ยกตัวอย่างการใช้ `console.table()` เพื่อแสดงข้อมูล complex object ให้ทีม product เข้าใจง่าย

**Q60.** อธิบาย workflow ที่ดีในการลบ `console.log` ก่อน deploy production โดยไม่ทำลาย DX ช่วง dev

---

## Day 22 – JS-06 (Call Stack & Event Loop)

**Q61.** ถ้าเกิด error `Maximum call stack size exceeded` สาเหตุส่วนใหญ่คืออะไร

* A) async/await ซ้อนกัน
* B) Promise chain ยาวเกิน
* C) Recursive function ไม่มี base case
* D) setTimeout ถูกใช้งานผิดวิธี

**Q62.** ลำดับใดถูกต้องในการประมวลผล Event Loop

* A) Call Stack → Macrotask → Microtask
* B) Call Stack → Microtask → Macrotask
* C) Microtask → Call Stack → Macrotask
* D) Macrotask → Call Stack → Microtask

**Q63.** งานใดจัดเป็น *Macrotask*

* A) `Promise.resolve().then()`
* B) DOM Mutation Observer
* C) `setTimeout`
* D) `queueMicrotask`

**Q64.** ถ้า Microtask queue ไม่ว่าง Event Loop จะทำอย่างไร

* A) ข้ามไปทำ Macrotask แล้วกลับมา
* B) ทำ Microtask ทั้งหมดก่อนทุกครั้ง
* C) สลับทำทีละหนึ่ง Macrotask‐Microtask
* D) ล้างคิว Microtask ทันที

**Q65.** ข้อใดเป็นเหตุผลหลักที่ `setTimeout(fn,0)` ยังไม่รันทันที

* A) Browser ปรับเป็นขั้นต่ำ 4 ms เสมอ
* B) ต้องรอ Call Stack ว่างและ Microtask หมดก่อนจึงเข้า Macrotask queue
* C) JavaScript ไม่รองรับเวลา 0 ms จริง ๆ
* D) Web API จำกัดไว้

**Q66.** อธิบาย interaction ระหว่าง Web API, Callback queue, และ Call Stack โดยยกตัวอย่าง**Q67.** ทำไม Microtask queue ต้องเสร็จก่อน Macrotask ถึงจะช่วยให้ UI responsive

**Q68.** ยกกรณีจริงที่ Microtask จำนวนมากทำให้หน้าเว็บค้าง และแนวทางแก้ไข

**Q69.** สรุปแนวคิด Backpressure ใน real-time data stream และ Event Loop มีบทบาทตรงไหน

**Q70.** ถ้าเว็บวิดีโอ Streaming กระตุกเป็นจังหวะ ๆ คุณจะวิเคราะห์ว่าเกิดจาก Network, Decoding, หรือ Event Loop อย่างไร

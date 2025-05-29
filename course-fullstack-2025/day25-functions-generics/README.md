# Day 25 – TS-01: Functions & Generics

วันนี้เรียนเกี่ยวกับการใช้งานฟังก์ชันใน TypeScript ที่มีการกำหนดชนิดข้อมูลชัดเจน รวมถึงการใช้ Generics เพื่อเขียนโค้ดที่ยืดหยุ่นแต่ยังคงปลอดภัย นอกจากนี้ยังได้เรียนรู้ชนิดข้อมูลพิเศษอย่าง `void`, `never`, และ `unknown`

---

## 🧠 เนื้อหาที่เรียนรู้

### ✅ Typed Functions

- ฟังก์ชันที่กำหนดชนิดของพารามิเตอร์และค่าที่คืน
- ช่วยให้เกิดความถูกต้องตั้งแต่ตอนเขียน ไม่ต้องรอให้เกิด error ตอน runtime
- ตัวอย่างเช่น:

  ```ts
  function add(a: number, b: number): number {
    return a + b;
  }
  ```

---

### ✅ Generics `<T>`

- ใช้เขียนฟังก์ชันหรือคลาสที่สามารถทำงานได้กับหลายชนิดข้อมูล
- รักษาความปลอดภัยของ type โดยไม่ต้องใช้ `any`
- ตัวอย่างเช่น:

  ```ts
  function wrap<T>(value: T): T[] {
    return [value];
  }
  ```

- TypeScript จะตรวจชนิดให้ถูกต้องโดยอัตโนมัติ หรือเราสามารถกำหนด `<T>` เองได้

---

### ✅ Constraints

- ใช้ `extends` กับ Generics เพื่อจำกัดว่า T ต้องมีโครงสร้างบางอย่าง
- ช่วยให้ใช้กับ object ที่มีคุณสมบัติบางอย่าง เช่น `.length`

  ```ts
  function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
  }
  ```

---

### ✅ void

- ใช้กับฟังก์ชันที่ไม่มีค่าคืน
- มักใช้กับฟังก์ชันที่ทำงานด้านผลข้างเคียง เช่น console.log

  ```ts
  function logMessage(msg: string): void {
    console.log(msg);
  }
  ```

---

### ✅ never

- ใช้กับฟังก์ชันที่ไม่มีวันคืนค่า เช่น ฟังก์ชันที่โยน error หรือวนลูปไม่มีวันจบ

  ```ts
  function crash(): never {
    throw new Error("Crash!");
  }
  ```

---

### ✅ unknown

- ใช้เมื่อยังไม่รู้ชนิดของข้อมูล แต่ไม่ต้องการใช้ `any`
- ต้องมีการตรวจสอบชนิดก่อนใช้งานจริง

  ```ts
  function handle(input: unknown) {
    if (typeof input === "string") {
      console.log(input.toUpperCase());
    }
  }
  ```

---

## 📌 สรุปการใช้งาน

| หัวข้อ         | ประโยชน์หลัก                          |
| -------------- | ------------------------------------- |
| Typed Function | ตรวจจับการใช้ type ผิดตั้งแต่ตอนเขียน |
| Generics       | ยืดหยุ่น ใช้ได้หลายชนิดข้อมูล         |
| Constraints    | ควบคุมชนิดของ Generic ให้ปลอดภัยขึ้น  |
| void           | ใช้กับฟังก์ชันที่ไม่คืนค่า            |
| never          | ใช้กับฟังก์ชันที่ไม่มีวันจบการทำงาน   |
| unknown        | ปลอดภัยกว่า `any` ต้องตรวจชนิดก่อนใช้ |

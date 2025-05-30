# TypeScript Theory Review (Day 24-27)

## Overview

เอกสารนี้เป็นการทบทวนเนื้อหาทฤษฎีสำคัญของ TypeScript ช่วง Day 24-27 เพื่อเสริมความเข้าใจรากฐานและแนวคิดเชิงลึกที่ควรรู้ก่อนเริ่มเขียนโค้ดจริง

---

## ✅ Day 24 – TS-00: Core Types

### Primitive Types (`string`, `number`, `boolean`)

- **string**: ใช้แทนข้อมูลข้อความทุกชนิด เช่น ชื่อ, คำอธิบาย
- **number**: ตัวเลขทั้งจำนวนเต็มและทศนิยม
- **boolean**: ค่าความจริง มีเพียง true หรือ false

### Literal Types

- กำหนดค่าตัวแปรให้รับได้เฉพาะค่าที่กำหนด เช่น `'yes' | 'no'`, `1 | 0`
- ช่วยเพิ่มความปลอดภัยและจำกัดค่าที่เป็นไปได้

### Union Types

- การรวมหลาย type เข้าด้วยกัน เช่น `string | number`
- ใช้กับกรณีข้อมูลที่อาจมาได้หลายรูปแบบ

### Intersection Types

- การรวม property ของหลาย type ให้รวมอยู่ใน object เดียวกัน เช่น `A & B`
- เหมาะกับข้อมูลที่ต้องการความซับซ้อนขึ้น

---

## ✅ Day 25 – TS-01: Functions & Generics

### Typed Functions

- กำหนดชนิดข้อมูลให้กับ parameter และค่าที่ return
- เพิ่มความปลอดภัย ลดข้อผิดพลาดจากการใช้งานผิด type

### Generics (`<T>`)

- Template ชนิดข้อมูลที่สามารถนำไปใช้ซ้ำกับข้อมูลหลากหลายชนิด
- ช่วยให้ฟังก์ชัน/โครงสร้างข้อมูลมีความยืดหยุ่นสูง

### Constraints

- จำกัดขอบเขตของ generics ด้วย `extends`
- เพื่อแน่ใจว่า type ที่รับเข้ามามี property หรือโครงสร้างที่ต้องการ

### void / never / unknown

- **void**: ฟังก์ชันที่ไม่มีค่าคืนกลับ
- **never**: ฟังก์ชันที่ไม่มีวันคืนค่า (เช่น error หรือ loop ไม่สิ้นสุด)
- **unknown**: ข้อมูลชนิดใดก็ได้แต่ต้องตรวจสอบก่อนใช้งานจริง

---

## ✅ Day 26 – TS-02: Advanced Utilities

### Utility Types: Partial, Pick, Omit

- **Partial<T>**: ทุก property เป็น optional
- **Pick<T, K>**: เลือก property บางตัวจาก T
- **Omit<T, K>**: เอา property บางตัวออกจาก T

### keyof, typeof, ReturnType

- **keyof**: ได้ชื่อ property ของ type ในรูปแบบ union
- **typeof**: ใช้ type ของตัวแปรที่ประกาศไว้แล้ว
- **ReturnType**: ได้ชนิดข้อมูลที่ฟังก์ชันคืนกลับ

### Mapped / Conditional Types

- สร้าง type ใหม่จาก type เดิม เช่น เปลี่ยน property ทั้งหมดให้เป็น readonly หรือ optional
- กำหนด type ตามเงื่อนไข เช่น `T extends U ? X : Y`

---

## ✅ Day 27 – TS-03: Type Guards & Declaration

### User-defined Type Guards

- ฟังก์ชันที่ตรวจสอบชนิดข้อมูลจริงขณะ runtime
- ช่วยให้โค้ดปลอดภัยและ IDE เข้าใจ type ในแต่ละ branch

### Declaration Merging

- การรวมประกาศ type/interface ที่ชื่อเดียวกันในหลายที่
- เหมาะสำหรับขยายระบบ/ไลบรารีโดยไม่แก้โค้ดต้นฉบับ

---

## สาระสำคัญที่ควรทบทวน

- เข้าใจความแตกต่างและการเลือกใช้แต่ละประเภท type
- เห็นความสำคัญของ generics ในการออกแบบโค้ดที่ reusable และ type-safe
- รู้จัก utility types และแนวคิด advanced types ที่ช่วยให้โค้ดปลอดภัยและยืดหยุ่นสูง
- ตระหนักถึงความสำคัญของ Type Guards และ Declaration Merging ในงานจริง

---

> **หมายเหตุ:** เอกสารนี้เหมาะสำหรับทบทวนแนวคิดทฤษฎีเป็นหลัก หากต้องการศึกษาเชิงปฏิบัติหรือดูตัวอย่างโค้ด แนะนำให้ศึกษาไฟล์ README ในแต่ละวันหรือวิดีโอประกอบ

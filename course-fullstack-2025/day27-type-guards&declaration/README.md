# TS-03 Examples: Type Guards & Declaration Files

## 📘 คำอธิบายโดยรวม

ในไฟล์นี้เราจะได้ฝึกใช้เทคนิคสำคัญของ TypeScript ที่เรียกว่า **Type Guards** เพื่อให้โปรแกรมสามารถารถิบสามารถกับข้อมูลที่อาจมีหลายชนิด (union type) และได้เรียนรู้การสร้าง **Declaration Files** ซึ่งเป็นไฟล์ `.d.ts` ที่ใช้บอกชนิดข้อมูลของ JavaScript ปกติ เพื่อให้ใช้ร่วมกับ TypeScript ได้อย่างปลอดภัย และแม่นยำ

---

## 🔍 ตัวอย่างที่ 1: typeof

ใช้ typeof เพื่อตรวจสอบค่าพื้นฐานมาตรฐาน

```ts
function formatValue(value: string | number) { ... }
```

- แยกแน่บว่าเป็น string หรือ number
- บอกให้ TypeScript เข้าใจ method สำหรับ type ที่มีความสอดคล้าย

---

## 🔍 ตัวอย่างที่ 2: in

ใช้ "property" in object เพื่อตรวจว่า object นั้นมี property หรือไม่

```ts
function printUser(user: Admin | Guest) { ... }
```

- เสร่าได้ว่า user เป็น Admin หรือ Guest
- บ่อเป็นแบบ object ที่ไม่ได้สร้างมาจาก class

---

## 🔍 ตัวอย่างที่ 3: instanceof

ใช้แสดง instanceof ตรวจว่า object เป็น instance ของ class ใด้หรือไม่

```ts
function printArea(shape: Rectangle | Circle) { ... }
```

- ใช้ในการทำงานแต่ต่างของ class
- ไม่มีประโยชน์ในการเสร็จ object แบบ literal

---

## 🔍 ตัวอย่างที่ 4: Custom Type Guard

เป็นการสร้าง Type Guard ด้วยตัวเราเอง

```ts
function isLaptop(device: Laptop | Tablet): device is Laptop { ... }
```

- ใช้ keyword `device is Laptop` บอก TypeScript ว่า แน่เละค่าเป็น Laptop
- ทำให้โค้ดใช้ได้ปลอดภัย เมื่อแยก object แบบ deep

---

## 📆 Declaration Files (.d.ts) คืออะไร

- ไฟล์ .d.ts เป็นการบอก TypeScript ว่าไฟล์ JavaScript นั้นมีฟังก์ชั่นเหลือ export ออกมา
- เพื่อให้ TS รู้ว่ามี add(), PI และใช้ใน import ในโครงการ .ts ได้

```ts
// math-lib.d.ts

declare function add(a: number, b: number): number;
declare const PI: number;

export { add, PI };
```

---

## 🔹 สรุป

- Type Guards ช่วยให้ TypeScript เข้าใจ object ใน union ได้ชัดเจน
- Declaration Files ช่วยให้โครงการ TypeScript ทำงานร่วมกับ JavaScript ได้ปลอดภัย

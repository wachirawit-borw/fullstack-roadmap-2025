# Day 16 - JS00: Syntax & Variables

## สารบัญเนื้อหา

- [x] แนะนำภาษา JavaScript
- [x] ความหมายของคำว่า "Syntax"
- [x] ตัวแปร: `var`, `let`, `const`
- [x] ขอบเขตตัวแปร (scope) และ hoisting
- [x] ชนิดข้อมูล (Primitive / Non-Primitive)
- [x] typeof
- [x] ตัวอย่างการใช้งาน

---

## บทเรียนวันนี้

JavaScript เป็นภาษาสำหรับเขียนสคริปต์ที่รันในเบราว์เซอร์ และเป็นหัวใจหลักของการทำเว็บแบบ interactive เช่น การตอบสนองเมื่อผู้ใช้คลิกปุ่ม หรือดึงข้อมูลแบบ dynamic จาก API

ในบทเรียนนี้ได้เรียนรู้:

- ความหมายของ Syntax เบื้องต้น เช่นการใช้ `;`, comment
- ความแตกต่างระหว่าง `var`, `let`, `const`
- เข้าใจ hoisting และ block scope
- รู้จักชนิดข้อมูลทั้ง Primitive และ Non-Primitive
- ใช้ `typeof` เพื่อตรวจสอบชนิดข้อมูล
- ฝึกเขียนโค้ดโดยใช้ `console.log()` เพื่อทดสอบตัวแปร

---

## ตัวอย่างโค้ด

```js
// Primitive types
const myName = "Frank";
let age = 25;
let isStudent = true;
let notAssigned;
let emptyValue = null;
const bigNumber = 1234567890123456789012345678901234567890n;
const uniqueId = Symbol("id");

// Non-primitive types
const person = { name: "Frank", age: 25, isStudent: true };
let colors = ["red", "green", "blue"];
function greet(name) {
  return `Hello, ${name}`;
}

// var / let / const
var globalVar = "I'm var";
let counter = 0;
const PI = 3.14159;

counter = counter + 1;

console.log("Greeting:", greet("Frank"));

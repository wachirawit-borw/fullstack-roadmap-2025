// ================================
// ✅ ตัวแปรแบบ Primitive Types
// ================================

// String
const myName = "Frank";           // const: ค่าคงที่
// Number
let age = 25;                     // let: เปลี่ยนค่าได้
// Boolean
let isStudent = true;
// Undefined
let notAssigned;                 // undefined โดยยังไม่กำหนดค่า
// Null
let emptyValue = null;
// BigInt (ต้องเติม n ท้ายตัวเลข)
const bigNumber = 1234567890123456789012345678901234567890n;
// Symbol (ค่าไม่ซ้ำ)
const uniqueId = Symbol("id");

// ================================
// ✅ ตัวแปรแบบ Non-Primitive Types
// ================================

// Object
const person = {
  name: "Frank",
  age: 25,
  isStudent: true
};

// Array
let colors = ["red", "green", "blue"];

// Function
function greet(name) {
  return `Hello, ${name}`;
}

// ================================
// ✅ การใช้ var, let, const
// ================================

var globalVar = "I'm var";        // หลีกเลี่ยงการใช้
let counter = 0;                  // ใช้เมื่อค่าจะเปลี่ยน
const PI = 3.14159;               // ใช้กับค่าคงที่

counter = counter + 1;            // ✅ ได้
// PI = 3.15;                     // ❌ Error

// ================================
// ✅ console.log ทั้งหมด
// ================================

console.log("myName:", myName, typeof myName);
console.log("age:", age, typeof age);
console.log("isStudent:", isStudent, typeof isStudent);
console.log("notAssigned:", notAssigned, typeof notAssigned);
console.log("emptyValue:", emptyValue, typeof emptyValue);
console.log("bigNumber:", bigNumber, typeof bigNumber);
console.log("uniqueId:", uniqueId, typeof uniqueId);

console.log("person:", person, typeof person);
console.log("colors:", colors, typeof colors);
console.log("greet function:", greet, typeof greet);

console.log("globalVar:", globalVar);
console.log("counter:", counter);
console.log("PI:", PI);

console.log("Greeting:", greet("Frank"));

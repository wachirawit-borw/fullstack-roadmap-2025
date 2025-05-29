// ✅ TS-03-examples.ts

// ----------------------------------------
// ตัวอย่างที่ 1: typeof (ใช้กับ primitive types)
// ----------------------------------------

function formatValue(value: string | number) {
  if (typeof value === "string") {
    // ถ้าเป็น string → ทำงานกับข้อความ
    console.log("ข้อความเป็นตัวพิมพ์ใหญ่:", value.toUpperCase());
  } else {
    // ถ้าเป็น number → ทำงานกับตัวเลข
    console.log("ปัดเศษทศนิยม:", value.toFixed(2));
  }
}

formatValue("hello");
formatValue(3.14159);


// ----------------------------------------
// ตัวอย่างที่ 2: in (เช็ค property ใน object)
// ----------------------------------------

type Admin = { name: string; permission: string[] };
type Guest = { name: string; visitDate: string };

function printUser(user: Admin | Guest) {
  if ("permission" in user) {
    console.log("ผู้ดูแลระบบ:", user.name, "สิทธิ์:", user.permission.join(", "));
  } else {
    console.log("แขก:", user.name, "เยี่ยมชมเมื่อ:", user.visitDate);
  }
}

const user1: Admin = { name: "Alice", permission: ["edit", "delete"] };
const user2: Guest = { name: "Bob", visitDate: "2025-05-29" };

printUser(user1);
printUser(user2);


// ----------------------------------------
// ตัวอย่างที่ 3: instanceof (ใช้กับ class)
// ----------------------------------------

class Rectangle {
  constructor(public width: number, public height: number) {}
  area() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(public radius: number) {}
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

function printArea(shape: Rectangle | Circle) {
  if (shape instanceof Rectangle) {
    console.log("พื้นที่สี่เหลี่ยม:", shape.area());
  } else {
    console.log("พื้นที่วงกลม:", shape.area());
  }
}

printArea(new Rectangle(10, 5));
printArea(new Circle(7));


// ----------------------------------------
// ตัวอย่างที่ 4: Custom Type Guard (สร้าง guard เอง)
// ----------------------------------------

type Laptop = { brand: string; boot: () => void };
type Tablet = { brand: string; touch: () => void };

// ฟังก์ชันที่ช่วยแยกว่าอุปกรณ์นี้เป็น Laptop หรือไม่
function isLaptop(device: Laptop | Tablet): device is Laptop {
  return (device as Laptop).boot !== undefined;
}

function startDevice(device: Laptop | Tablet) {
  if (isLaptop(device)) {
    console.log("เริ่มเครื่องคอมพิวเตอร์ยี่ห้อ", device.brand);
    device.boot();
  } else {
    console.log("เริ่มแท็บเล็ตยี่ห้อ", device.brand);
    device.touch();
  }
}

const myLaptop: Laptop = {
  brand: "Dell",
  boot: () => console.log("Booting Windows...")
};

const myTablet: Tablet = {
  brand: "iPad",
  touch: () => console.log("Touchscreen activated.")
};

startDevice(myLaptop);
startDevice(myTablet);


// ----------------------------------------
// ตัวอย่างที่ 5: การใช้ Declaration File
// (อธิบาย: ใช้กับ .d.ts แยกในโปรเจกต์จริง)
// ----------------------------------------
// ปกติเราจะเขียนไฟล์ math-lib.d.ts คู่กับ math-lib.js
// แล้วใน TypeScript ใช้ import แบบนี้:

// import { add, PI } from './math-lib'; // สมมุติว่า JS ไม่มี type
// console.log(add(3, 4), PI);

// ถ้าไม่มี .d.ts → TypeScript จะไม่รู้จักฟังก์ชันและจะเตือน
// ถ้ามี math-lib.d.ts → TS จะ autocompletion และ type safety

// ตัวอย่าง math-lib.d.ts ที่ควรมี:
// declare function add(a: number, b: number): number;
// declare const PI: number;
// export { add, PI };


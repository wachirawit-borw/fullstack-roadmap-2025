# Day 20 - JS-04: Unit Testing with Vitest

## ✅ TL;DR

- เรียนรู้การเขียน Unit Test ด้วยเครื่องมือ **Vitest**
- ใช้ `describe`, `it`, `expect` เพื่อทดสอบฟังก์ชัน
- ตรวจสอบการทำงานของโค้ด **ก่อนนำไปใช้จริงในหน้าเว็บ**
- รันเทสอัตโนมัติและตรวจ coverage ≥ 80%
- วัดความมั่นใจว่าโค้ดทำงานถูกต้อง และลดบั๊ก

---

## 🧠 INTRO: ทำไมต้องมี Unit Testing?

ในโปรเจกต์จริง เราไม่ควรรอให้ผู้ใช้เจอบั๊กผ่านหน้าเว็บก่อนถึงจะแก้  
Unit Test ช่วยให้เราตรวจสอบ “หน่วยเล็กที่สุด” ของโค้ด (เช่นฟังก์ชัน) ว่าทำงานถูกต้องหรือไม่

## ข้อดี

- มั่นใจว่า logic ถูกต้อง
- ทดสอบก่อนมี UI ได้
- ปรับโค้ดได้โดยไม่กลัวพัง
- เทสอัตโนมัติได้ใน CI/CD

---

## 🛠️ INSTALL

```bash
# สร้างโปรเจกต์ใหม่
mkdir day20-unit-testing-vitest && cd day20-unit-testing-vitest

# เริ่มต้น npm
npm init -y

# ตั้งค่าเป็น ES Module
npm pkg set type="module"

# ติดตั้ง Vitest
npm install -D vitest

```

---

## เพิ่ม script ใน package.json

```js
"scripts": {
  "test": "vitest",
  "coverage": "vitest run --coverage"
}

```

---

## 📁 STRUCTURE

day20-unit-testing-vitest/
├── src/
│   └── math.js
├── test/
│   └── math.test.js
├── package.json

---

## ✍️ EXAMPLE CODE

### src/math.js

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

```

---

### test/math.test.js

```js
import { describe, it, expect } from 'vitest';
import { add, subtract } from '../src/math.js';

describe('math.js', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('subtracts numbers correctly', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

```

---

### 🧪 RUN TEST

npm test

---

### ผลลัพธ์ที่คาดหวัง

✓ adds numbers correctly
✓ subtracts numbers correctly

---

### 🔍 MOCK DOM / FETCH (เบื้องต้น)

### ติดตั้ง jsdom (ถ้าทดสอบ DOM)

npm install -D jsdom

### Mock fetch

```js
global.fetch = vi.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ name: 'Frank' }) })
);
```

### 📊 CHECK COVERAGE ≥ 80%

npm run coverage

ถ้ายังไม่เคยติดตั้ง coverage provider → Vitest จะถามให้ติดตั้ง @vitest/coverage-v8 อัตโนมัติ

File        | % Stmts | % Branch | % Funcs | % Lines
------------|---------|----------|--------|---------
math.js     | 100     | 100      | 100    | 100

🧠 CONCLUSION
เราทดสอบฟังก์ชันแบบแยกหน่วย (Unit)

เทสผ่านเมื่อค่าที่ return ตรงกับความคาดหวัง

ใช้ Vitest รันเทสใน terminal ได้เลย

ทดสอบได้แม้ไม่มีหน้าเว็บ → ช่วยลดบั๊ก และ refactor ได้มั่นใจ

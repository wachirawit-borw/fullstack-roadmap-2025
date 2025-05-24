# ✅ Day 19: JavaScript Module & Bundler

## 🧠 สาระสำคัญ (Key Takeaways)

- 📦 เข้าใจหลักการของ JavaScript Modules (ES Modules, CommonJS)
- 🧩 รู้จัก Module Bundlers เช่น Webpack, Vite, Rollup และการทำงานของมัน
- 🔄 เข้าใจการสร้าง Dependency Graph และขั้นตอนการ Bundle โค้ด
- 🛠️ ทดลองใช้ Webpack เพื่อจัดการและรวมไฟล์ JavaScript หลายไฟล์ให้เป็นไฟล์เดียว
- 📁 เข้าใจความสัมพันธ์ระหว่าง index.html → main.js → index.js → math.js

---

## 📚 หัวข้อที่เรียนวันนี้

### 📦 JavaScript Modules

- ใช้ `import` / `export` เพื่อแบ่งส่วนโค้ด
- ช่วยให้แยก logic, จัดการ scope, และนำโค้ดกลับมาใช้ใหม่ได้ง่ายขึ้น
- ความแตกต่างระหว่าง ES Modules และ CommonJS:

  | Feature       | ES Modules (ESM) | CommonJS    |
  |---------------|------------------|-------------|
  | นำเข้า        | `import`         | `require()` |
  | ส่งออก        | `export`         | `module.exports` |
  | โหลดแบบ       | async            | sync        |
  | ใช้กับ        | Browser & Node.js | Node.js เท่านั้น |

---

### 🛠️ Module Bundler

- เครื่องมือที่รวม (bundle) ไฟล์ JavaScript หลายไฟล์ให้เป็นไฟล์เดียว
- Webpack เป็น bundler ยอดนิยม ที่สามารถจัดการ assets อื่น ๆ ได้ด้วย (เช่น CSS, รูปภาพ)
- กระบวนการของ bundler:
  1. เริ่มจาก entry point (index.js)
  2. วิเคราะห์ว่า import อะไร
  3. สร้าง dependency graph
  4. รวมไฟล์ทั้งหมดเป็น bundle (main.js)

---

### 🧪 Workshop ที่ทำ

#### ✅ โครงสร้างไฟล์

day19-module-bundler/
├── dist/
│ └── index.html
├── src/
│ ├── index.js
│ └── math.js
├── webpack.config.js
├── package.json

#### ✅ เนื้อหาแต่ละไฟล์

- `math.js` → export ฟังก์ชัน `add(a, b)`
- `index.js` → import `add` แล้ว console.log(ผลรวม)
- `index.html` → โหลด `main.js` ที่ Webpack สร้างขึ้น
- `webpack.config.js` → กำหนด entry/output สำหรับการ bundle

---

### 🔗 ความสัมพันธ์ของไฟล์

index.html
⬇️
main.js (สร้างโดย Webpack)
⬇️
index.js
⬇️
math.js

- `index.html` โหลด `main.js`
- `main.js` รวมโค้ดจาก `index.js` และ `math.js`
- `index.js` คือ entry ของ Webpack
- `math.js` ถูก import มาใช้งานผ่าน `index.js`
- Webpack เป็นตัวที่จัดการและรวมทุกอย่างก่อนแสดงผล

---

## ✅ Checklist ความเข้าใจวันนี้

- [x] เข้าใจและใช้ ES Modules ได้ (`import/export`)
- [x] เข้าใจหน้าที่ของ Module Bundler (Webpack)
- [x] สามารถติดตั้ง Webpack และ config เบื้องต้นได้
- [x] เข้าใจลำดับการทำงานระหว่าง HTML → Bundle → Source
- [x] สามารถ debug และดูผลลัพธ์ผ่าน Console ได้

---

## 🔍 คำศัพท์ใหม่วันนี้

| คำศัพท์          | ความหมาย |
|------------------|----------|
| Module           | หน่วยโค้ดแยกย่อย ใช้ `import` / `export` |
| Bundler          | เครื่องมือรวมไฟล์และ dependency |
| Dependency Graph | แผนภาพความสัมพันธ์ของไฟล์ที่ import กัน |
| Entry Point      | ไฟล์เริ่มต้นที่ใช้รันโปรแกรม |
| Output           | ไฟล์ปลายทางที่ Webpack สร้าง (main.js) |

---

## 🔗 แหล่งเรียนรู้เพิ่มเติม

- [MDN – JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Webpack Official Docs](https://webpack.js.org/)
- [Vite Guide](https://vitejs.dev/)
- [Rollup Documentation](https://rollupjs.org/)

---

## 🗂️ ไฟล์ที่เกี่ยวข้อง

- `src/index.js`
- `src/math.js`
- `dist/index.html`
- `webpack.config.js`
- `main.js` (สร้างโดย Webpack)

---

---

## 🧩 เสริมจาก Day 19 – เรียนรู้ Vite + ESLint & Prettier Integration

หลังจากเรียนรู้การใช้ Webpack และ bundle โค้ดแบบ manual แล้ว  
เราได้ทดลองใช้เครื่องมือสมัยใหม่เพิ่มเติมเพื่อให้ dev workflow มีประสิทธิภาพมากยิ่งขึ้น

---

### ⚡ รู้จัก Vite

- Vite คือ dev tool สำหรับ frontend ยุคใหม่ที่เน้นความเร็ว
- ใช้ native ES Modules → แก้โค้ดแล้วอัปเดตทันที (HMR)
- ใช้ Rollup ในการ build production bundle
- โครงสร้างเบา ไม่ต้อง config เยอะเหมือน Webpack

### 🏁 คำสั่งเริ่มต้น

```bash
npm create vite@latest vite-eslint-demo
cd vite-eslint-demo
npm install
npm run dev


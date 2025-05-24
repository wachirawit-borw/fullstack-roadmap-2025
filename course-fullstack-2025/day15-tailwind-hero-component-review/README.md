# Day15 – Tailwind Sprint: Hero Remix & Component Kit

## 📖 คำอธิบายบทเรียน

วันนี้เป็นการรวมความรู้ทั้งหมดของ Tailwind CSS และการเริ่มต้นใช้งาน Component Kit โดยใช้ Remix Framework และ Storybook เพื่อพัฒนา UI อย่างเป็นระบบ  
เน้นการเขียน Component ที่ใช้ซ้ำได้ (Reusable) พร้อมกับการ preview แบบ isolate ด้วย Storybook

---

## 🎯 วัตถุประสงค์การเรียนรู้

เมื่อเรียนจบบทนี้ ผู้เรียนจะสามารถ:

- เข้าใจวิธีสร้าง Hero Section ด้วย Tailwind ที่ Responsive และสามารถปรับแต่งได้
- รู้จักแนวทางการออกแบบ UI แบบ Atomic Design ผ่าน Component Kits
- ใช้ Tailwind ร่วมกับ Remix เพื่อสร้างส่วนประกอบที่มีคุณภาพ ใช้ซ้ำได้
- แบ่งส่วน component ได้อย่างเป็นระบบด้วย Utility Classes และ Design Tokens
- ติดตั้งและใช้งาน Storybook เพื่อ preview UI Components แยกส่วน

---

## 🧠 คำศัพท์สำคัญ (Key Terms)

| คำศัพท์        | คำอธิบาย                                                                 |
|----------------|---------------------------------------------------------------------------|
| `Hero Section` | ส่วนบนสุดของเว็บไซท์ที่มักประกอบด้วยภาพขนาดใหญ่ ข้อความเด่น และ CTA  |
| `Component Kit`| ชุดของ UI components ที่สามารถนำมาใช้ซ้ำได้ เช่น ปุ่ม การ์ด Navbar     |
| `@apply`       | คำสั่งใน Tailwind ที่ใช้รวม utility class หลายๆ ตัวเป็น class เดียว   |
| `Atomic Design`| แนวคิดการจัดการ UI โดยเริ่มจากหน่วยย่อยที่สุด (เช่น ปุ่ม) ไปจนถึง Layout |
| `Storybook`    | เครื่องมือพัฒนา UI Components แยกจากแอปจริง พร้อมตัวอย่างและเอกสาร  |

---

## 🧪 ตัวอย่างที่สร้างในบทเรียนนี้

### ✅ Button Component

- สร้าง `<Button />` ที่มี style ด้วย Tailwind
- มีสองสถานะ: `Primary`, `Secondary`
- เขียน story ด้วย `Button.stories.tsx`

### ✅ Card Component

- การ์ดที่ประกอบด้วยรูปภาพ, หัวข้อ, รายละเอียด และปุ่ม CTA
- ใช้ props เพื่อควบคุมสถานะ เช่น `showButton`
- มี story หลายแบบให้ preview:
  - Default
  - NoButton
  - Long Description

---

## 🧰 เครื่องมือที่ใช้

- Tailwind CSS
- React (with TypeScript)
- Storybook v8 (React + Vite)
- Remix (พื้นฐาน)

---

## 🧩 ไฟล์และโฟลเดอร์ที่เกี่ยวข้อง

```bash
course-fullstack-2025/
└── day15-tailwind-hero-component-review/
    ├── .storybook/
    │   ├── main.js
    │   └── preview.js
    ├── src/
    │   ├── components/
    │   │   ├── Button.tsx
    │   │   ├── Button.stories.tsx
    │   │   ├── Card.tsx
    │   │   └── Card.stories.tsx
    │   └── styles/
    │       └── tailwind.css
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── tsconfig.json
    └── package.json

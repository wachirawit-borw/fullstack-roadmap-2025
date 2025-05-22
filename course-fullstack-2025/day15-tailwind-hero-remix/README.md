# Day15 – Tailwind Sprint: Hero Remix & Component Kit

## 🧠 คำอธิบายบทเรียน

ในบทเรียนนี้เราจะทบทวนการใช้งาน Tailwind CSS ในบริบทของการสร้าง Hero Section และการใช้งาน Component Kit โดยใช้ Remix Framework เป็นพื้นฐาน การเรียนรู้จะเน้นไปที่การนำ Utility-first CSS มาประยุกต์ใช้สร้างองค์ประกอบ UI ที่สามารถใช้ซ้ำได้ มีโครงสร้างที่ชัดเจน พร้อมทำงานร่วมกับระบบ routing และ layout ของ Remix ได้อย่างมีประสิทธิภาพ

## 🎯 วัตถุประสงค์การเรียนรู้

เมื่อเรียนจบบทนี้ ผู้เรียนจะสามารถ:

- เข้าใจวิธีสร้าง Hero Section ด้วย Tailwind ที่ Responsive และสามารถปรับแต่งได้ง่าย
- รู้จักแนวทางการออกแบบ UI แบบ Atomic Design ผ่าน Component Kits
- ใช้ Tailwind ร่วมกับ Remix เพื่อสร้างส่วนประกอบเว็บที่ดูดี มีประสิทธิภาพ
- ปรับแต่ง component ได้อย่างยืดหยุ่นด้วย Utility Classes และ Design Tokens

## 📦 คำศัพท์สำคัญ (Key Terms)

| คำศัพท์ | คำอธิบาย |
|---------|-----------|
| `Hero Section` | ส่วนบนสุดของเว็บไซต์ที่มักประกอบด้วยข้อความสำคัญและภาพพื้นหลังเพื่อดึงดูดความสนใจ |
| `Component Kit` | ชุดของ UI components ที่สามารถนำมาใช้ซ้ำได้ เช่น ปุ่ม การ์ด Navbar |
| `@apply` | คำสั่งใน Tailwind ที่ใช้รวม Utility หลายตัวเข้ากับ class ที่กำหนดเอง |
| `Atomic Design` | แนวคิดในการออกแบบ UI โดยเริ่มจากส่วนย่อยที่สุด (เช่น ปุ่ม) ไปจนถึง Layout |
| `Remix` | Fullstack React Framework ที่เน้น performance และ server-side rendering |

## 🏗️ ภาพรวมแนวคิดหลัก

### ✅ Hero Section

Hero Section คือพื้นที่สำคัญด้านบนสุดของเว็บไซต์ที่มีจุดประสงค์เพื่อดึงดูดความสนใจ โดยมักประกอบด้วย:

- ข้อความหลัก (เช่นชื่อบริการ)
- CTA (ปุ่มกระตุ้นการคลิก เช่น “สมัครเลย”)
- พื้นหลัง (ภาพ/สี gradient)
- Layout ที่ responsive และเน้น mobile-first

```html
<section class="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center">
  <div class="bg-black bg-opacity-50 p-8 rounded-lg text-white text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome to Our App</h1>
    <button class="bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded">Get Started</button>
  </div>
</section>
---

## 📝 เฉลยแบบฝึกหัด (Quiz Answers)

### ✅ คำตอบข้อสอบปรนัย (Multiple Choice)

1. C – สร้างความประทับใจแรกและกระตุ้นการคลิก  
2. A – bg-center bg-cover h-screen  
3. B – ใช้สร้าง class แบบ custom จาก utility class  
4. C – ช่วยให้ UI เขียนซ้ำได้และมีมาตรฐาน  
5. C – รองรับการแยก Layout และ Component ได้ดี  

---

### ✍️ คำตอบแบบฝึกอัตนัย (Open-ended)

**1. องค์ประกอบของ Hero Section ที่ดี**  
ควรมีภาพพื้นหลังที่ดึงดูด, ข้อความเด่นชัดเจน, ปุ่ม CTA ที่กระตุ้นให้คลิก เช่น สมัครเลย หรือเลือก plan เหมือนเว็บ Grap หรือเว็บการศึกษา

**2. ตัวอย่างโค้ด HTML ของ Hero Section พร้อม CTA**

```html
<section class="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center">
  <div class="bg-black bg-opacity-50 p-8 rounded-lg text-white text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome to Our App</h1>
    <button class="bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded">Get Started</button>
  </div>
</section>

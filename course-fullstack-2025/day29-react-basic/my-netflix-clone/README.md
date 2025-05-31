# 📘 React Netflix Clone (Basic UI)

## 🧠 หัวข้อที่ได้เรียนรู้

- การใช้ React component เพื่อแยก UI ออกเป็นส่วนย่อย ๆ (Reusable Components)
- การส่งข้อมูลด้วย props ระหว่าง components
- การใช้ `.map()` เพื่อแสดงข้อมูลซ้ำแบบ dynamic
- การจัดวาง layout และแนวคิด component-based design
- การจัดการกับ static data (`movieData.js`) แบบ array of objects
- การใส่ภาพผ่าน URL ใน JSX (img src)
- การจัดการ CSS กับ component ใน React

## 📂 โครงสร้างไฟล์หลัก

```plaintext
my-netflix-clone/
├── src/
│   ├── App.js           # Component หลักของแอป
│   ├── MovieRow.js      # แสดงหมวดหมู่หนัง 1 แถว
│   ├── movieData.js     # ข้อมูล mock รายชื่อหนัง
│   ├── App.css          # CSS หลักของหน้าเว็บ
│   └── MovieRow.css     # CSS เฉพาะของแต่ละแถวหนัง
```

## 📄 ตัวอย่างข้อมูลใน `movieData.js`

```js
{
  title: "Top Rated",
  movies: [
    { name: "Inception", img: "https://..." },
    { name: "Fight Club", img: "https://..." }
  ]
}
```

## 🧱 โค้ด React ที่เกี่ยวข้อง

### `App.js`

- อ่านข้อมูลจาก `movieData`
- ส่ง `title` และ `movies` ไปยัง `MovieRow`

### `MovieRow.js`

- รับ props แล้วใช้ `.map()` แสดงรายการภาพยนตร์ในแต่ละหมวด
- ใช้ `<img src={img} alt={name} />` แสดงโปสเตอร์หนัง

## 🎨 การจัด CSS

- ใช้ className ที่เหมาะสม เช่น `.movie-row`, `.poster`, `.row-title`
- จัด style แบบแนวนอนด้วย `display: flex` และ `overflow-x: auto`

## 🚧 ปัญหาที่เจอและบทเรียนสำคัญ

| ปัญหา                   | บทเรียนที่ได้                                       |
| ----------------------- | --------------------------------------------------- |
| ภาพไม่แสดง              | ตรวจสอบว่า URL มีอยู่จริง (เปิดในเบราว์เซอร์ได้ไหม) |
| CORB / CORS             | ไม่ใช่ทุกเว็บอนุญาตให้โหลดภาพจากโดเมนภายนอก         |
| ลิงก์ภาพมั่วหรือหมดอายุ | ควรใช้ภาพจาก CDN ที่เสถียร หรืออัปโหลดเอง           |

## ✅ สิ่งที่ทำงานได้สมบูรณ์

- Component-based design
- การส่ง props และ render ข้อมูลแบบ dynamic
- CSS layout แบบ responsive สำหรับแถวหนัง
- โครงสร้าง React + Static Data ที่พร้อมต่อยอด

## 🚀 สิ่งที่สามารถต่อยอดได้ต่อไป

- เชื่อมต่อ API จริง เช่น TMDB API
- เพิ่มปุ่ม scroll ซ้าย/ขวา แบบ Netflix
- ใส่ปุ่ม Play / Watch Trailer
- เพิ่มการคลิกเพื่อแสดงรายละเอียดหนัง

---

> 🔁 สรุป: โปรเจกต์นี้ช่วยให้เข้าใจ React เบื้องต้นผ่านการสร้าง UI จริง โดยแยกข้อมูล / โค้ด / สไตล์ออกเป็นสัดส่วน พร้อมใช้พื้นฐานสำหรับทำแอปจริงต่อไปได้

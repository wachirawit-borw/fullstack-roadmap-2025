# Day 14 – FS02 Tailwind Sprint : Component Kit

> **เป้าหมายวันนี้** ─ สร้างชุด UI Component (Button, Card, Form, Dark-Mode Toggle, Modal)  
> ด้วยแนวคิด utility-first, `@apply` และการปรับ theme ผ่าน Tailwind Config

---

## 📝 Prerequisite Checklist

| หัวข้อต้องรู้แล้ว | ลิงก์ทบทวน |
|------------------|-----------|
| HTML พื้นฐาน     | [MDN – HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| Flexbox / Spacing | [Tailwind Flex](https://tailwindcss.com/docs/flex) |
| Responsive Basics | [Tailwind Breakpoints](https://tailwindcss.com/docs/responsive-design) |

---

## 🧠 ### Concept Brief

Tailwind CSS ใช้แนวคิด **utility-first** ทำให้เรา “ประกอบ” UI ที่ซับซ้อนได้จาก class เล็ก ๆ แทนที่จะเขียน CSS แยกไฟล์ เมื่อโปรเจกต์โตขึ้น การรวม utility หลายตัวเข้า “class สั้น ๆ” ด้วย `@apply` จะทำให้โค้ดอ่านง่าย และปรับเปลี่ยนได้เร็ว

ในบท Component Kit วันนี้ คุณจะได้:

1. สร้าง **ปุ่ม (Button)** ที่นำกลับใช้ซ้ำได้  
2. สร้าง **Card** พร้อม shadow / rounded  
3. ทำ **Form** ที่มี focus-ring ครบ A11y  
4. ใส่ **Dark Mode** toggle แบบกดสลับ  
5. เพิ่ม **Modal** overlay (พื้นฐาน interaction)

ทุกตัวอย่างใช้สี `brand` จาก `tailwind.config.js` ให้เข้ากับธีมโปรเจกต์ได้ทันที

---

## 📚 ### Glossary

| Utility / Class | ผลลัพธ์ | กรณีใช้ |
|-----------------|---------|---------|
| `@apply` | รวม utility เป็น class เดียว | สร้าง `.btn`, `.card` |
| `dark:` | สไตล์เมื่อโหมดมืด | `dark:bg-gray-800` |
| `focus:ring-*` | วงแหวน focus A11y | `focus:ring-brand` |
| `fixed inset-0` | เต็มจอทุกด้าน | Overlay modal |
| `transition` | การเปลี่ยนสีลื่น | Hover/Theme toggle |

---

## 🔸 Component 1 : Button

▶️ **Try on StackBlitz** → <https://stackblitz.com/edit/tw-btn-demo>

```html
<button class="btn">กดฉัน</button>
```

---

```css

/* styles.css */
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg bg-brand text-white
           hover:bg-blue-700 transition;
  }
}

```

---

## 🔸 Component 2 : Card

```html

<div class="card max-w-sm">
  <h2 class="text-xl font-bold mb-2">การ์ดตัวอย่าง</h2>
  <p class="text-gray-700 dark:text-gray-300">รองรับโหมดมืด</p>
</div>


```

---

```css

@layer components {
  .card {
    @apply p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md;
  }
}



```

---

## 🔸 Component 3 : Form Input

```html

<input class="block w-full rounded border-gray-300 px-3 py-2
             focus:ring-brand focus:border-brand"
       placeholder="you@example.com" />

```

---

## 🔸 Component 4 : Dark-Mode Toggle

```html

<button id="theme" class="btn text-sm px-3 py-1">🌓</button>

<script>
document.getElementById('theme')
        .addEventListener('click', () =>
          document.documentElement.classList.toggle('dark'));
</script>


```

---

## 🔸 Component 5 : Modal (พื้นฐาน)

```html

<!-- Overlay -->
<div id="overlay"
     class="hidden fixed inset-0 bg-black/50 flex items-center
            justify-center z-50">
  <!-- Modal -->
  <div class="card w-72 text-center">
    <h2 class="text-lg font-bold mb-4">ยินดีต้อนรับ</h2>
    <button id="close" class="btn w-full">ปิด</button>
  </div>
</div>

<script>
const ov = document.getElementById('overlay');
document.getElementById('open').onclick  = () => ov.classList.remove('hidden');
document.getElementById('close').onclick = () => ov.classList.add('hidden');
</script>


```

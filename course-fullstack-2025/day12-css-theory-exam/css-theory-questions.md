# 📝 แบบทดสอบทบทวนเชิงทฤษฎี CSS (CSS-00 ถึง CSS-19)

> แบบฝึกหัดนี้ออกแบบเพื่อทบทวนเนื้อหา CSS ทั้งหมด ตั้งแต่พื้นฐานจนถึงระดับกลาง-สูง (CSS-00 → CSS-19)
>
> * ทุกคำถามเป็นแบบอัตนัย
> * รวมทั้งหมด **100 ข้อ** บทละ 5 ข้อ
> * ใช้สำหรับการฝึกตอบคำถามเชิงแนวคิดก่อนทำงานจริงหรือสอบจริง

---

## 📘 CSS-00: Intro to CSS

```CSS-00

1. อธิบายหน้าที่หลักของ CSS และความสำคัญในการแยก style ออกจาก HTML
2. เปรียบเทียบข้อดี-ข้อเสียของการใช้ Inline, Internal, และ External CSS
3. คำว่า "Cascading" ใน CSS หมายถึงอะไร และมีผลอย่างไรต่อการจัดการ style
4. อธิบายการทำงานของ browser เมื่อโหลดไฟล์ CSS
5. คุณคิดว่าในโปรเจกต์จริงควรใช้วิธีเชื่อม CSS แบบใด เพราะอะไร

```

---

## 📘 CSS-01: Selectors

```plaintext

6. อธิบายลำดับความสำคัญของ selector แบบ `div`, `.class`, และ `#id`
7. ยกตัวอย่างการใช้ combinator selector ที่ซับซ้อน และอธิบายความหมาย
8. ถ้าต้องการเลือก element ที่อยู่ถัดจาก h1 ทันทีควรใช้ selector อะไร และเพราะอะไร
9. เปรียบเทียบข้อดีของ class selector กับ type selector
10. คุณจะใช้ attribute selector ในสถานการณ์ไหน

---

## 📘 CSS-02: Colors & Units

```plaintext

11. อธิบายความแตกต่างระหว่าง `em`, `rem`, `%`, และ `px` พร้อมตัวอย่างการใช้งาน
12. ยกตัวอย่างการใช้ `rgba()` เพื่อออกแบบปุ่มโปร่งใสในกรณี hover
13. การใช้หน่วย `vw` และ `vh` มีข้อดีอะไรบ้างเมื่อออกแบบ responsive
14. ถ้าเว็บไซต์มี theme หลายแบบ การเลือกใช้หน่วยวัดแบบใดดีที่สุด และเพราะอะไร
15. เปรียบเทียบข้อดีของการใช้สีแบบ `hsl()` กับ `hex`

```

---

## 📘 CSS-03: Box Model

```plaintext

16. อธิบายองค์ประกอบของ box model พร้อมลำดับแต่ละชั้น
17. เปรียบเทียบ `box-sizing: content-box` กับ `border-box` ด้วยตัวอย่าง
18. หาก element ซ้อนกันไม่สวยงาม ควรปรับที่ margin หรือ padding เพราะอะไร
19. อธิบายผลกระทบของ border ที่มีค่าหนาต่อขนาดของ box
20. ถ้าต้องการให้ element มีขนาดคงที่ตลอด ต้องใช้คำสั่งอะไรและเพราะอะไร

```

---

## 📘 CSS-04: Typography

```plaintext

21. อธิบายความสำคัญของการตั้งค่า `line-height` และผลต่อการอ่าน
22. ยกตัวอย่าง `text-transform` และประโยชน์ในการออกแบบ UX
23. ถ้าเว็บรองรับหลายภาษา การจัดการ font-family ควรมีแนวทางอย่างไร
24. อธิบายวิธีจัดตัวอักษรให้อยู่ตรงกลางแนวตั้งและแนวนอนพร้อมโค้ด
25. คุณจะเลือกใช้ `letter-spacing` และ `word-spacing` ในกรณีใด

```

---

## 📘 CSS-05: Display & Position

```plaintext

26. เปรียบเทียบ `inline`, `block`, `inline-block`, และ `none`
27. อธิบายความแตกต่างระหว่าง `relative`, `absolute`, `fixed`, และ `sticky`
28. ถ้าต้องการให้ element ติดอยู่ด้านบนตลอด ควรใช้คำสั่งใด
29. ยกตัวอย่างกรณีที่ใช้ `position: absolute;` แล้วเกิดปัญหา และแนวทางแก้ไข
30. `z-index` ต้องใช้ร่วมกับอะไรจึงจะทำงาน และผลกระทบหากไม่กำหนด

```

---

## 📘 CSS-06: Specificity & Inheritance

```plaintext

31. อธิบายการคำนวณ Specificity พร้อมตัวอย่าง
32. ยกตัวอย่างการใช้ `!important` และอธิบายข้อควรระวัง
33. อธิบายการทำงานของ `inherit`, `initial`, และ `unset`
34. ยกตัวอย่าง property ที่สืบทอดค่าได้ และที่ไม่ได้
35. ถ้ามี style ซ้อนกันหลายแหล่ง จะใช้ตัวใดเป็นหลัก และเพราะอะไร

```

---

## 📘 CSS-07: Pseudo-classes

```plaintext

36. อธิบายการใช้งาน `:hover` และ `:focus` ต่างกันอย่างไร
37. ยกตัวอย่าง `:nth-child()` และอธิบายโครงสร้างการทำงาน
38. `:not()` ใช้ในสถานการณ์แบบไหนบ้าง?
39. อธิบายความแตกต่างของ pseudo-class และ pseudo-element
40. ถ้าอยากเน้น element แรกสุดของ list จะใช้ selector อะไร และทำไม

```

---

## 📘 CSS-08: Combinators

```plaintext

41. อธิบาย combinator `>`, `+`, `~`, และ `` (ช่องว่าง) พร้อมตัวอย่างแต่ละแบบ
42. ถ้าใช้ `ul > li` และ `ul li` ต่างกันอย่างไร?
43. สถานการณ์ที่ควรใช้ `+` แทน `~` คือแบบใด?
44. combinator ใดที่เหมาะกับการเลือก element ที่ไม่ใช่ลูกโดยตรง?
45. คุณจะใช้ combinator เพื่อกำหนด style ให้เฉพาะบาง element ได้อย่างไร?

```

---

## 📘 CSS-09: Responsive Design

```plaintext

46. อธิบายแนวคิด Mobile First และวิธีการเขียน media query ที่เหมาะสม
47. ความแตกต่างระหว่าง `min-width` กับ `max-width` มีผลต่อการออกแบบอย่างไร
48. `vw`, `vh`, `em`, และ `%` ควรใช้เมื่อไหร่ในการทำ responsive
49. อธิบายวิธีการใช้ `<picture>` และ `srcset` เพื่อรองรับภาพหลายขนาด
50. ถ้าต้องการให้ layout ปรับอัตโนมัติตามขนาดหน้าจอ ควรใช้แนวทางอะไร
```

---

## 📘 CSS-10: Figma to HTML/CSS

```plaintext

51. อธิบายกระบวนการนำ Figma Design มาแปลงเป็น HTML/CSS
52. ค่าหลักที่ควรดึงจาก Figma เพื่อนำไปเขียน CSS มีอะไรบ้าง?
53. ถ้า design มีหลาย breakpoint จะวาง media query ยังไงให้ไม่ซ้อนกัน
54. ประโยชน์ของ Dev Mode (Inspect) ใน Figma คืออะไร?
55. หาก UI จาก Figma ซับซ้อนมาก คุณจะเริ่มจัดการจากส่วนไหนก่อน?
```

---

## 📘 CSS-11: Variables & CSP

```plaintext

56. อธิบายการใช้งาน CSS Variables และข้อดีในการจัดการ theme
57. ถ้าต้องการให้เว็บรองรับ Dark/Light Mode ควรจัดโครงสร้าง Variables อย่างไร?
58. CSP มีไว้เพื่ออะไร และช่วยป้องกันอะไรได้บ้าง?
59. เขียนตัวอย่าง meta tag ของ Content-Security-Policy สำหรับ block inline script
60. ถ้า inline script ถูก block จะแก้ไขยังไงให้ปลอดภัยและใช้ได้?
```

---

## 📘 CSS-12: Flexbox

```plaintext

61. อธิบายการใช้ Flexbox เพื่อจัด layout แนวนอน และแนวตั้ง
62. ความแตกต่างของ `justify-content` กับ `align-items` คืออะไร?
63. `flex-wrap` ช่วยให้ layout ยืดหยุ่นขึ้นอย่างไร?
64. ยกตัวอย่าง `flex: 1 1 200px;` และอธิบายแต่ละค่า
65. ถ้าต้องการให้ element ใด element หนึ่งมีการจัดแนวต่างจากพี่น้อง ใช้คำสั่งใด?
```

---

## 📘 CSS-13: Grid

```plaintext

66. เปรียบเทียบ Flexbox กับ Grid: เหมาะกับงานแบบไหนบ้าง?
67. อธิบายการใช้ `repeat()` และ `minmax()` ใน Grid layout
68. ถ้าต้องการให้ layout ปรับอัตโนมัติตามพื้นที่จอ ใช้ Grid syntax แบบใด?
69. `grid-area` และ `grid-template-areas` ใช้ทำอะไร?
70. ยกตัวอย่างการจัด layout dashboard ด้วย CSS Grid แบบ 2 แถว 3 คอลัมน์
```

---

## 📘 CSS-14: Transitions & Animations

```plaintext

71. อธิบายหลักการทำงานของ transition และ animation
72. ยกตัวอย่าง keyframes ที่ทำให้ element กระพริบได้
73. `animation-timing-function` มีค่าอะไรบ้าง และแต่ละค่าทำงานอย่างไร?
74. ถ้าอยากให้ animation หยุดที่สถานะสุดท้าย ควรใช้ property อะไร?
75. ความแตกต่างของการใช้ transition กับ animation ในปุ่ม hover คืออะไร?
```

---

## 📘 CSS-15: Layering & Z-index

```plaintext

76. z-index มีหลักการทำงานอย่างไร และต้องมีเงื่อนไขอะไรถึงจะทำงาน?
77. อธิบายสถานการณ์ที่ z-index ทำให้ layout พัง และวิธีแก้ไข
78. ถ้าต้องการให้ modal อยู่บนสุด ควรจัดการ z-index อย่างไร?
79. `z-index` สูงเกินไปมีผลเสียอะไรในโปรเจกต์จริง?
80. ความแตกต่างระหว่าง DOM Order กับ Layer Order คืออะไร?
```

---

## 📘 CSS-16: Responsive Components

```plaintext

81. ยกตัวอย่าง card component ที่ responsive และแนวทางการเขียน CSS
82. ถ้าต้องการให้ navbar responsive ใน mobile ต้องทำอะไรบ้าง?
83. การใช้ class name ที่ชัดเจนใน component มีผลดีต่ออะไร?
84. Flexbox กับ Grid เหมาะกับ component แบบใดบ้าง?
85. คุณจะออกแบบ component ให้ reuse ได้อย่างไร?
```

---

## 📘 CSS-17: Theme & Dark Mode

```plaintext

86. วิธีใช้ CSS Variables เพื่อสร้าง theme สองแบบ (light/dark)
87. อธิบายการใช้ media query เพื่อตรวจจับ prefers-color-scheme
88. ควรเก็บ variables ที่เกี่ยวกับ theme ไว้ในส่วนไหนของ CSS?
89. ถ้าเว็บรองรับ 3 theme (light, dark, sepia) คุณจะออกแบบระบบ variable อย่างไร?
90. เปรียบเทียบการจัดการ theme ด้วย `class` กับ `data-theme`
```

---

## 📘 CSS-18: Component Design Pattern

```plaintext

91. อธิบายแนวคิด BEM และข้อดีในการเขียน CSS ให้เป็นระบบ
92. Utility-first CSS คืออะไร และข้อดีข้อเสียมีอะไรบ้าง?
93. ถ้าต้องเขียน CSS สำหรับ component ที่ complex คุณจะจัดการ naming ยังไง?
94. ความสำคัญของการไม่ผูก class กับ element (เช่น `.h1-style`) คืออะไร?
95. ถ้าใช้ Tailwind ร่วมกับ Component Design คุณจะควบคุม style ซ้ำได้อย่างไร?
```

---

## 📘 CSS-19: Architecture

```plaintext

96. อธิบาย ITCSS และประโยชน์ในการจัดโครงสร้าง CSS
97. ถ้าคุณต้องทำงานกับทีมใหญ่ การจัดโฟลเดอร์ CSS ควรมีลักษณะอย่างไร?
98. ความแตกต่างของ Atomic CSS กับ Traditional CSS
99. ตัวอย่างที่ class name ปะปนกันจนดูแลยาก และแนวทางป้องกัน
100. การใช้ preprocessor เช่น SCSS มีประโยชน์อะไรกับ CSS Architecture?
```

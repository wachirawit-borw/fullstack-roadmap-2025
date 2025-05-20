# 📝 แบบทดสอบคำตอบ CSS (CSS-00 ถึง CSS-19)

```CSS00-19
1 หน้าที่หลักของ CSS คือการตกแต่งให้กับเว็บไซต์ แยกออกจาก HTML เพื่อลดความซับซ้อนและสามารถใช้ซ้ำได้หลายหน้า
2 การทำงานที่เหมือนกันจะต่างกันตรงที่ priority ของคำสั่ง โดยเรียงจาก inline > internal > external
3 Cascading คือ การซ้อนกันของ style ตัดสินใจว่าตัวไหนจะถูกนำมาใช้เมื่อมีซ้อนกัน เช่น inline, internal, external
4 นิยมใช้ external เมื่อ browser โหลดแล้วพบ  ใน  จะไปดึงข้อมูลใน CSS เพื่อ render DOM ที่มี CSS
5 External เพราะว่า สามารถใช้ซ้ำได้, โหลดได้เร็ว, แก้ไขและปรับเปลี่ยนได้ง่าย
6 ลำดับความสำคัญจากเรียงจาก #id > .class > div
7 ul > li + p เลือก p ที่อยู่ถัดจาก li และมีพ่อแม่คือ ul
8 h1 + {tag} การใช้ + คือการเลือกพี่น้องตัวถัดไป
9 class ยืดหยุ่นใช้ซ้ำได้หลาย element, div ใช้งานเร็วแต่ผูกกับ HTMl มากเกินไป
10 a[href='https://www.google.com'] คุณใช้กับการลิงก์ไปเว็บต่างๆ
11 เทียบขนาดของ font กับสิ่งอื่นเช่น em เทียบกับ element แม่ rem เทียบกับ html , % เทียบกับ parent, vw,vh เทียบกับ viewport
12 background-color: rgba(0, 123, 255, 0.5); /* ฟ้าโปร่งใส */
13 vw (viewport width): 1vw = 1% ของความกว้างหน้าจอ | vh (viewport height): 1vh = 1% ของความสูงหน้าจอ
14 rem เทียบกับ html → ถ้าเปลี่ยน font-size ที่ root ทุก element จะเปลี่ยนตาม
15 HSL (Hue, Saturation, Lightness): เหมาะกับการทำ theme สีอ่อน/เข้ม และ  Hex: เขียนกระชับ แต่แก้สีลำบาก
16 Margin [ขอบนอก] > Border [เส้นขอบ] > Padding [ช่องว่างระหว่างขอบกับเนื้อหา] > content [เนื้อหาหลัก]
17 content-box (ค่าเริ่มต้น):ขนาดที่ใส่ไว้จะไม่รวมกับ padding+border ทำให้เกินกว่าที่กำหนดได้ border-box: รวมทุกอย่างภายใต้ค่าที่ใส่ไว้
18 ถ้าระยะห่างระหว่าง element → ปรับ margin ภายในกล่อง → ปรับ padding
19 ถ้าใช้ content-box → ขนาดกล่องจะ ขยายออกไป ตามความหนา border ใช้ border-box → ขนาดกล่อง ไม่เปลี่ยน เพราะ border ถูกนับรวมใน width
20 border-box ช่วยให้ขนาดรวม padding และ border แล้ว
21 line-height คือ ระยะห่างระหว่างบรรทัด จะช่วยให้ ตัวหนังสืออ่านง่าย สบายตา
22 text-transform: uppercase[ตัวใหญ่]; lowercase[ตัวเล็ก];capitalize[ตัวแรกจะเป็นตัวใหญ่];
23 ใช้ font stack ที่รองรับ fallback หลายภาษา เช่น: font-family: 'Noto Sans Thai', 'Segoe UI', 'Helvetica', sans-serif;
24 Flex ใช้ justify-content, align-item | grid ใช้ place-item
25 letter-spacing: ปรับระยะห่างตัวอักษร | word-spacing:ปรับระยะห่างระหว่างคำ 
26 inline อยู่ในบรรทัดเดียวตั้งขนาดไม่ได้ , block กินพื้นที่เต็มบรรทัดขึ้นบรรทัดใหม่, inline-block อยู่ในบรรทัดเดียวตั้งขนาดได้ไม่ขึ้นบรรทัดใหม่, none ไม่แสดงผล
27 relative ตำแหน่งเดิมของตัวเองเลื่อนตาม scroll, absolute อิงตาม parent ถ้าไม่มีอิงตาม html ไม่ตาม scroll, fixed อยู่กับที่ใน viewport ไม่เลื่อนตามscroll, sticky ทำหน้าที่เหมือน relative เมื่อถึงจุดที่กำหนดกลายเป็น fixed
28 fixed แล้วกำหนด top 0
29 ไม่ได้กำหนดค่าให้ parent ให้ parent เป็นอะไรก็ได้ไม่ใช่ static เช่น  .container { position: relative; }
30 element ที่มี position ไม่ใช่ static เช่น relative, absolute, fixed, sticky ถ้าไม่กำหนดค่าจะไม่ทำงาน
31 Specificity = 0-1-1-2 คือ 1 id: #main | 1 class: .title | 2 elements: div, h1 ตัวเลขมากสุดจะชนะ
32 บังคับให้ style นี้ชนะทุกตัวแม้จะมี specificity ต่ำกว่า  color: white !important;
33 inherit รับค่าจากพ่อแม่เสมอ, initial รีเซ็ตค่ากลับไปที่ค่าดั้งเดิมของ browser, unset ถ้า property สืบทอดได้ → ทำงานเหมือน inherit ถ้าไม่ได้ → ทำงานเหมือน initial
34 สืบทอดได้ (Inheritable): color,font-family,line-height | ไม่ได้สืบทอด (Non-inheritable): margin, padding,border,width,height
35 inline > internal > external ถ้ามี !important จะ override ทุกอย่าง
36 hover เมาส์ชี้ = ปุ่ม,ลิงก์ focus ได้รับการสนใจถูกคลิกหรือ tab = ฟอร์ม
37 li:nth-child(2n) {  background: #eee; } 2n → ทุก element ลำดับที่หารด้วย 2 ลงตัว (even) 3n+1 → ทุก 3 ตัวเริ่มที่ตัวแรก
38 :not() คือ pseudo-class ตรงข้าม → ใช้เพื่อไม่เลือก element ที่ตรงตามเงื่อนไข p:not(.highlight)  → เลือก <p> ที่ ไม่มี class highlight
39 Pseudo-class :hover, :nth-child()สถานะของ element ที่มีอยู่ | Pseudo-element::before, ::after สร้าง element เสมือนใหม่
40 :first-child = ตัวแรกในกลุ่มพี่น้อง
41. ul > li + p เลือก p ที่อยู่ถัดจาก li และมีพ่อแม่คือ ul  
42. h1 + {tag} การใช้ + คือการเลือกพี่น้องตัวถัดไป  
43. class ยืดหยุ่นใช้ซ้ำได้หลาย element, div ใช้งานเร็วแต่ผูกกับ HTMl มากเกินไป  
44. a[href='https://www.google.com'] คุณใช้กับการลิงก์ไปเว็บต่างๆ  
45. Mobile First Design และใช้ min-width เขียน media query  
46. min-width คือเมื่อจอกว้างขึ้น, max-width คือเมื่อจอเล็กลง  
47. vw/vh ใช้กับ layout ที่ปรับตามจอ, %, em ใช้กับขนาดสัมพัทธ์ของ parent  
48. ใช้ <picture> กับ srcset เพื่อโหลดภาพตามความกว้างจอ  
49. ใช้ media query, flex/grid, unit แบบ responsive เช่น %, rem, vw  
50. ดู layout รวม → จด note → เขียน HTML → จัด CSS จากนอกเข้าใน → responsive  
51. font-size, spacing, color, border-radius, shadow, breakpoint  
52. ใช้ media query ไล่ตาม min-width, อย่าให้ซ้อนกัน  
53. ช่วย dev ดูค่าแบบ inspect + copy CSS  
54. เริ่มจาก layout ก่อน แล้วค่อยจัด component  
55. :root { --bg: white } + data-theme="dark" เปลี่ยนค่าตัวแปร  
56. ใช้ media query `@media (prefers-color-scheme: dark)`  
57. เก็บไว้ที่ :root หรือ data-theme block  
58. สร้าง 3 block: :root, [data-theme="dark"], [data-theme="sepia"]  
59. class = ใช้กับ tailwind, data-theme = semantic + เหมาะกับ CSS Variables  
60. .card → .card__title → .card--highlighted (BEM)  
61. เขียนแบบ utility-first เช่น p-4, text-center → เขียนไวแต่ HTML รก  
62. ใช้ BEM หรือ card__title ไม่ใช้ class กว้างๆ เช่น .title  
63. หลีกเลี่ยง .h1-style → ใช้ .heading-main แทน  
64. ใช้ @apply หรือสร้าง component class ใน Tailwind  
65. Settings > Tools > Generic > Elements > Objects > Components > Utilities  
66. base/, layout/, components/, themes/, utils/, main.css  
67. Atomic = class เป็น property (เช่น .mt-4), Traditional = class ตาม component  
68. .title, .heading1, .page-h1 → ป้องกันโดยใช้ระบบชื่อเช่น BEM  
69. SCSS ช่วยสร้างตัวแปร, mixin, modular, nesting ได้  
70. จัด layout dashboard โดยใช้ display: grid ร่วมกับ grid-template-columns: repeat(3, 1fr) เพื่อให้มี 3 คอลัมน์เท่ากัน และ grid-template-rows: auto auto เพื่อให้มี 2 แถว โดยใช้ gap เพื่อเว้นช่องว่างระหว่างกล่องข้อมูลแต่ละกล่อง เช่นการวางการ์ดสถิติหรือกราฟต่าง ๆ ในหน้า dashboard”
71. ใช้ transition สำหรับ interaction, animation สำหรับ keyframes  
72. @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }  
73. linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier()  
74. animation-fill-mode: forwards  
75. transition เหมาะกับ hover, animation เหมาะกับ effect ต่อเนื่อง  
76. ต้องใช้ร่วมกับ position ไม่ใช่ static ถึงจะทำงาน  
77. z-index ต่ำ, ตำแหน่งผิด → modal ซ้อนหลัง ให้แก้ด้วย stacking context  
78. position: fixed + z-index สูง + ไม่มี parent ซ้อน  
79. ถ้า z-index สูงเกินไปจะ debug ยาก, element ซ้อนเกินความจำเป็น  
80. DOM Order = ลำดับใน HTML, z-index = ลำดับแสดงผล  
81. ใช้ % + max-width + media query สร้าง card responsive  
82. ซ่อนเมนูบนมือถือ, ใช้ hamburger toggle, media query  
83. class ชัดเจน → อ่านง่าย, ป้องกันชื่อซ้ำ, debug สบาย  
84. Flex เหมาะกับ layout แนวเดียว, Grid เหมาะกับ layout ซับซ้อน  
85. ใช้ class ชัดเจน, ไม่ผูกกับ tag, ใช้ design system  
86. ใช้ CSS Variables กับ data-theme แยก light/dark  
87. ตรวจจับ dark mode อัตโนมัติด้วย prefers-color-scheme  
88. เก็บตัวแปรไว้ใน :root หรือ theme selector  
89. ใช้ [data-theme="theme-name"] แยกชุดตัวแปร  
90. class ใช้กับ Tailwind, data-theme เหมาะกับ CSS Variables  
91. BEM → Block, Element, Modifier เช่น .btn, .btn__icon, .btn--active  
92. utility-first เขียนเร็ว, แต่มอง HTML ยาก  
93. ตั้งชื่อแยกตาม component เช่น .modal__title ไม่ใช้ .title  
94. อย่าตั้งชื่อ class ผูกกับ tag → ใช้เชิงหน้าที่ เช่น .section-title  
95. ใช้ @apply รวม utility class → สั้น, reuse, คุม consistency  
96. ITCSS เรียงจาก global → component → utility  
97. แยก folder base/, layout/, components/, themes/  
98. Atomic = utility, Traditional = semantic class  
99. ป้องกันชื่อปะปนด้วย BEM หรือระบบตั้งชื่อที่สม่ำเสมอ  
100. SCSS ช่วยให้เขียน CSS แบบเป็นระบบ ใช้ตัวแปร, mixin, import ได้

```

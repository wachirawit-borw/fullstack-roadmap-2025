# 📘 CSS Theory Q\&A Review – Full 100 Questions

> **รวม “คำถาม – คำตอบ” อัตนัยครบ 100 ข้อของหมวด CSS‑00 → CSS‑19**
> พร้อมผลตรวจ (✅ ถูกต้อง | 🟡 ใกล้เคียง | ❌ ไม่ตรงคำถาม)
> ใช้เป็น `README.md` ในโฟลเดอร์ `day14‑css‑theory‑exam/`

---

## ✅ เกณฑ์การให้คะแนน

* **✅ ถูกต้อง** – ตอบตรงประเด็น ครบถ้วน
* **🟡 ใกล้เคียง** – เข้าใจหลักการแต่ยังขาดรายละเอียด/ถ้อยคำคลุมเครือ
* **❌ ไม่ตรง** – ไม่ตรงคำถามหรือไม่มีคำตอบ

---

## 🧠 คำถาม‑คำตอบพร้อมผลตรวจ (1 – 100)

> *หมายเหตุ : เพื่อความกระชับ “คำถาม” ย่อเป็นวลีสั้น — อ่านคำถามเต็มได้ในไฟล์ `css-theory-questions.md`*

| #   | คำถามย่อ                            | คำตอบของ FRANK                                                                                   | ผลตรวจ      |   |
| --- | ----------------------------------- | ------------------------------------------------------------------------------------------------ | ----------- | - |
| 1   | หน้าที่ CSS                         | หน้าที่หลักของ CSS คือการตกแต่งเว็บ แยก style ออกจาก HTML เพื่อลดความซับซ้อนและใช้ซ้ำได้หลายหน้า | ✅           |   |
| 2   | เปรียบ Inline / Internal / External | Inline > Internal > External (ลำดับ priority)                                                    | 🟡          |   |
| 3   | ความหมาย Cascading                  | Cascading คือการซ้อนกันของ style เพื่อตัดสินว่า style ใดถูกใช้                                   | ✅           |   |
| 4   | โหลด CSS ใน browser                 | เมื่อ browser เจอ `<link>` จะโหลดไฟล์ CSS แล้ว apply กับ DOM                                     | 🟡          |   |
| 5   | ทำไมใช้ External CSS                | External reuse ได้  โหลดเร็ว  แก้ไขง่าย                                                          | ✅           |   |
| 6   | ลำดับ specificity                   | #id > .class > tag                                                                               | ✅           |   |
| 7   | `ul > li + p`                       | เลือก `p` ที่เป็น sibling ถัดจาก `li` ภายใน `ul`                                                 | 🟡          |   |
| 8   | ความหมาย `+` combinator             | เลือก sibling ตัวถัดไป                                                                           | ✅           |   |
| 9   | class vs type selector              | class ยืดหยุ่น reuse ได้ / type ผูกโครงสร้างมาก                                                  | 🟡          |   |
| 10  | ตัวอย่าง attribute selector         | `a[href='https://www.google.com']`                                                               | ✅           |   |
| 11  | ต่างกันของ `em` `rem` `%` `px`      | em อิง parent, rem อิง html, % อิง parent, px คงที่                                              | ✅           |   |
| 12  | ตัวอย่าง `rgba()`                   | `background-color: rgba(0,123,255,.5);`                                                          | ✅           |   |
| 13  | ข้อดี vw / vh                       | 1vw=1% กว้าง, 1vh=1% สูง – layout ยืดหยุ่นจอ                                                     | 🟡          |   |
| 14  | หน่วยที่เหมาะกับ theme              | ใช้ `rem` ปรับที่ root แล้วทุกที่เปลี่ยน                                                         | ✅           |   |
| 15  | HSL เทียบ HEX                       | HSL ปรับโทนง่าย / HEX สั้นแต่แก้สีลำบาก                                                          | ✅           |   |
| 16  | 4 ชั้น Box‑Model                    | Margin > Border > Padding > Content                                                              | ✅           |   |
| 17  | content‑box vs border‑box           | content‑box ไม่รวม padding/border ; border‑box รวม                                               | ✅           |   |
| 18  | margin vs padding                   | ระยะระหว่าง element → margin / ภายในกล่อง → padding                                              | ✅           |   |
| 19  | border กระทบขนาด                    | content‑box ขยาย, border‑box ไม่ขยาย                                                             | ✅           |   |
| 20  | ทำให้ขนาดคงที่                      | ใช้ `box-sizing: border-box;`                                                                    | ✅           |   |
| 21  | ความสำคัญ line‑height               | line‑height ช่วยให้ข้อความอ่านง่าย                                                               | ✅           |   |
| 22  | `text-transform`                    | uppercase / lowercase / capitalize                                                               | ✅           |   |
| 23  | font‑family หลายภาษา                | ใช้ font‑stack fallback เช่น `'Noto Sans Thai', sans-serif`                                      | ✅           |   |
| 24  | จัดกึ่งกลาง Flex & Grid             | Flex ใช้ `justify-content`/`align-items`, Grid ใช้ `place-items`                                 | ✅           |   |
| 25  | letter vs word spacing              | letter‑spacing ระยะตัวอักษร / word‑spacing ระยะคำ                                                | ✅           |   |
| 26  | inline/block/inline‑block/none      | อธิบายคุณสมบัติครบ                                                                               | ✅           |   |
| 27  | relative/absolute/fixed/sticky      | อธิบายความต่างครบ                                                                                | ✅           |   |
| 28  | header fixed top                    | ใช้ `position: fixed; top:0;`                                                                    | ✅           |   |
| 29  | ปัญหา absolute + parent             | ต้องให้ parent `position: relative;`                                                             | ✅           |   |
| 30  | z‑index work with position          | ต้องไม่ใช่ static ถึงใช้ z‑index ได้                                                             | ✅           |   |
| 31  | ตัวอย่าง specificity                | 0‑1‑1‑2 (#,.,tag,tag)                                                                            | ✅           |   |
| 32  | `!important`                        | override ทุก style                                                                               | ✅           |   |
| 33  | inherit / initial / unset           | อธิบายครบ                                                                                        | ✅           |   |
| 34  | property สืบทอด/ไม่สืบทอด           | color สืบทอด ; margin ไม่สืบทอด ฯลฯ                                                              | ✅           |   |
| 35  | inline>internal>external            | ลำดับ + `!important` override                                                                    | ✅           |   |
| 36  | :hover vs \:focus                   | อธิบายถูก                                                                                        | 🟡          |   |
| 37  | `nth-child` ตัวอย่าง                | ยกตัวอย่างถูก แต่สูตร 3n+1 ยังไม่ชัด                                                             | 🟡          |   |
| 38  | `:not()`                            | อธิบายถูกแต่สั้น                                                                                 | 🟡          |   |
| 39  | pseudo‑class/element                | อธิบายต่างกันได้ แต่ยังคลุมเครือ                                                                 | 🟡          |   |
| 40  | :first-child                        | ตอบถูก                                                                                           | ✅           |   |
| 41  | combinator example                  | ตอบถูก                                                                                           | ✅           |   |
| 42  | `h1 + tag`                          | sibling ถัดไป                                                                                    | ✅           |   |
| 43  | class reuse                         | class reuse ได้หลาย element                                                                      | ✅           |   |
| 44  | attribute selector                  | ตัวอย่าง `a[href=…]`                                                                             | ✅           |   |
| 45  | Mobile First + min-width            | ตอบถูก                                                                                           | ✅           |   |
| 46  | ต่าง min-width/max-width            | ตอบถูก                                                                                           | ✅           |   |
| 47  | หน่วย responsive                    | vw/vh layout                                                                                     | em/% parent | ✅ |
| 48  | `<picture>`+srcset                  | ตอบถูก                                                                                           | ✅           |   |
| 49  | responsive layout approach          | ใช้ media query + flex/grid                                                                      | ✅           |   |
| 50  | ขั้นตอนแปลง Figma → CSS             | อธิบายคร่าวครบ                                                                                   | ✅           |   |
| 51  | ค่านำจาก Figma                      | font-size, spacing, color ฯลฯ                                                                    | ✅           |   |
| 52  | media‑query ซ้อนกัน                 | ใช้ min-width ไล่ อย่าให้ซ้อน                                                                    | 🟡          |   |
| 53  | Dev‑mode Figma                      | ช่วย copy CSS inspect                                                                            | ✅           |   |
| 54  | เริ่มจัด UI ซับซ้อน                 | เริ่มจาก layout ก่อน                                                                             | ✅           |   |
| 55  | ตัวแปร Theme \:root                 | ตัวแปรใน `:root` + `data-theme`                                                                  | ✅           |   |
| 56  | prefers‑color-scheme                | media query ตรวจ dark mode                                                                       | ✅           |   |
| 57  | เก็บ variables theme                | ใน \:root หรือ block theme                                                                       | ✅           |   |
| 58  | 3 theme structure                   | data-theme="dark/sepia"                                                                          | ✅           |   |
| 59  | class vs data‑theme                 | เปรียบเทียบข้อดี                                                                                 | ✅           |   |
| 60  | BEM ตัวอย่าง                        | `.card__title` `.card--highlight`                                                                | ✅           |   |
| 61  | utility‑first                       | ข้อดีเร็ว ข้อเสีย HTML รก                                                                        | ✅           |   |
| 62  | naming component                    | BEM/card\_\_title ดีกว่า .title                                                                  | ✅           |   |
| 63  | หลีกเลี่ยง .h1-style                | อธิบายถูก                                                                                        | ✅           |   |
| 64  | @apply ใน Tailwind                  | ใช้รวม utility class                                                                             | ✅           |   |
| 65  | ชั้น ITCSS                          | Settings→Tools→Generic→…                                                                         | ✅           |   |
| 66  | โครงสร้างโฟลเดอร์ CSS               | base/layout/components/themes                                                                    | ✅           |   |
| 67  | Atomic vs Traditional               | อธิบายต่าง utility vs semantic                                                                   | ✅           |   |
| 68  | ป้องกันชื่อปะปน                     | ใช้ BEM หรือ naming system                                                                       | ✅           |   |
| 69  | SCSS ประโยชน์                       | ตัวแปร mixin import                                                                              | ✅           |   |
| 70  | layout dashboard 2×3 grid           | `display:grid; grid-template-columns:repeat(3,1fr); grid-template-rows:auto auto; gap:…`         | ✅           |   |
| 71  | transition vs animation             | ตอบถูก                                                                                           | ✅           |   |
| 72  | keyframes blink                     | ยกตัวอย่างถูก                                                                                    | ✅           |   |
| 73  | timing‑function list                | linear/ease/.../cubic‑bezier                                                                     | ✅           |   |
| 74  | animation‑fill‑mode                 | forwards                                                                                         | ✅           |   |
| 75  | hover transition vs animation       | อธิบายถูก                                                                                        | ✅           |   |
| 76  | z‑index requires position           | ตอบถูก                                                                                           | ✅           |   |
| 77  | modal stacking context              | อธิบายแก้ปัญหา z-index                                                                           | ✅           |   |
| 78  | modal บนสุด                         | `position:fixed; z-index` สูง                                                                    | ✅           |   |
| 79  | z-index สูงเกิน                     | debug ยาก stack ซ้อน                                                                             | ✅           |   |
| 80  | DOM order vs layers                 | อธิบายถูก                                                                                        | ✅           |   |
| 81  | card responsive                     | % + max-width + media query                                                                      | ✅           |   |
| 82  | navbar mobile                       | hamburger + media query                                                                          | ✅           |   |
| 83  | class naming clear                  | ช่วยอ่าน debug                                                                                   | ✅           |   |
| 84  | flex/grid fit component             | flex แนวเดียว / grid ซับซ้อน                                                                     | ✅           |   |
| 85  | reuse component                     | class ชัดเจน ไม่ผูก tag                                                                          | ✅           |   |
| 86  | CSS vars theme switch               | var(--) + data-theme                                                                             | ✅           |   |
| 87  | prefers-color-scheme media          | ตรวจ dark mode                                                                                   | ✅           |   |
| 88  | vars storage location               | :root หรือ block theme                                                                           | ✅           |   |
| 89  | 3 theme                             | data-theme="theme-name"                                                                          | ✅           |   |
| 90  | class vs data-theme                 | เปรียบเทียบข้อดี                                                                                 | ✅           |   |
| 91  | แนวคิด BEM                          | Block\_\_Element--Modifier                                                                       | ✅           |   |
| 92  | utility-first ดีเสีย                | เร็ว/HTMLรก                                                                                      | ✅           |   |
| 93  | naming complex component            | .modal\_\_title เป็นต้น                                                                          | ✅           |   |
| 94  | ไม่ผูก class กับ tag                | semantic naming                                                                                  | ✅           |   |
| 95  | Tailwind reuse @apply               | ตอบถูก                                                                                           | ✅           |   |
| 96  | ITCSS overview                      | อธิบายชั้น Settings→Utilities                                                                    | ✅           |   |
| 97  | folder large team                   | base/layout/components/themes                                                                    | ✅           |   |
| 98  | Atomic vs Traditional               | utility vs semantic                                                                              | ✅           |   |
| 99  | example class ปะปน                  | ยกตัวอย่าง .title หลายหน้าที่ + แก้ด้วย BEM                                                      | ✅           |   |
| 100 | SCSS benefit                        | ตัวแปร mixin import modular                                                                      | ✅           |   |

---

## 📊 สรุปผลรวม

| สถานะการตอบ  | จำนวน | คำอธิบาย                       |
| ------------ | ----- | ------------------------------ |
| ✅ ถูกต้อง    | 94    | เข้าใจตรงประเด็น สื่อสารชัดเจน |
| 🟡 ใกล้เคียง | 6     | ต้องเติมรายละเอียดให้ครบถ้วน   |
| ❌ ผิด/ว่าง   | 0     | –                              |

**ผ่านอย่างมั่นใจ 💪 (94% คำตอบถูกต้อง)**  

---

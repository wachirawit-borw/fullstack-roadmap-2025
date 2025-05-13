# 📚 Full-Stack Learning Template

> **Purpose:** ใช้เป็นแม่แบบมาตรฐานสำหรับทุกบทใน Full-Stack Roadmap
> คัดลอกไฟล์นี้ไปยังโฟลเดอร์บทเรียน แล้ว ค้น‑แทนที่ ทุกส่วนที่อยู่ในวงเล็บปีกกา {{…}} ด้วยค่าจริง (เช่น {{DAY}} → 09, {{TOPIC}} → Responsive Design).

---

## 0 | Module Metadata

| Key               | Value                  |
| ----------------- | ---------------------- |
| **Day**           | `{{DAY}}`              |
| **Topic**         | `{{TOPIC}}`            |
| **Folder Slug**   | `day{{DAY}}-{{SLUG}}/` |
| **Live Demo URL** | *(เติมหลัง deploy)*    |

---

## 1 | Overview – Why & What

อธิบาย: *ทำไมเรื่องนี้สำคัญ*, ประวัติ, ตำแหน่งของหัวข้อนี้ในภาพรวม Full‑Stack

---

## 2 | Learning Objectives 🎯

* Objective 1
* Objective 2
* Objective 3

---

## 3 | Core Concepts 🔍

| Concept        | One‑liner |
| -------------- | --------- |
| {{CONCEPT\_1}} | …         |
| {{CONCEPT\_2}} | …         |
| {{CONCEPT\_3}} | …         |

---

## 4 | Deep‑Dive Sections 🔎

### 4.1 {{SUBTOPIC\_A}}

* คำอธิบาย …
* ตัวอย่างโค้ด

```{{LANG}}
// demo code
```

### 4.2 {{SUBTOPIC\_B}}

* …

*(เพิ่มหัวข้อย่อยได้ตามต้องการ)*

---

## 5 | Historical & Spec Notes 📜

* ไทม์ไลน์, เวอร์ชันสเปก, milestone การซัพพอร์ตเบราว์เซอร์
* อ้างอิง WHATWG / W3C / MDN

---

## 6 | Best Practices & Pitfalls 🛠️

1. Do …
2. Avoid …

---

## 7 | Quick Playground 🏃‍♂️

โค้ดสั้น ๆ ให้ลองแก้แล้วรีเฟรชดูผลทันที

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>{{TOPIC}} Playground</title>
  <style>body{font-family:system-ui}</style>
</head>
<body>
  <h1>Edit me ✏️</h1>
  <script>
    // ทดลองเขียน JS ที่นี่
  </script>
</body>
</html>
```

---

## 8 | Links & Further Study 🔗

* MDN – …
* บทความ/วิดีโอ – …

---

## 9 | Homework 📝

| Section                         | Details                                 |
| ------------------------------- | --------------------------------------- |
| **Objective**                   | สร้าง / ทำอะไร                          |
| **Deliverables**                | โฟลเดอร์ `03-homework/` + ไฟล์ที่จำเป็น |
| **Requirements**                | • Req 1 • Req 2 • …                     |
| **Stretch Goals**               | (ถ้ามี)                        |
| **Checklist ก่อน commit**       | ✔ HTML/CSS lint ผ่าน                    |
| ✔ Lighthouse ≥ 90               |                                         |
| ✔ README สั้น ๆ อธิบาย solution |                                         |
| **Time Box**                    | \~{{MINUTES}} min                       |
| **Review with ChatGPT**         | “ช่วยรีวิว diff ของ commit XXX”         |

---

## 10 | Folder Structure 📂

```
{{REPO_ROOT}}/course-fullstack-2025/day{{DAY}}-{{SLUG}}/
├─ 00-playground/
├─ 01-patterns/
├─ 02-project/
├─ 03-homework/
└─ README.md               # แม่แบบ (ไฟล์นี้)
```

---
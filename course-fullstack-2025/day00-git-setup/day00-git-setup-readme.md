
# Day 00: Git Setup & Basic Workflow 🚀

> วันที่เรียน: 4 พฤษภาคม 2025  
> หมวด: F0 — Basic Tooling & Git  
> สถานะ: ✅ เรียนจบแล้ว

## 🔧 สิ่งที่ติดตั้ง
- [x] Git CLI
- [x] VS Code
- [x] ตั้งค่า Git global config (`user.name`, `user.email`)

## 🧩 คำสั่งพื้นฐาน Git ที่เรียน

```bash
# ตรวจสอบสถานะไฟล์ใน repo
git status

# เพิ่มไฟล์เข้า staging area
git add .

# เพิ่มไฟล์เดียว
git add README.md

# ยกเลิกไฟล์จาก staging area
git restore --staged <filename>

# commit ไฟล์
git commit -m "ข้อความ commit"

# ตั้งค่า remote repo
git remote add origin https://github.com/<username>/<repo>.git

# เปลี่ยนชื่อ branch เป็น main
git branch -M main

# push ไปยัง GitHub (ครั้งแรกต้อง -u)
git push -u origin main

# แก้ปัญหา rebase
git rebase --abort
```

## 🧪 GitHub Actions (CI)
ไฟล์ workflow ที่สร้าง: `.github/workflows/ci.yml`

```yaml
name: Basic CI

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: echo "🎉 Hello GitHub Actions!"
```

## 🎯 เป้าหมายสำเร็จ
- ✅ สร้าง repository ใหม่
- ✅ push ไฟล์ README.md ไปยัง GitHub
- ✅ เขียน workflow CI .yml และให้ทำงานสำเร็จ
- ✅ เรียนรู้ขั้นตอนพื้นฐานของ Git CLI และ VS Code

## 📂 โฟลเดอร์นี้ประกอบด้วย
```
day00-git-setup/
├── README.md ← ไฟล์นี้
├── FULLSTACK-ROADMAP-2025.md ← ไฟล์หลักที่อ้างอิง
├── .github/
│   └── workflows/
│       └── ci.yml ← CI สำหรับ GitHub Actions
```

## 📌 หมายเหตุ
- ใช้ `LF → CRLF` บน Windows อาจมี warning ใน Git แต่ไม่เป็นปัญหา
- ไม่ควร commit โฟลเดอร์ `.vscode` หรือ `node_modules/`

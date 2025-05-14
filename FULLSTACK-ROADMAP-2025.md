## 📦 F0: Basic Tooling & Git

| รหัสบท | หัวข้อหลัก                      | หัวข้อย่อย                                                            | ผลลัพธ์จับต้องได้                      |
| ------ | ------------------------------- | --------------------------------------------------------------------- | -------------------------------------- |
| F0-00  | ติดตั้ง VS Code + Git           | – ติดตั้ง VS Code, Git CLI<br>– เชื่อม VS Code กับ Git                | Push โปรเจกต์แรกขึ้น GitHub สำเร็จ     |
| F0-01  | Git Workflow (Basic)            | – `clone`, `commit`, `push`, `pull`<br>– สร้าง/สลับ branch            | ใช้ Git จัดการ project version ได้จริง |
| F0-02  | Markdown & README               | – เขียน README.md<br>– Changelog format<br>– Conventional Commits     | โปรเจกต์พร้อม README + CHANGELOG       |
| F0-03  | CI Integration (GitHub Actions) | – สร้าง workflow เบื้องต้น (lint, test, build)<br>– แสดง status badge | Pull request รันผ่าน CI + ขึ้น badge   |

---

## 🌐 F1: HTML + CSS Core

| รหัสบท  | หัวข้อหลัก               | หัวข้อย่อย                                                                                                   | ผลลัพธ์จับต้องได้                           |
| ------- | ------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| HTML-00 | Semantic Layout          | – `<!DOCTYPE html>`, `<html>`, `<head>`<br>– Semantic tags + ARIA roles<br>– Heading hierarchy `<h1>`–`<h6>` | หน้า index พร้อมโครงสร้าง HTML5 + a11y      |
| HTML-01 | Links & Lists            | – `<a href>`, `target`, `rel`<br>– `<ul>`, `<ol>`, `<li>`                                                    | เมนูนำทาง + สารบัญภายในหน้า                 |
| HTML-02 | Images & Media           | – `<img srcset>`, `alt`, `loading`<br>– `<picture>`, `<video>`, `<audio>`                                    | รูป responsive + วิดีโอ/เสียงฝังเพจ         |
| HTML-03 | Tables                   | – `<table>`, `<thead>`, `<tbody>`, `<tfoot>`<br>– `colspan`, `rowspan`                                       | ตารางพร้อม caption + ควบรวมเซลล์            |
| HTML-04 | Forms & Validation       | – `<form>` attributes<br>– Input types + `<label>`<br>– Validation (`required`, `pattern`)                   | แบบฟอร์มติดต่อพร้อม validation เบื้องต้น    |
| HTML-05 | SEO & Accessibility      | – `<meta viewport>`, `<meta description>`<br>– Lighthouse ≥ 90<br>– tabindex, `aria-*`                       | เพจผ่าน audit SEO + A11y ≥ 90               |
| HTML-06 | Debug & DevTools         | – DevTools inspect, Accessibility Tree<br>– Audit Tab                                                        | แก้โครงสร้างและ a11y ได้ด้วย DevTools       |
| CSS-00  | Box Model & Selectors    | – `margin`, `padding`, `border`<br>– Selectors specificity                                                   | สไตล์พื้นฐานให้เพจ index                    |
| CSS-01  | Flexbox                  | – `display: flex`, `justify-content`, `align-items`<br>– Gap, order                                          | เมนู + การ์ด layout ด้วย flexbox            |
| CSS-02  | Grid                     | – `display: grid`, `grid-template`<br>– Named areas, spanning                                                | กริด gallery 2 มิติ                         |
| CSS-03  | Responsive Design        | – Media queries (mobile-first)<br>– Fluid units (`%`, `em`, `vw`)                                            | เพจ responsive ครอบคลุมทุกขนาดจอ            |
| CSS-04  | Figma → HTML/CSS         | – อ่าน spacing/font/color จาก mockup<br>– Pixel-perfect conversion                                           | แปลง mockup → HTML/CSS จริงครบสีและระยะห่าง |
| CSS-05  | CSS Variables & Security | – Custom Properties (theme)<br>– Web Security เบื้องต้น: CSP, SRI                                            | ธีมไดนามิก + ปรับ header CSP/SRI ให้ปลอดภัย |

---

## 🚀 FS: Tailwind Sprints (Parallel Track)

| รหัสบท | หัวข้อหลัก                             | หัวข้อย่อย                                                                                                                                                           | ผลลัพธ์จับต้องได้                                                |
| ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| FS-01  | Tailwind Sprint #1 – Hero Remix        | – ติดตั้ง Tailwind CLI หรือ CDN<br>– แปลง Hero Section ของ Day10 เป็นคลาส Tailwind<br>– ใช้ breakpoint `sm`, `md`, `lg`                                              | หน้า Hero ตอบสนองทุกขนาดจอด้วย class Tailwind                  |
| FS-02  | Tailwind Sprint #2 – Component Kit     | – สร้าง Button, Card, Navbar ด้วย Tailwind + DaisyUI<br>– ตั้ง Storybook หรือ docs page เล็ก ๆ                                                                        | Mini UI‑library พร้อมแชร์/รียูส                                  |

## ⚙️ F2: JavaScript Core

| รหัสบท | หัวข้อหลัก              | หัวข้อย่อย                                                                                     | ผลลัพธ์จับต้องได้                            |
| ------ | ----------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| JS-00  | Syntax & Variables      | – `let/const/var`<br>– Function declaration/expression, arrow<br>– Scope                       | ฟังก์ชันพื้นฐานทำงานถูกต้อง + console.log    |
| JS-01  | DOM & Events            | – `querySelector`, `getElementById`<br>– `addEventListener`, delegation                        | ปุ่มเปลี่ยนธีม หรือ interactive DOM example  |
| JS-02  | Async, Fetch & Error    | – `Promise`, `async/await`<br>– `fetch()` + error handling<br>– Loading/UI state management    | ดึง JSON API + แสดงสถานะ loading/error ใน UI |
| JS-03  | Module & Bundler        | – `import/export`<br>– Vite / Parcel setup<br>– ESLint & Prettier integration                  | โปรเจกต์โมดูลาร์ รัน hot-reload ได้          |
| JS-04  | Unit Testing (Vitest)   | – describe/it/assert<br>– Mock DOM/fetch<br>– Coverage ≥ 80%                                   | ทดสอบผ่าน 3–5 ชุด พร้อม coverage report      |
| JS-05  | Debugging & DevTools    | – console.log วิวัฒน์<br>– Breakpoints, watch expressions<br>– Network & Call stack inspection | แก้บั๊กจริงด้วย DevTools                     |
| JS-06  | Call Stack & Event Loop | – sync vs async<br>– microtask vs macrotask<br>– Diagram flow explanation                      | เขียนแผนภาพ event loop + quiz โต้ตอบ         |

---

## 🟦 TS: TypeScript Basics

| รหัสบท | หัวข้อหลัก                | หัวข้อย่อย                                                                                       | ผลลัพธ์จับต้องได้                                 |
| ------ | ------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| TS-00  | Core Types                | – `string`, `number`, `boolean`<br>– Literal, union, intersection                                | ตัวแปร + ฟังก์ชันทั่วไปมี type annotation ครบ     |
| TS-01  | Functions & Generics      | – Typed functions<br>– `<T>` generics, constraints<br>– `void/never/unknown`                     | เขียน generic function ใช้งานได้จริง              |
| TS-02  | Advanced Utilities        | – `Partial`, `Pick`, `Omit`<br>– `keyof`, `typeof`, `ReturnType`<br>– Mapped / Conditional Types | สร้าง type ซับซ้อน + อธิบาย use-case ได้          |
| TS-03  | Type Guards & Declaration | – User-defined type guards<br>– Declaration merging                                              | เขียน type guard + จับ merging declaration เข้าใจ |

---

## ⚛️ F3: Modern Front-End (React + TS + GraphQL)

| รหัสบท | หัวข้อหลัก                   | หัวข้อย่อย                                                     | ผลลัพธ์จับต้องได้                                 |
| ------ | ---------------------------- | -------------------------------------------------------------- | ------------------------------------------------- |
| RE-00  | React Basics                 | – JSX, functional components, props<br>– TS props typing       | สร้าง component พิมพ์ type-safe ได้               |
| RE-01  | Hooks & Router               | – `useState`, `useEffect`, custom hook<br>– React Router v6/v7 | SPA routing + fetch API ผ่าน hook สำเร็จ          |
| RE-02  | GraphQL Client (optional)    | – Apollo Client setup<br>– Queries, Mutations, Caching         | อ่าน/เขียนข้อมูลผ่าน GraphQL endpoint             |
| RE-03  | State Management             | – Context API vs Redux/Zustand<br>– TanStack Query caching     | จัดการ global state + cache ได้ครบ trade-off      |
| RE-04  | Testing in React             | – Testing Library, Jest + snapshots<br>– Mock service worker   | ผ่าน test ≥ 5 รายการ + coverage ≥ 80%             |
| RE-05  | Performance & Suspense       | – `React.memo`, `useMemo`, lazy/Suspense<br>– Profiler         | โหลด component ช้า-น้อย วิเคราะห์ได้ด้วย Profiler |
| RE-06  | Animation with Framer Motion | – Variants, transitions, AnimatePresence                       | เพิ่ม animation ลื่นไหลบน component               |

---

## 🚀 FS: React Sprints (Parallel Track)

| รหัสบท | หัวข้อหลัก                             | หัวข้อย่อย                                                                                                                                                           | ผลลัพธ์จับต้องได้                                                |
| ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| FS-03  | React Sprint #1 – Counter + Todo       | – สร้างโปรเจกต์ Vite + React + TypeScript<br>– ใช้ `useState`, `props`, `map` เพื่อจัดการ state                                                                      | SPA Counter + Todo live บน GitHub Pages                           |
| FS-04  | React Sprint #2 – Next.js Taste Test   | – สร้างหน้าเดียวใน Next.js<br>– ใช้ file‑based routing + SSR<br>– Integrate Tailwind                                                                                 | เดโม่ Next.js + Tailwind deploy บน Vercel                        |

## 🔙 F4: Back-End & Database

| รหัสบท | หัวข้อหลัก                       | หัวข้อย่อย                                                              | ผลลัพธ์จับต้องได้                               |
| ------ | -------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------- |
| BE-00  | Node + Express                   | – สร้าง server<br>– RESTful routing                                     | `/movies` CRUD API ตอบ JSON สำเร็จ              |
| BE-01  | MongoDB + Mongoose               | – Connect Atlas<br>– Schema, Model, Validation                          | สร้าง Movie model + query สำเร็จจาก DB จริง     |
| BE-02  | PostgreSQL Basics                | – ติดตั้ง, psql CLI<br>– CREATE TABLE, INDEX, JOIN                      | สร้าง schema + query ข้อมูลจาก table เอง        |
| BE-03  | Redis & Caching                  | – setup Redis client<br>– set/get, TTL, cache fallback                  | API ใช้ Redis cache + แสดง log hit/miss         |
| BE-04  | Auth & JWT                       | – Register/Login<br>– Access/Refresh token<br>– Protected routes        | ส่ง token + เข้าถึง route ที่ต้อง login ได้     |
| BE-05  | Security Essentials              | – Helmet.js, CORS config<br>– Input sanitization (XSS)<br>– dotenv      | API ปลอดภัยจาก XSS + CORS error                 |
| BE-06  | Middleware Practice              | – Custom logger<br>– Error handler middleware                           | เขียน middleware ≤20 บ.ท. ที่ log + catch error |
| BE-07  | OAuth2.1 & OpenID Connect (opt.) | – PKCE flow, state param<br>– Diagram auth flow                         | Google login + flow diagram                     |
| BE-08  | Data Consistency & Strategy      | – CQRS, Event Sourcing concept<br>– Transaction vs eventual consistency | อธิบาย pattern + pseudocode use-case            |

---

## 🚀 FS: Full‑Stack Sprints (Parallel Track)

| รหัสบท | หัวข้อหลัก                             | หัวข้อย่อย                                                                                                                                                           | ผลลัพธ์จับต้องได้                                                |
| ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| FS-05  | Prisma Sprint – CRUD Blog              | – Node + Express + Prisma + PostgreSQL<br>– ออกแบบ schema และทำ CRUD API                                                                                              | Full‑stack Blog API + UI                                          |
| FS-06  | NextAuth Sprint – Social Login         | – เพิ่ม NextAuth ให้โปรเจกต์ Next.js<br>– Google หรือ GitHub OAuth<br>– ปกป้องเส้นทาง (protected routes)                                                             | ระบบล็อกอิน Social พร้อมใช้งานสด                                |

## 🚀 F5: DevOps, CI/CD & Capstone

| รหัสบท | หัวข้อหลัก                    | หัวข้อย่อย                                                                           | ผลลัพธ์จับต้องได้                                    |
| ------ | ----------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| DO-00  | Docker                        | – Multi-stage Dockerfile (node\:alpine)<br>– ENV, volume, expose                     | รัน frontend+backend ผ่าน Docker image สำเร็จ        |
| DO-01  | CI/CD Advanced                | – GitHub Actions matrix (lint, test, build)<br>– Deploy to Render/Fly.io             | Workflow deploy อัตโนมัติ + badge ขึ้น               |
| DO-02  | Cloud & Serverless            | – Netlify/Vercel serverless<br>– S3/Cloud Functions                                  | Deploy serverless function + analyze cold-start      |
| DO-03  | Kubernetes & IaC              | – kubectl, kind<br>– Helm, Terraform, Kustomize                                      | Deploy app บน local cluster ด้วย Helm/terraform      |
| DO-04  | Observability & Infra Testing | – Prometheus + Grafana<br>– OpenTelemetry<br>– Terratest (IaC testing)               | Dashboard + alert + IaC tests                        |
| DO-05  | DevSecOps & Scanning          | – Trivy, OWASP dependency-check<br>– CI secret scan                                  | CI stage block PR หากพบ vulnerability                |
| CAP-00 | Capstone Project              | – รวม front+back+deploy<br>– README, .env.example, Diagram<br>– Load test + refactor | โปรเจกต์ production-grade deploy ออนไลน์ + เอกสารครบ |

---

## 🔬 QA & Security Testing (Integrated)

| รหัสบท | หัวข้อหลัก              | หัวข้อย่อย                                           | ผลลัพธ์จับต้องได้                  |
| ------ | ----------------------- | ---------------------------------------------------- | ---------------------------------- |
| QA-00  | Unit & Integration Test | – Vitest/Jest + mocking<br>– Contract testing (Pact) | รัน unit/integration tests ผ่าน CI |
---


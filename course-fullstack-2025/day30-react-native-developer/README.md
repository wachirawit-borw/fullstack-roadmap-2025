# React Native Developer (RE-01 ถึง RE-30)

รวมสรุปทุกหัวข้อจาก Roadmap FULLSTACK-2025 สำหรับ React และ React Native ตั้งแต่พื้นฐานถึงขั้นสูง พร้อมตัวอย่างการใช้งานจริง สลับกับแนวคิดเบื้องหลังและเทคนิคการเตรียมตัวเข้าสู่สายงานจริง

---

## 🧩 RE-01: Hooks & Router

* รู้จัก React Hooks (`useState`, `useEffect`, `useContext`)
* React Router v6/7 (navigate, route params, nested routes)
* การสร้าง custom hook เพื่อลดความซ้ำซ้อนของโค้ด

## 📦 RE-02: Apollo Client & GraphQL

* ตั้งค่า Apollo Client ใน React/React Native
* การใช้ Query/Mutation/Caching
* คำสั่ง `useQuery`, `useMutation`, และแนวคิด cache-first

## 🔄 RE-03: State Management

* เปรียบเทียบ Context API, Redux, Zustand
* การใช้ TanStack Query caching กับข้อมูลจาก API

## 🧪 RE-04: Testing & Mocking

* Testing Library + Jest + snapshots
* เขียน unit test และ integration test แบบโฟกัส UI
* การใช้ Mock Service Worker (MSW) เพื่อ mock API ระดับเน็ตเวิร์ก

## ⚙️ RE-05: Performance Optimization

* ใช้ `React.memo`, `useMemo`, `useCallback` ลดการ render
* lazy load component ด้วย React.lazy + Suspense
* การใช้ Profiler ดูประสิทธิภาพการทำงาน

## 🎬 RE-06: Animation with Framer Motion

* ใช้งาน `motion.div` และ props: initial, animate, exit
* `AnimatePresence` ใช้จัดการ exit transition
* สร้าง UI ที่ smooth และน่าสนใจยิ่งขึ้น

## 🌐 RE-07 ถึง RE-20 (React Native Core)

รวมเนื้อหาการใช้งาน React Native ครบถ้วน เช่น:

* React Native CLI vs Expo
* React Native Navigation
* State Management ใน Native
* Gesture & Animation
* i18n (หลายภาษา)
* Accessibility (รองรับผู้ใช้พิเศษ)
* Deep Linking, Push Notification, OTA Updates

## 🧱 RE-21: Deep Linking

* เปิดแอปจากลิงก์ภายนอก เช่น `myapp://profile/123`
* ตั้งค่า intent-filter (Android) / URL Types (iOS)
* ใช้งานร่วมกับ React Navigation

## 🔔 RE-22: Push Notifications

* ตั้งค่าร่วมกับ Firebase Cloud Messaging (FCM)
* ขอ permission, จัดการ token, onMessage
* ใช้งานผ่าน Expo Notifications ก็ได้

## 🚀 RE-23: Performance Optimization (Native)

* ใช้ FlatList, memo, Hermes, native driver animation
* วิเคราะห์ด้วย Flipper, React DevTools, LogBox

## 🧪 RE-24: Testing in React Native

* ใช้ Testing Library + Jest ร่วมกับ native component
* Mock API ด้วย MSW แบบ native

## ⛓️ RE-25: CI/CD

* ใช้ GitHub Actions / EAS Build / Bitrise / Codemagic
* สร้าง .aab (Android) หรือ .ipa (iOS)
* อัปโหลดและ deploy อัตโนมัติ

## 📲 RE-26: CodePush / OTA Updates

* Expo Updates / Revopush / Hot Updater / Self-hosted
* ส่ง JavaScript bundle ไปยังผู้ใช้โดยไม่ต้องอัปเดตผ่าน Store

## 📤 RE-27: Native Modules

* สร้าง module ด้วย Java/Kotlin (Android) และ Swift (iOS)
* เรียกจาก JS ผ่าน NativeModules

## 🔌 RE-28: React Native + GraphQL

* ตั้งค่า Apollo Client ใน Native
* จัดการ Query/Mutation แบบมือถือ

## 📦 RE-29: Deploy & Publish

* Build `.aab` หรือ `.ipa` สำหรับ production
* ตั้งค่า signing key, provisioning profile
* ส่งแอปขึ้น Google Play Console / App Store Connect

## 🎓 RE-30: Recap & Mock Interview

* ทบทวนตั้งแต่ JSX, Hook, Router, GraphQL, Native
* ฝึกตอบคำถามสัมภาษณ์สาย React Native Developer
* เตรียมพอร์ต + โปรเจกต์เพื่อสมัครงาน

## 🔧 หัวข้อนอก Roadmap (สำคัญมาก!)

### TanStack Query

* ดึงข้อมูลจาก API พร้อม caching / stale-time / refetching

### Zustand

* จัดการ state ง่าย ๆ แบบไม่ต้องใช้ context/redux

### MSW (Mock Service Worker)

* Mock API ระดับเน็ตเวิร์ก เหมาะกับ test ที่ต้องใช้ข้อมูลจำลอง

### Framer Motion / AnimatePresence

* สร้าง UI animation ระดับ production ด้วย syntax ที่เรียบง่าย

---

## ✅ สรุป

* คุณจบเนื้อหา RE-01 ถึง RE-30 และหัวข้อเสริมครบถ้วน
* เหลือเพียง "โปรเจกต์จริง + พอร์ต + ฝึกสัมภาษณ์" เพื่อเข้าสู่สายงานจริงเต็มตัว
* ถ้าต้องการเริ่ม mock interview / coding test / โปรเจกต์ demo บอกผมได้เลยครับ!

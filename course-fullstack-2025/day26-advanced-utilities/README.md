# 📘 Day 26 – TS-02: Advanced Utility Types

## ✅ Learning Objectives

- เข้าใจและใช้งาน Utility Types ขั้นสูงใน TypeScript
- เรียนรู้วิธีการจัดการประเภทข้องข้อมูลแบบยืดหย่น เช่น `Omit`, `Pick`, `Exclude`, `Extract`, `Record`, `ReturnType` ฌเริ่ยเป็นต้น
- ทดสอบและใช้งานจริงผ่านตัวอย่างโค้ดพร้อมผลลัพธ์

---

## 📚 Topics Covered

### 🔹 Omit\<Type, Keys>

ลบ property ที่ไม่ต้องการออกจาก type เดิม

```ts
type UserWithoutEmail = Omit<User, "email">;
```

---

### 🔹 Pick\<Type, Keys>

เลือกเฉพาะ property ที่ต้องการใช้งาน

```ts
type NameAndEmail = Pick<User, "name" | "email">;
```

---

### 🔹 Exclude\<Union, MembersToRemove>

ลบค่าที่ไม่ต้องการออก Union

```ts
type NotLoading = Exclude<"success" | "error" | "loading", "loading">;
```

---

### 🔹 Extract\<Union, MembersToKeep>

เก็บเฉพาะค่าที่ตรงกันใน Union

```ts
type OnlyLoading = Extract<Status, "loading" | "idle">;
```

---

### 🔹 NonNullable[Type]

ลบ `null` และ `undefined` ออกจาก type

```ts
type ValidName = NonNullable<string | null | undefined>;
```

---

### 🔹 ReturnType[Function]

ดึงประเภทผลลัพธ์ของฟังก์ชัน

```ts
type UserInfo = ReturnType<typeof getUserInfo>;
```

---

### 🔹 Awaited[Promise]

ใช้กับ `Promise<T>` เพื่อดึง `T` ออกมา

```ts
type Resolved = Awaited<Promise<string>>;
```

---

### 🔹 Record\<Keys, Type>

สร้าง object type โดยกำหนด key และ value type

```ts
type RoleAccess = Record<"admin" | "user", boolean>;
```

---

### 🔹 Parameters[Function]

ดึงประเภทของพารามิเตอร์ทั้งหมดของฟังก์ชัน

```ts
type CreatePostParams = Parameters<typeof createPost>;
```

---

### 🔹 ConstructorParameters [typeof Class]

ดึงพารามิเตอร์ของ constructor ในคลาส

```ts
type ProductArgs = ConstructorParameters<typeof Product>;
```

---

## 🥪 How to Test

- ใช้ `ts-node` หรือ TypeScript Playground รันไฟล์ `AdvancedUtilities.ts`
- ทดสอบด้วย `console.log()` หรือ VS Code type checking
- ลองเพ่มค่าให้ผิด type แล้วดูว่าจะ error หรือไม่

---

## 🧠 Summary

Utility Types ใน TypeScript คือเครื่องมือที่ทรงพลังในการจัดการประเภท type
ช่วยลดการเขียน type ซ้ำซ้อน และเพิ่มความปลอดภัยในโค็ด

---

## 🔗 Further Reading

- [TypeScript Handbook: Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Advanced Utility Types Explained](https://www.totaltypescript.com/tutorials/beginners-typescript)

---

## 📁 Files in This Lesson

```plaintext
📂 day26-advanced-utilities/
📄 README.md
📄 AdvancedUtilities.ts
```

---

## ⏭️ Next Step

เตรียมเข้าสู่การใช้งาน TypeScript กับ React: รู้จัก Props typing, FC typing และการใช้ generic กับคอมโพเนนต์แบบยืดหย่น

// ✅ 1. Omit – ลบ property ออกจาก type
interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, 'email'>;

const user1: UserWithoutEmail = {
  id: 1,
  name: 'Alice'
};

console.log('UserWithoutEmail:', user1);

// --------------------------------------------------

// ✅ 2. Pick – เลือกเฉพาะ property ที่ต้องการ
type UserNameAndEmail = Pick<User, 'name' | 'email'>;

const user2: UserNameAndEmail = {
  name: 'Bob',
  email: 'bob@example.com'
};

console.log('UserNameAndEmail:', user2);

// --------------------------------------------------

// ✅ 3. Exclude – ลบค่าหนึ่งจาก Union type
type Status = 'success' | 'error' | 'loading';
type NotLoading = Exclude<Status, 'loading'>;

const status1: NotLoading = 'error';
console.log('NotLoading:', status1);

// --------------------------------------------------

// ✅ 4. Extract – เก็บเฉพาะค่าที่ตรงกัน
type OnlyLoading = Extract<Status, 'loading' | 'idle'>;

const status2: OnlyLoading = 'loading';
console.log('Extract (OnlyLoading):', status2);

// --------------------------------------------------

// ✅ 5. NonNullable – ลบ null/undefined ออกไป
type MaybeName = string | null | undefined;
type ValidName = NonNullable<MaybeName>;

const name1: ValidName = 'Frank';
console.log('NonNullable (ValidName):', name1);

// --------------------------------------------------

// ✅ 6. ReturnType – ดึงประเภทผลลัพธ์ของฟังก์ชัน
function getUserInfo() {
  return {
    id: 100,
    name: 'Zara'
  };
}

type UserInfo = ReturnType<typeof getUserInfo>;

const user3: UserInfo = getUserInfo();
console.log('ReturnType (UserInfo):', user3);

// --------------------------------------------------

// ✅ 7. Awaited – ดึงค่าจาก Promise
type ResponsePromise = Promise<number>;
type Resolved = Awaited<ResponsePromise>;

async function fakeFetch(): Promise<Resolved> {
  return 123;
}

fakeFetch().then((res) => {
  console.log('Awaited (Resolved):', res);
});

// --------------------------------------------------

// ✅ 8. Record – สร้าง object จาก key และ value types
type Role = 'admin' | 'editor';
type RoleAccess = Record<Role, boolean>;

const accessControl: RoleAccess = {
  admin: true,
  editor: false
};

console.log('Record (RoleAccess):', accessControl);

// --------------------------------------------------

// ✅ 9. Parameters – ดึง parameter types ของฟังก์ชัน
function createPost(title: string, body: string, published: boolean) {}

type CreatePostParams = Parameters<typeof createPost>;

const postArgs: CreatePostParams = ['Title', 'Body content', true];
console.log('Parameters (CreatePostParams):', postArgs);

// --------------------------------------------------

// ✅ 10. ConstructorParameters – ดึงจาก constructor ของ class
class Product {
  constructor(public name: string, public price: number) {}
}

type ProductParams = ConstructorParameters<typeof Product>;

const product = new Product(...(['Laptop', 39900] as ProductParams));
console.log('ConstructorParameters (Product):', product);

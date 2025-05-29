// ✅ Typed Function
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// ✅ Generic Function
function wrapInArray<T>(item: T): T[] {
  return [item];
}

// ✅ Constraint
function logLength<T extends { length: number }>(value: T): void {
  console.log(`Length is: ${value.length}`);
}

// ✅ void
function logMessage(msg: string): void {
  console.log(`📢 ${msg}`);
}

// ✅ never
function crashSystem(): never {
  throw new Error("💥 System crashed!");
}

// ✅ unknown
function handleUnknown(input: unknown): void {
  if (typeof input === "string") {
    console.log("Uppercase:", input.toUpperCase());
  } else {
    console.log("Unknown type, cannot convert to uppercase.");
  }
}

// ✅ Practical example
type Product = {
  name: string;
  price: number;
  discount?: number;
};

function calculateTotal(products: Product[]): number {
  return products.reduce((sum, p) => {
    const discount = p.discount ?? 0;
    return sum + p.price - discount;
  }, 0);
}

const cart: Product[] = [
  { name: "Pen", price: 30 },
  { name: "Book", price: 120, discount: 20 }
];

console.log(greet("FRANK"));
console.log(wrapInArray("typescript"));
logLength("FRANK");
logLength([1, 2, 3]);
handleUnknown("Hello");
handleUnknown(42);
logMessage("ระบบพร้อมทำงานแล้ว ✅");

console.log(`💰 Total = ${calculateTotal(cart)} THB`);

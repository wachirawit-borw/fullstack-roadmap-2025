function showLength(value: string | string[]) {
  if (typeof value === "string") {
    console.log("String length:", value.length);
  } else {
    console.log("Array length:", value.length);
  }
}

showLength("Hello");        // String length: 5
showLength(["a", "b", "c"]); // Array length: 3

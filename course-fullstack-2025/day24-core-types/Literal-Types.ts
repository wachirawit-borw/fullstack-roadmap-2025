type TrafficLight = "red" | "yellow" | "green" | "blue";

let light: TrafficLight = "green"; // ✅
console.log(`Current light: ${light}`); // Current light: green

light = "blue"; // ❌ Error: Type '"blue"' is not assignable to type 'TrafficLight'

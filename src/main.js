import kaboom from "kaboom";

// Log a message at the very beginning
console.log("Starting execution of main.js");

// Perform a simple arithmetic operation
const a = 5;
const b = 3;
const sum = a + b;
console.log(`The sum of ${a} and ${b} is ${sum}`);

// Add a text element to the DOM to verify execution
const message = document.createElement("div");
message.textContent = "main.js has been picked up";
message.style.position = "absolute";
message.style.top = "10px";
message.style.left = "10px";
message.style.color = "white";
document.body.appendChild(message);

console.log("Added verification text to the DOM");

console.log("Initializing Kaboom");

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  debug: true,
});

console.log("Kaboom initialized");

// Simple check to confirm the environment
if (!k) {
  console.error("Kaboom initialization failed");
  process.exit(1);
} else {
  console.log("Kaboom initialization successful");
}

console.log("Setting background color");

k.setBackground(k.Color.fromHex("#311047"));

console.log("Background color set");

k.scene("main", () => {
  console.log("Main scene started");
  k.add([
    k.text("Hello Kaboom", { size: 32 }),
    k.pos(100, 100),
  ]);
  console.log("Text added to scene");
});

console.log("Going to main scene");

k.go("main");

console.log("Main.js execution finished");

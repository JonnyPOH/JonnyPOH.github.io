import kaboom from "kaboom";

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

console.log("Starting main scene");

k.go("main");

console.log("Main scene started");

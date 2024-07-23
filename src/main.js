import kaboom from "kaboom";

console.log("Initializing Kaboom");

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  debug: true,
});

console.log("Setting background color");

k.setBackground(k.Color.fromHex("#311047"));

k.scene("main", () => {
  console.log("Main scene started");
  k.add([
    k.text("Hello Kaboom", { size: 32 }),
    k.pos(100, 100),
  ]);
});

console.log("Starting main scene");

k.go("main");

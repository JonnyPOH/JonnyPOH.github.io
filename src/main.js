import kaboom from "kaboom";
// import { scaleFactor } from "./constants";

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  debug: false, // set to false once ready for production
});


// import { k } from "./kaboomCtx";

// Simple test to set background color
k.setBackground(k.Color.fromHex("#311047"));

// k.scene("main", () => {
//   // Your scene setup code here
// });

k.go("main");

import { k } from "./kaboomCtx";

// Simple test to set background color
k.setBackground(k.Color.fromHex("#311047"));

k.scene("main", () => {
  // Your scene setup code here
});

k.go("main");

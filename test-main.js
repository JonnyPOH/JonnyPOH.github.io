import { JSDOM } from "jsdom";

// Create a fake DOM environment
const { window } = new JSDOM(`<!DOCTYPE html><canvas id="game"></canvas>`);
global.window = window;
global.document = window.document;
global.navigator = window.navigator;

// Ensure that the canvas element is present in the document
if (!global.document.getElementById("game")) {
  console.error("Canvas element with id 'game' not found!");
  process.exit(1);
}

// Import the main.js file after setting up the DOM
import("./src/main.js").then(() => {
  console.log("Main.js has been executed");
}).catch(error => {
  console.error("Error executing main.js:", error);
  process.exit(1);
});

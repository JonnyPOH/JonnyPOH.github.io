import { JSDOM } from "jsdom";
import { createCanvas } from "canvas";

// Create a fake DOM environment
const { window } = new JSDOM(`<!DOCTYPE html><canvas id="game"></canvas>`);
global.window = window;
global.document = window.document;
global.navigator = window.navigator;

// Polyfill for HTMLCanvasElement.prototype.getContext using the canvas package
window.HTMLCanvasElement.prototype.getContext = function (type) {
  if (type === '2d') {
    return createCanvas().getContext('2d');
  }
  throw new Error('Only 2d context is supported in test environment');
};

// Polyfill for ResizeObserver
class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserver;

// Import the main.js file after setting up the DOM
import("./src/main.js").then(() => {
  console.log("Main.js has been executed");
}).catch(error => {
  console.error("Error executing main.js:", error);
  process.exit(1);
});

import { JSDOM } from "jsdom";

// Create a fake DOM environment before importing main.js
const { window } = new JSDOM(`<!DOCTYPE html><canvas id="game"></canvas>`);
global.document = window.document;
global.window = window;
global.navigator = window.navigator;

// Now import main.js after setting up the DOM
import "./src/main.js";

console.log("Main.js has been executed");

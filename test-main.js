import { JSDOM } from "jsdom";
import "./src/main.js";

// Create a fake DOM environment
const { window } = new JSDOM(`<!DOCTYPE html><canvas id="game"></canvas>`);
global.document = window.document;
global.window = window;

console.log("Main.js has been executed");

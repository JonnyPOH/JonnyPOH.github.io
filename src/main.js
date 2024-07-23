console.log("Starting execution of main.js");

// Add a text element to the DOM to verify execution
const message = document.createElement("div");
message.textContent = "main.js has been picked up";
message.style.position = "absolute";
message.style.top = "10px";
message.style.left = "10px";
message.style.color = "white";
message.style.backgroundColor = "black"; // Make it more visible
message.style.padding = "10px";
document.body.appendChild(message);

console.log("Added verification text to the DOM");

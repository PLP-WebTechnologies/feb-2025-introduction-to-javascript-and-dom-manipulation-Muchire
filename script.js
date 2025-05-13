// Change text content
document.getElementById("change-text-btn").addEventListener("click", () => {
  const text = document.getElementById("main-text");
  text.textContent = "🎉 You've clicked the button!";
});

// Toggle CSS style class
document.getElementById("toggle-style-btn").addEventListener("click", () => {
  const title = document.getElementById("page-title");
  title.classList.toggle("highlight");
});

// Add an element
document.getElementById("add-box-btn").addEventListener("click", () => {
  const box = document.createElement("div");
  box.className = "dynamic-box";
  box.textContent = "🧩 This is a dynamically added box!";
  document.getElementById("box-container").appendChild(box);
});

// Remove last added element
document.getElementById("remove-box-btn").addEventListener("click", () => {
  const container = document.getElementById("box-container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});

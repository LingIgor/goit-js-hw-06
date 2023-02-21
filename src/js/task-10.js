function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.querySelector("input");
const createBtn = controlsEl.querySelector("[data-create]");
const destroyBtn = controlsEl.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.cssText = `width:${size}px; height:${size}px;`;
    // boxesEl.style.cssText = "display:flex";
    div.style.backgroundColor = getRandomHexColor();
    boxesEl.append(div);
    size += 10;
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function handlerInput() {
  createBoxes(inputEl.value);
}

createBtn.addEventListener("click", handlerInput);

destroyBtn.addEventListener("click", destroyBoxes);

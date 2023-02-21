const input = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

input.addEventListener("input", handel);

function handel(event) {
  console.log(event.currentTarget.value);
  textEl.style.fontSize = event.currentTarget.value + "px";
}

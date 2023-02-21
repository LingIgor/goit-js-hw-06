const inputEl = document.querySelector("#name-input");
const lableEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(event) {
  event.currentTarget.value === ""
    ? (lableEl.textContent = "Anonymous")
    : (lableEl.textContent = event.currentTarget.value);

  // if (event.currentTarget.value === "") {
  //   lableEl.textContent = "Anonymous";
  // } else {
  //   lableEl.textContent = event.target.value;
  // }
}

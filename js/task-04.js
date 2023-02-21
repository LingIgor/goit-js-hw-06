const obj = {
  counterValue: 0,

  decrement() {
    this.counterValue -= 1;
  },

  increment() {
    this.counterValue += 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn);

const valueEl = document.querySelector("span");
// console.log(valueEl.textContent);

decrementBtn.addEventListener("click", () => {
  obj.decrement();
  valueEl.textContent = obj.counterValue;
});

incrementBtn.addEventListener("click", () => {
  obj.increment();
  valueEl.textContent = obj.counterValue;
});

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientEl = ingredients.map((el) => {
//   const liEL = document.createElement("li");
//   liEL.textContent = el;
//   liEL.classList.add("item");

//   return liEL;
// });

// console.log(ingredientEl);

// ulHtmlEl.append(...ingredientEl);

// console.log(ulHtmlEl);

const makeIngredientsEl = (options) => {
  return options.map((el) => {
    const liEL = document.createElement("li");
    liEL.textContent = el;
    liEL.classList.add("item");

    return liEL;
  });
};

const ulHtmlEl = document.querySelector("#ingredients");
const elements = makeIngredientsEl(ingredients);
ulHtmlEl.append(...elements);
console.log(ulHtmlEl);

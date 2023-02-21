const itemAllEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemAllEl.length);
const titleEl = document.querySelectorAll("h2");
titleEl.forEach((el) => {
  console.log("Category:", el.textContent),
    console.log("Elements:", el.nextElementSibling.children.length);
});

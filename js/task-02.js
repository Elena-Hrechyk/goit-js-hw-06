const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const liItemEl = ingredients.map((item) => {
  const liItem = document.createElement("li");
  liItem.textContent = item;
  liItem.classList.add("item");
  return liItem;
});

list.append(...liItemEl);

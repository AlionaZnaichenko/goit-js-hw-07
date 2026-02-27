const elemCategories = document.querySelector("#categories");
const items = elemCategories.querySelectorAll(".item");
const allItems = items.length;
console.log(`Number of categories: ${allItems}`);

items.forEach((item) => {
  const titleText = item.querySelector("h2");
  const liElements = item.querySelectorAll("ul li");

  console.log(`Category: ${titleText.textContent}`);
  console.log(`Elements: ${liElements.length}`);
});

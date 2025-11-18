const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// 1st way
// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

// 2nd wat Best way

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});

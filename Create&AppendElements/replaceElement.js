// replace elements

// 1st method

function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replace First";

  firstItem.replaceWith(li);
}

// 2nd method

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(3)");

  secondItem.outerHTML = "<li>Replace Second</li>";
}

// Replacing all at once

function replaceAllItems() {
  const lis = document.querySelectorAll("li");

  lis.forEach((item, index) => {
    return index === 1
      ? (item.innerHTML = "Second Item")
      : (item.innerHTML = "Replace All");
  });
}

// Replacing child heading

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("#app-title");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping fuck";

  header.replaceChild(h2, h1);
}

// replaceFirstItem();

// replaceSecondItem();

// replaceAllItems();
// replaceChildHeading();

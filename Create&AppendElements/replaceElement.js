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

replaceFirstItem();

replaceSecondItem();

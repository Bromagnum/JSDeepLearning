// Remove elements

// remove first item
function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

// Remove item

function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

// 2nd way

function removeItem2(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNumber];

  ul.removeChild(li);
}

// remove button

// removeFirstItem();

// removeItem(1);
removeItem2(1);

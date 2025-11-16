// Custom insertAfter challange

function insertAfter(newEl, existingEL) {
  existingEL.parentElement.insertBefore(newEl, existingEL.nextSibling);
}

// New element to insert

const li = document.createElement("li");
li.textContent = "Insert Me After";

// existing element to insert

const firstItem = document.querySelector("li:first-child");

// Our Custom Function
// insertAfter(li, firstItem);

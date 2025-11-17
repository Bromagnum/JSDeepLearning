// what are Events

/**
 * Cliking on an element
 * typing into a text field
 * Hovering over an element
 * Submitting a form
 * Closing a window
 * Dragging an element
 * Resizing an element
 */

// JavaScript Event Listener

// const clearBtn = document.querySelector("#clear");

// clearBtn.onclick = function () {
//   alert("Clear Items");
// };

// Modern way  addEventListener() , Dahafazla event eklenebilir

// clearBtn.addEventListener("click", function () {
//   alert("Clear Items");
// });

// HTML elementin içinde kullanılan tercih edilmeyen method
// function onClear() {
//   alert("Clear Items");
// }

// Arrow func version
// clearBtn.addEventListener("click", () => alert("Clear Items"));
// clearBtn.addEventListener("click", () => console.log("Clear Items"));

// clearBtn.addEventListener("click", () => onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

// Chalange Click the Clear button and Listed objects make disapear

// 1st way

// function onClear() {
//   const itemList = document.querySelector("ul");
//   itemList.innerHTML = "";
// }
// clearBtn.addEventListener("click", () => onClear);

// 2nd way

// function onClear() {
//   const itemList = document.querySelector("ul");

//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// }
// clearBtn.addEventListener("click", () => onClear);

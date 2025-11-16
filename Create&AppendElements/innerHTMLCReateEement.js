// Quick & Dirty

function createListItem(item) {
  const li = document.createElement("li");

  li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

  document.querySelector(".items").appendChild(li);
}

// Clean & performant

// function createNewItem(item) {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(item));

//   const button = document.createElement("button");
//   button.className = "remove-item btn-link text-red";

//   const icon = document.createElement("i");
//   icon.className = "fa-solid fa-xmark";

//   button.appendChild(icon);
//   li.appendChild(button);

//   document.querySelector(".items").appendChild(li);
// }

// createNewItem("Cheese");
// createListItem("Eggs");

// Refactor to Multiple Functions

function createButton(classname) {
  const button = document.createElement("button");
  button.className = classname;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
}
function createIcon(classname) {
  const icon = document.createElement("i");
  icon.className = classname;

  return icon;
}

function createNewerItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}

// createNewerItem("Cheese");

// createNewerItem("Dalga")

// keyboard events

const itemInput = document.querySelector("#item-input");

const onKeyPress = (e) => {
  console.log("keypress");
};
const onKeyUp = (e) => {
  console.log("keyup");
};
const onKeyDown = (e) => {
  //key
  console.log(e.key);
  if (e.key === "Enter") {
    alert("you pressed enter");
  }
  //keyCode

  if (e.keyCode === 13) {
    alert("you pressed enter");
  }
  //code
  console.log(e.code);

  if (e.repeat) {
    console.log("you are holding down" + e.key);
  }

  console.log("shift: " + e.shiftKey);
  console.log("Control: " + e.ctrlKey);
  console.log("Alt: " + e.altKey);
};

// itemInput.addEventListener("keypress", onKeyPress);
// itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);

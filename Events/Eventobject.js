// /*
//  "target" - the elment that triggered the event
//  "currentTarget" - the element that the event listener is attached to 
//  (These are the same in this case)
//  "type" - the type of event that was triggered
//  "timeStamp" - the time that the event was tirggered
//  "clientX" - the x posiition of the mouse click relative to the window
//  "clientY" - the y position of the mouse click relative to the window
//  "offsetX" - the x position of the mouse click relative to the element
//  "offsetY" - the y position of the mouse click relative to the element
//  "pageX" - the x position of the mouse  click relative to the page
//  "pageY" - the y position of the mouse clicl relative to the page
//  "screenX" - the x position of the mouse click relative to the screen
//  "screenY" - the y position of the mouse click relative to the screen



// */
// const logo = document.querySelector("img");

// const onClick = (e) => {
//   //   console.log(e.target);
//   //   console.log(e.currentTarget);
//   //   console.log(e.type);
//   //   console.log(e.timeStamp);
//   //   console.log(e.clientX);
//   //   console.log(e.clientY);
//   //   console.log(e.offsetY);
//   //   console.log(e.offsetX);
//   //   console.log(e.pageY);
//   //   console.log(e.pageX);
//   //   console.log(e.screenY);
//   //   console.log(e.screenX);
// };

// function onDrag(e) {
//   document.querySelector("h1").textContent = `X ${e.clientX} y ${e.clientY}`;
// }


// logo.addEventListener("click", onClick);
// logo.addEventListener("drag", onDrag);


// // document.body.addEventListener("click", function (e) {
// //   console.log(e.target);
// //   console.log(e.currentTarget);
// // });

// // link te preventDedault();default olarak set edileni engeller

// document.querySelector("a").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Link was clicked");
// });

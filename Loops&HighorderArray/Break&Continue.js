
// Break loop gerçekleştirdikten sonra loop u bitirir
// for (let i = 0; i <= 20; i++) {
//   if (i === 15) {
//     console.log(`Breaking...`);
//     break;
//   }

//   console.log(i);
// }

// Continue => conditon geldikten sonra loop u devam ettirir

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("Skipping 13...");
    continue;
  }
  console.log(i);
}

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
// 1. membuat output
//    * * * * * *
//    *         *
//    *         *
//    *         *
//    *         *
//    * * * * * *
let a = 0;
for (a = 0; a < 6; a++) {
  star = "";
  for (b = 0; b < 6; b++) {
    if (a === 0) {
      star += " *";
    } else if (a === 5) {
      star += " *";
    } else if (b === 0 || a === 0) {
      star += " *";
    } else if (b === 5) {
      star += "         *";
    }
  }
  console.log(star);
}

// 2. membuat output
//        *
//       * *
//      * * *
//     * * * *
//    * * * * *
console.log("\n");
let n = 0;
for (n = 0; n < 6; n++) {
  if (n === 0) {
    console.log("    *");
  } else if (n == 1) {
    console.log("   * *");
  } else if (n == 2) {
    console.log("  * * * ");
  } else if (n == 3) {
    console.log(" * * * *");
  } else if (n == 4) {
    console.log("* * * * *");
  }
}

// 3. membuat pattern labyrinth
// * * * * * *
//         * *
// * * * * * *
//           *
// * * * * * *

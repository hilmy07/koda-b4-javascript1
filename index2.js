// for (let i = 1; i <= 4; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "* ";
//   }
//   console.log(stars);
// }

for (i = 0; i <= 4; i++) {
  let stars = "";
  for (j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}

// *
// * *
// * * *
// * * * *

console.log("\n");

let a = 0;
do {
  star = "";
  a++;
  b = 1;
  do {
    star += " *";
    b++;
  } while (b <= a);
  console.log(star);
} while (a <= 4);

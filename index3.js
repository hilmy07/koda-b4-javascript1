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

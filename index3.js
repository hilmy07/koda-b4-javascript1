let my = [
  {
    favourite: [
      "favourite1",
      "favourite2",
      "favourite3",
      {
        fruits: {
          is: "Apple",
        },
      },
    ],
  },
];

console.log(my[0].favourite[3].fruits.is);
// "Apple"

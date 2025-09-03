let obj = {
  str: [
    "name1",
    "name2",
    "name3",
    [
      "name4",
      [
        "name5",
        "name6",
        {
          man: [
            {
              the: {
                name: {
                  of: {
                    us: "Koda",
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
};

console.log(obj.str[3][1][2].man[0].the.name.of.us);

const hello = {
  world: "Hello World",
};

console.log(hello.world);
// Hello World

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

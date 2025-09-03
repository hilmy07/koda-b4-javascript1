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

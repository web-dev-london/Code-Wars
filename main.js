console.clear();

const numbers = [
  1, 2, 3, 4, 5, 6, 10, 7, -1, -7, -3, -8, -9, -4,
];

// const countPositivesSumNegatives = (input) => {
//   if (input === null || input.length < 1) return [];
//   let newArray = [0, 0];
//   input.forEach((item) => {
//     if (item > 0) return (newArray[0] += 1);
//     else newArray[1] += item;
//   });
//   return newArray;
// };

const countPositivesSumNegatives = (input) => {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input
          .filter((n) => n < 0)
          .reduce((a, b) => a + b, 0),
      ]
    : [];
};
console.log(countPositivesSumNegatives(numbers));

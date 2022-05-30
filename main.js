console.clear();

const numbers = [
  1, 2, 3, 4, 5, 6, 10, 7, -1, -7, -3, -8, -9, -4,
];

const countPositivesSumNegatives = (input) => {
  if (input.length < 1) return [];
  let newArray = [0, 0];
  input.forEach((item) => {
    if (item > 0) return (newArray[0] += 1);
    else {
      newArray[1] += item;
    }
  });
  return newArray;
};

console.log(countPositivesSumNegatives(numbers));

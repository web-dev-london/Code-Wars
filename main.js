console.clear();

const getSum = (a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

console.log(getSum(1, 1));

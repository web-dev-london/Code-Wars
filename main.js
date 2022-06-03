console.clear();

const minMax = (num) => {
  return [Math.min(...num), Math.max(...num)];
};
console.log(minMax([-1, -2, -3, -4]));

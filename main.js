console.clear();

// Square of (n) Sum

const arrays = [1, 2, 2, 3];
console.log(sum(arrays));

function sum(input) {
  return input.reduce((acc, curr) => acc + curr ** 2, 0);
}

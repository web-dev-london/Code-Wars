console.clear();

// Sum of Arrays

const arrays = [1, 5.2, 4, 0, -1];
console.log(sum(arrays));

function sum(input) {
  return input.reduce((a, b) => a + b, 0);
}

console.clear();

const numbers = [1, 2, 3, 4, -1, -2, -3, -4];

const invertValues = (array) => {
  return array.map((n) => (n === 0 ? n : -n));
};

console.log(invertValues(numbers));

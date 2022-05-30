console.clear();

const numbers = [34, -345, -1, 100];

const findSmallestInt = (args) => {
  return args.sort((a, b) => a - b)[0];
};

console.log(findSmallestInt(numbers));

console.clear();

const summation = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) count += i;

  return count;
};

console.log(summation(4));

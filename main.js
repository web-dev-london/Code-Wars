console.clear();

const removeSmallest = (numbers) => {
  const copy = numbers.slice(0);
  let smallestValue = numbers.indexOf(
    Math.min(...numbers),
  );
  copy.splice(smallestValue, 1);
  return copy;
};

console.log(removeSmallest([2, 2, 1, 2, 1]));

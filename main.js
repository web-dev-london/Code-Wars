console.clear();

const findLongestWord = (str) => {
  let arr = str
    .split(' ')
    .sort((a, b) => a.length - b.length);
  return arr[0].length;
};

console.log(findLongestWord('This is my first message'));

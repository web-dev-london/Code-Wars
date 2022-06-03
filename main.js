console.clear();

function reverseWord(str) {
  return str
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}
console.log(reverseWord('John Smith'));

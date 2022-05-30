console.clear();

const isIsogram = (str) => {
  return !str.match(/([a-z]).*\1/i);
};

console.log(isIsogram('isIsogram'));
console.log(isIsogram('Isogram'));

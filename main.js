console.clear();

const openOrSenior = (date) => {
  function membership(member) {
    return member[0] >= 55 && member[1] > 7
      ? 'Senior'
      : 'Open';
  }
  return date.map(membership);
};

console.log(openOrSenior([78, 12]));

console.clear();

const abbrevName = (name) => {
  return name
    .split(' ')
    .map((el) => el[0].toUpperCase())
    .join('.');
};

console.log(abbrevName('Murat Akhmedov'));

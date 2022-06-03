console.clear();

const paperWork = (n, m) => {
  if (n < 0 || m < 0) return 0;
  return n * m;
};

console.log(paperWork(-5, 5));

const paperWork2 = (n, m) => {
  return n > 0 && m > 0 ? n * m : 0;
};

console.log(paperWork2(5, 5));

console.clear();

// Exes and Ohs

let str = 'zzoo';
console.log(XO(str));

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

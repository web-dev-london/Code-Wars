console.clear();

const areaOrPerimeter = (l, w) => {
  return l === w ? l * w : 2 * (l + w);
};
console.log(areaOrPerimeter(6, 10));

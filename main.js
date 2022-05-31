console.clear();

const fizzBuzz = (input) => {
  // first things first check typeof input
  if (typeof input !== 'number') return NaN;
  // then check divisible numbers by order
  else if (input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz';
  else if (input % 3 === 0) return 'Fizz';
  else if (input % 5 === 0) return 'Buzz';
  return input;
};

console.log(fizzBuzz(8));

const checkSpeed = (speed) => {
  // declare first speed limit
  // and Point for over speedLimit
  const speedLimit = 70;
  const kmPerPoin = 5;

  if (speed < speedLimit + kmPerPoin) {
    console.log('Ok');
    return;
  }

  const point = Math.floor(
    (speed - speedLimit) / kmPerPoin,
  );
  if (point >= 12) console.log('License Suspended');
  else {
    console.log('Point', point);
  }
};

checkSpeed(70);

const checkEvenandOdd = (number) => {
  for (let i = 1; i <= number; i++) {
    const info = i % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(i, info);
  }
};

checkEvenandOdd(7);

const countTruthy = (input) => {
  let count = 0;
  for (let value of input) if (value) count++;
  return count;
};
console.log(
  countTruthy([1, 3, 3, 4, 5, null, false, undefined]),
);

const movie = {
  title: 'A',
  rate: 5.5,
  director: 'B',
  year: 1000,
};

const countProperties = (element) => {
  for (let value in element) {
    if (typeof element[value] === 'string')
      console.log(value, element[value]);
  }
};

countProperties(movie);

const countNumbers = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++)
    if (i % 3 === 0 || i % 5 === 0) count += i;
  return count;
};

console.log(countNumbers(10));

const countGrade = (number) => {
  let average = countAverage(number);
  if (average < 70) return 'A';
  if (average < 80) return 'Correct';
  return 'd';
};

// Single Responsibility Principle

const countAverage = (element) => {
  let count = 0;
  for (let value of element) count += value;
  return count / element.length;
};

console.log(countGrade([85, 85, 55]));

const countStars = (number) => {
  for (let num = 1; num <= number; num++) {
    let count = '';
    for (let star = 1; star <= num; star++) count += '*';

    console.log(num, count);
  }
};

countStars(5);

const countPrime = (input) => {
  for (let num = 2; num <= input; num++)
    if (isPrime(num)) console.log(num);
};

// Single Responsibility Principle

const isPrime = (number) => {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;

    return true;
  }
};

countPrime(20);

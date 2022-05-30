console.clear();

const validatePin = (pin) => {
  return /^(\d{4}||\d{6})$/.test(pin);
};
console.log(validatePin('123456'));

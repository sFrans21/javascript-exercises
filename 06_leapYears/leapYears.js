const leapYears = function (number) {
  if (number % 100 != 0) {
    return number % 4 == 0;
  } else {
    return number % 400 == 0;
  }
};
// Do not edit below this line
module.exports = leapYears;

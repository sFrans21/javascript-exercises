const sumAll = function (number1, number2) {
  if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
    return "ERROR";
  }
  if (number1 < 0 || number2 < 0) {
    return "ERROR";
  }
  let sumOfAll = 0;
  let selisih = number2 - number1;
  if (selisih < 0) {
    sumOfAll = number2;
    selisih += (0 - selisih) * 2;
    for (let i = 0; i < selisih; i++) {
      sumOfAll += number1 - i;
    }
  } else {
    sumOfAll = number1;
    for (let i = 0; i < selisih; i++) {
      sumOfAll += number2 - i;
    }
  }
  return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;

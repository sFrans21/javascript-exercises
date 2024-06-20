const convertToCelsius = function (number) {
  if (number >= 0) {
    return parseFloat(((number - 32) * (5 / 9)).toFixed(1));
  } else {
    return parseFloat(((number - 32) * (5 / 9)).toFixed(1));
  }
};

const convertToFahrenheit = function (number) {
  if (number >= 0) {
    return parseFloat((number * (9 / 5) + 32).toFixed(1));
  } else {
    return parseFloat((number * (9 / 5) + 32).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

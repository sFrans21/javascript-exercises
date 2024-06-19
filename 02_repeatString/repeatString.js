const repeatString = function (string, number) {
  let basketOfString = "";
  if (number == -1) {
    return "ERROR";
  } else if (string == "") {
    return "";
  }
  for (let i = 0; i < number; i++) {
    basketOfString += string;
  }
  return basketOfString;
};

// Do not edit below this line
module.exports = repeatString;

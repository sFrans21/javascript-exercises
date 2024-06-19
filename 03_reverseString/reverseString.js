const reverseStrings = function (strings) {
  let reversedStrings = "";
  for (let i = 1; i <= strings.length; i++) {
    let partitionOfStrings = strings[strings.length - i];
    reversedStrings += partitionOfStrings;
  }
  return reversedStrings;
};

// Do not edit below this line
module.exports = reverseStrings;

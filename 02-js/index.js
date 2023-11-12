// pad a value with leading zeros

// number 7, width = 5
// 7 -= 1
// width = 6
function zeroFill(number, width) {
  width -= number.toString().length;
  if (width > 0) {
    return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
  }
  return number + ""; // always return a string
}

/*

Code review:

- code is not indetended correctly (use prettier)
- no type checking of the inputs or error handling
- line 9 is hard to read, maybe split it up or add comments

*/

function zeroFill(number, width) {
  var numberString = number.toString();
  var numberOfZeros = width - numberString.length;
  // Create a string of zeros and concatenate it with the original number string
  var zerofilledNumber = Array(numberOfZeros + 1).join("0") + numberString;

  return zerofilledNumber;
}

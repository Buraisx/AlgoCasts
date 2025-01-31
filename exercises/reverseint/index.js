// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let parsedNum = parseInt(n.toString().split("").reverse().join(""));
  if(n < 0) {
    return parsedNum * -1;
  }

  return parsedNum;
}

module.exports = reverseInt;

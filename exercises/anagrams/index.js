// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Sol 1
  // O(2N)
  // const parsedStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  // const parsedStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
  // if (parsedStringA.length !== parsedStringB.length ) {
  //   return false;
  // }

  // let charsA = {};
  // let charsB = {};
  // // Both strings are same length at this point
  // for(let i = 0; i < parsedStringA.length; i++) {
  //   // build charA object
  //   if (!charsA[parsedStringA[i]]) {
  //     charsA[parsedStringA[i]] = 1;
  //   } else {
  //     charsA[parsedStringA[i]] += 1;
  //   }
  //   // build charB object
  //   if (!charsB[parsedStringB[i]]) {
  //     charsB[parsedStringB[i]] = 1;
  //   } else {
  //     charsB[parsedStringB[i]] += 1;
  //   }
  // }
  // for (let char in charsA) {
  //   if (charsA[char] !== charsB[char]) {
  //     return false;
  //   }
  // }
  
  // return true;
  /**
   * Sol 2
   * Sorting strings
   * 
   * Clean string
   * change it to an array
   * Sort it
   * join it
   * Compare
   */

   return cleanString(stringA) === cleanString(stringB);

}
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
module.exports = anagrams;

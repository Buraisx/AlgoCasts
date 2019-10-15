// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  /*
    Sol 1
    time complexity: O(N)
    space complexity: O(N)
  */
  let reversed = [];
  for(let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("") === str;

  /**
   * Sol 2
   * return str.split("").reverse().join("") == str;
   */

   /**
    * Sol 3
    * using every
    * time complexity: O(N)
    * space complexity: O(N)
    * 
    * return str.split("").every((char, index) => {
    *   return char === str[str.length - index - 1]
    * });
    */
}

module.exports = palindrome;
